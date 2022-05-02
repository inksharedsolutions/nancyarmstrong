import React from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"
import "../assets/scss/style.scss"
const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default Layout
