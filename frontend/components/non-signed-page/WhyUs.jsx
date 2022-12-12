import React from 'react'
import { WhyUsWrapper, SingleCard, WhyUsSectionWrapper, GradientIconWrapper, IconWrapper, TextWrapper } from './WhyUs.styled'
import { BigP, WhiteHeading2, WhiteHeading3, OpacityText } from '../styles/GlobalStyles.styled'

//Components
import SvgRender from '../SvgRender'


export default function WhyUs() {

  return (
    <WhyUsSectionWrapper>
      <WhiteHeading2>Why Us</WhiteHeading2>
      <BigP>When you are using our app everything is transparent. Whether you are an independent creator or a fan looking to support your favourite artists and content creators, we will provide you with easy, secure and anonyums way to do that.</BigP>

      <WhyUsWrapper>
        <SingleCard>
          <GradientIconWrapper>
            <IconWrapper>
              <SvgRender iconType="money" />
            </IconWrapper>
          </GradientIconWrapper>
          <TextWrapper>
            <WhiteHeading3>Make more money</WhiteHeading3>
            <OpacityText>We are charging 3-5% of every transaction depeands of your status.</OpacityText>
          </TextWrapper>
        </SingleCard>
        <SingleCard>
          <GradientIconWrapper>
            <IconWrapper>
              <SvgRender iconType="instant-payments" />
            </IconWrapper>
          </GradientIconWrapper>
          <TextWrapper>
            <WhiteHeading3>Instant payments</WhiteHeading3>
            <OpacityText>When user subscribe or donate, money will land in your wallet in less than 5 min.</OpacityText>
          </TextWrapper>
        </SingleCard>
        <SingleCard>
          <GradientIconWrapper>
            <IconWrapper>
              <SvgRender iconType="accepte-crypto" />
            </IconWrapper>
          </GradientIconWrapper>
          <TextWrapper>
            <WhiteHeading3>Accept Crypto Payment</WhiteHeading3>
            <OpacityText>Currencies accepted: NEAR & USDT ( Working on ETH & SOL integration )</OpacityText>
          </TextWrapper>
        </SingleCard>
        <SingleCard>
          <GradientIconWrapper>
            <IconWrapper>
              <SvgRender iconType="meet-community" />
            </IconWrapper>
          </GradientIconWrapper>
          <TextWrapper>
            <WhiteHeading3>Meet your community</WhiteHeading3>
            <OpacityText>We will implement feed & chat for you & your subscibers</OpacityText>
          </TextWrapper>
        </SingleCard>
        <SingleCard>
          <GradientIconWrapper>
            <IconWrapper>
              <SvgRender iconType="grow-community" />
            </IconWrapper>
          </GradientIconWrapper>
          <TextWrapper>
            <WhiteHeading3>Grow your community</WhiteHeading3>
            <OpacityText>We are charging 3-5% of every transaction depeands of your status.</OpacityText>
          </TextWrapper>
        </SingleCard>
        <SingleCard>
          <GradientIconWrapper>
            <IconWrapper>
              <SvgRender iconType="security" />
            </IconWrapper>
          </GradientIconWrapper>
          <TextWrapper>
            <WhiteHeading3>Secure and anonymus</WhiteHeading3>
            <OpacityText>We are charging 3-5% of every transaction depeands of your status.</OpacityText>
          </TextWrapper>
        </SingleCard>
      </WhyUsWrapper>
    </WhyUsSectionWrapper>
  )
}
