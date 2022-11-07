import React from 'react'
import { WhyUsWrapper, SingleCard } from './styles/WhyUs.styled'
import { BigP, ContentWrapper, Heading2, Heading3, SmallP } from './styles/GlobalStyles.styled'

//Components
import SvgRender from './SvgRender'


export default function WhyUs() {
  return (
    <ContentWrapper>
      <Heading2>Why Us</Heading2>
      <BigP>When you are using our app everything is transparent.  </BigP>

      <WhyUsWrapper>
        <SingleCard>
          <SvgRender iconType="money" />
          <Heading3>- Make more money - </Heading3>
          <SmallP>We are charging 3-5% of every transaction depeands of your status.</SmallP>
        </SingleCard>
        <SingleCard>
          <SvgRender iconType="wallet" />
          <Heading3>- Money are instantly going to your wallet - </Heading3>
          <SmallP>When user subscribe or donate money will lend in your wallet in less than 5 min</SmallP>
        </SingleCard>
        <SingleCard>
          <SvgRender iconType="crypto" />
          <Heading3>- Accept Crypto Payment - </Heading3>
          <SmallP>Currencies accepted: NEAR & USDT ( Working on ETH & SOL integration )  </SmallP>
        </SingleCard>
        <SingleCard>
          <SvgRender iconType="chat" />
          <Heading3>- Meet your community - </Heading3>
          <SmallP>We will implement feed & chat for you & your subscibers  </SmallP> </SingleCard>
        <SingleCard>
          <SvgRender iconType="people" />
          <Heading3>-Grow your community in a sustainable way</Heading3></SingleCard>
        <SingleCard>
          <SvgRender iconType="chat" />
          <Heading3>- Meet your community - </Heading3>
          <SmallP>We will implement feed & chat for you & your subscibers  </SmallP> </SingleCard>
      </WhyUsWrapper>

    </ContentWrapper>
  )
}
