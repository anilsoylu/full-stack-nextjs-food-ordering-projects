import axios from "axios"
import React from "react"
import Meta from "../../components/Meta"
import MenuWrapper from "../../components/product/MenuWrapper"

const Index = ({ categoryList, productList }) => {
  return (
    <>
      <Meta title="Menu" description="Menu" />
      <div className="pt-10">
        <MenuWrapper categoryList={categoryList} productList={productList} />
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const category = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  )
  const product = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  return {
    props: {
      categoryList: category.data ? category.data : [],
      productList: product.data ? product.data : [],
    },
  }
}

export default Index
