import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { useRef } from "react";

const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md">
      <div className="logo">
        <Link href={"/"}>
          <Image width={200} height={40} src="/logo.png" alt="" />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-md">
          <Link href={"/tshirts"}>
            <li>Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/stikers"}>
            <li>Stikers</li>
          </Link>
          <Link href={"/mugs"}>
            <li>Mugs</li>
          </Link>
        </ul>
      </div>
      <div
        onClick={toggleCart}
        className="cursor-pointer cart absolute right-0  top-4 mx-5"
      >
        <AiOutlineShoppingCart className="text-xl md:text-2xl" />
      </div>
      <div
        ref={ref}
        className="w-72 h-full sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform translate-x-full"
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <div
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500"
        >
          <AiFillCloseCircle />
        </div>
        <ol className="list-decimal font-semibold">
          <li>
            <div className="item flex">
              <div className="w-2/3 font-semibold">Tshirt - wear the code</div>
              <div className="w-1/3 font-semibold flex items-center justify-center text-lg">
                <AiFillMinusCircle className="cursor-pointer text-pink-500" />
                <span className="mx-2 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer text-pink-500" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex">
              <div className="w-2/3 font-semibold">Tshirt - wear the code</div>
              <div className="w-1/3 font-semibold flex items-center justify-center text-lg">
                <AiFillMinusCircle className="cursor-pointer text-pink-500" />
                <span className="mx-2 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer text-pink-500" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex">
              <div className="w-2/3 font-semibold">Tshirt - wear the code</div>
              <div className="w-1/3 font-semibold flex items-center justify-center text-lg">
                <AiFillMinusCircle className="cursor-pointer text-pink-500" />
                <span className="mx-2 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer text-pink-500" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex">
              <div className="w-2/3 font-semibold">Tshirt - wear the code</div>
              <div className="w-1/3 font-semibold flex items-center justify-center text-lg">
                <AiFillMinusCircle className="cursor-pointer text-pink-500" />
                <span className="mx-2 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer text-pink-500" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex">
              <div className="w-2/3 font-semibold">Tshirt - wear the code</div>
              <div className="w-1/3 font-semibold flex items-center justify-center text-lg">
                <AiFillMinusCircle className="cursor-pointer text-pink-500" />
                <span className="mx-2 text-sm">1</span>
                <AiFillPlusCircle className="cursor-pointer text-pink-500" />
              </div>
            </div>
          </li>
        </ol>
        <div className="flex mt-5">
          <button className="mx-2 inline-flex text-white bg-pink-500 border-0 py-1 px-2 focus:outline-none hover:bg-pink-600 rounded">
            <BsFillBagCheckFill className="m-1" />
            Checkout
          </button>
          <button className="max-2 inline-flex text-white bg-pink-500 border-0 py-1 px-2 focus:outline-none hover:bg-pink-600 rounded">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
