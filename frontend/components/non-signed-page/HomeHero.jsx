import React from 'react';

import WalletButton from './WalletButton'

import { OpacityText, WhiteHeading1, MobileDesktopImage } from '../styles/GlobalStyles.styled'
import {HeroWrapper, ButtonWrapper} from './HomeHero.styled'

import heroImg from '../../assets/images/hero-image.png'
import mobileHeroImg from '../../assets/images/mob-hero-img.png'

export default function HomeHero({wallet}) {

  return (
    <MobileDesktopImage>
      <HeroWrapper>
        <div>
          <WhiteHeading1>What is Community Power protocol?</WhiteHeading1>
          <OpacityText>
            Place for independent creators, where fans can support their work by subscriptions or one time donation
          </OpacityText>
          <br />
          <OpacityText>
            Give your biggest fans a space to connect.
            {/* discuss, and dive deeper into the world of your conten.
            All while establishing a sustainable income to fund your creative freedom. */}
          </OpacityText>
          <ButtonWrapper>
            <WalletButton isFullWidthOnMobile={true} wallet={wallet} size="large">Sign up</WalletButton>
          </ButtonWrapper>
        </div>

        
        <img className="hero-img-mobile" src={`${mobileHeroImg}`} alt="fans-club" />
        <img className="hero-img-desktop" src={`${heroImg}`} alt="fans-club" />
      </HeroWrapper>
    </MobileDesktopImage>
  )
}
