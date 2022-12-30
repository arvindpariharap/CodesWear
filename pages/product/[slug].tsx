import { useRouter } from 'next/router'

const Slug = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>This slug is: {slug}</p>
}

export default Slug