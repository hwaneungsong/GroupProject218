import React from 'react'
import Head from 'next/head'
import RootLayout, {siteTitle} from './layout'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection'
import OfferSection from './components/OfferSection'
import ProductSection from './components/ProductSection'

export default function Home() {
  return (  
    <RootLayout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NavigationBar />
      <div>
        <HeroSection/>
      </div>
      <div>
        <OfferSection />
      </div>

      <div>
        <ProductSection />
      </div>



    </RootLayout>
  )
}
