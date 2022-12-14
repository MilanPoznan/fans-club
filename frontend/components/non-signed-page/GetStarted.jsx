import React from 'react'
import styled from 'styled-components'
import {device} from '../styles/mediaQueries'

import WalletButton from './WalletButton'

import { WhiteHeading2, WhiteHeading3, OpacityText, ContentWrapper } from '../styles/GlobalStyles.styled'

import lightBackground from '../../assets/images/light-background.png'

const GetStartedBackground = styled.div`
  position: absolute;
  top: -15vw;
  left: 0;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  height: calc(100% + 15vw);
  width: 100%;
`

const Content = styled.div`
  position: relative;
  padding: 50px 0px;
  text-align: center;
  z-index: 3;
  h2 {
    margin-bottom: 40px;
    color: white;
  }
  h3 {
    font-weight: 400;
    line-height: 40px;
  }
  p {
    max-width: 500px;
    margin: 0 auto 40px;
  }

  @media ${device.desktopS} {
    padding: 0px 0 200px 0;
  }
`

const GetStartedWrapper = styled.div`
  position: relative;

`


export default function GetStarted({wallet}) {
  return (
    <GetStartedWrapper>
      <ContentWrapper>
          <Content>
            <WhiteHeading3>Join our</WhiteHeading3>
            <WhiteHeading2>Community</WhiteHeading2>
            <OpacityText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</OpacityText>
            <WalletButton isFullWidthOnMobile={true} wallet={wallet} size="large">Sign up</WalletButton>
          </Content>
      </ContentWrapper>   
      <GetStartedBackground style={{backgroundImage: `url(${lightBackground})`}} />
    </GetStartedWrapper>
  )
}
