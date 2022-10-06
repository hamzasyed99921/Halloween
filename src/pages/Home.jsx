import React from 'react'
import Documents from '../components/Elements/Documents'
import Faqs from '../components/Elements/Faqs'
import Hero from '../components/Elements/Hero'
import Roadmap from '../components/Elements/Roadmap'
import Section from '../components/Elements/Section'
import Tokenomics from '../components/Elements/Tokenomics'

const Home = () => {
  return (
    <>
      <Hero/>
      <Section/>
      <Tokenomics/>
      <Roadmap/>
      <Documents/>
      <Faqs/>
    </>
  )
}

export default Home