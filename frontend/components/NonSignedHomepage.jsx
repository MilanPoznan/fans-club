import React from 'react'
import HomeHero from './HomeHero'
import { Heading1, BigP, SmallP } from './styles/GlobalStyles.styled'
import Header from './Header'
import WhyUs from './WhyUs'

export default function NonSignedHomepage({ wallet }) {
  return (
    <div>
      <Header wallet={wallet} />
      <HomeHero>
      </HomeHero>

      <WhyUs></WhyUs>
    </div>
  )
}
