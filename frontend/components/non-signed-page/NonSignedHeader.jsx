import React from 'react'

import WalletButton from './WalletButton'
import {MobileDesktopImage} from '../styles/GlobalStyles.styled'

import {useCurrentWidth} from '../../hooks/useResize'

import {HeaderWrapper} from './NonSignedHeader.styled'

import logo from '../../assets/images/logo-fansclub.svg'
import mobileLogo from '../../assets/images/mob-logo-fansclub.svg'

export default function NonSignedHeader({wallet}) {

  const windowWidth = useCurrentWidth()

  return (
    <HeaderWrapper>
      <MobileDesktopImage>
        <img className="hero-img-mobile" src={`${mobileLogo}`} alt="fans-club" />
        <img className="hero-img-desktop" src={`${logo}`} alt="fans-club" />
      </MobileDesktopImage>
      <WalletButton size="small" wallet={wallet}>Sign up</WalletButton>
    </HeaderWrapper>
  )
}
