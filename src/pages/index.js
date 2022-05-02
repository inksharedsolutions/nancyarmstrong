import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import HomeAuthor from "../components/HomeAuthor"
import Featured from "../components/Featured"
import Aboutbook from "../components/Book"
import Contact from "../components/Contact"
import Seo from "../components/Seo"
const index = () => {
  return (
    <Layout>
      <Seo com="Home" />
      <Banner />
      <HomeAuthor />
      <Featured />
      <Aboutbook />
      <Contact />
    </Layout>
  )
}

export default index
