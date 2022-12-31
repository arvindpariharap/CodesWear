import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState,useEffect } from "react";
import { BsSave } from "react-icons/bs";
import { Kelly_Slab } from "@next/font/google";

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState({})
  const [subTotal, setsubTotal] = useState(0)

  useEffect(() => {
    console.log('hey i am a useEffect from app.tsx')
    try {
      if (localStorage.getItem('cart')){
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
    
  }, [])
  

  const saveCart = (myCart) =>{
    localStorage.setItem("cart",JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart)
    for (let i=0; i<keys.length; i++){
      subt += myCart[keys[i]]["price"] * myCart[keys[i]].qty
    }
    setsubTotal(subt)
  } 

  const addToCart = (itemCode: string, qty: any, price: any, name: any, size: any, variant: any) =>{
    let newCart = cart;
    if (itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else{
    newCart[itemCode] = { qty:1, price, name, size, variant}
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const clearCart = () =>{
    setCart({})
    saveCart({})
  }

  const removeFromCart = (itemCode: string, qty: any, price: any, name: any, size: any, variant: any) =>{
    let newCart = cart;
    if (itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
      if (newCart[itemCode]['qty'] <= 0){
        delete newCart[itemCode]
      }
    setCart(newCart)
    saveCart(newCart)
  }
 
  return (
    <>
      <Navbar key={subTotal} cart = {cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/>
      <Component cart = {cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
      <Footer/>
    </>
  );
}
