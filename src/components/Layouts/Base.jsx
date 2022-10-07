import React from 'react'
import Footer from './Footer'
import Header from './Header'
import ScrollToTop from "react-scroll-to-top";

const Base = (props) => {
  return (
    <>
    <ScrollToTop color='white' style={{backgroundColor: '#f27022'}} smooth />
        <Header/>
        {props.children}
        <Footer/>
    </>
  )
}

export default Base