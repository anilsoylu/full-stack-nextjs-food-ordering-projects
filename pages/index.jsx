import axios from "axios"
import Input from "../components/form/Input"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import Meta from "../components/Meta"
import Home from "./home"

export default function Index({ categoryList, productList }) {
  return (
    <>
      <Meta title="Anasayfa" description="Anasayfa" />
      <Home categoryList={categoryList} productList={productList} />
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`)

  const product = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)

  return {
    props: {
      categoryList: res.data ? res.data : [],
      productList: product.data ? product.data : [],
    },
  }
}
