import React from 'react'
import { HomeHero } from './styles/NonSignedHomepage.styled'
import { Heading1, BigP, SmallP } from './styles/GlobalStyles.styled'

export default function HomeHero() {
  return (
    <HomeHero>
      <Heading1>What is Community Power protocol?</Heading1>
      <BigP>
        Place for independent creators, where fans can support their work by subscriptions or one time donation
      </BigP>
      <SmallP>
        Give your biggest fans a space to connect, discuss, and dive deeper into the world of your conten.
        All while establishing a sustainable income to fund your creative freedom.
      </SmallP>

    </HomeHero>
  )
}
