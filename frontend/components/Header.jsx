import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { SignOutButton } from '../ui-components'
// import { useCurrentWidth } from '../hooks/useResize'
import NavMenu from './NavMenu'
import {
  Wrapper,
  HamburgerButton,
  LogoWrapper,
  CartHeaderWrapper,
  CTAWrapper,
  CartItemCounter
} from './styles/Header.styles'




export default function Header({ wallet, isSignedIn }) {

  console.log(wallet)
  const windowWidth = 1220

  const [isMenuOpen, setIsMenuOpen] = useState(false)


  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    }
    else {
      document.body.style.overflow = "scroll"
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (windowWidth && windowWidth >= 1180 && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [windowWidth])


  function RenderWalletSignBtn() {
    console.log(isSignedIn)
    if (!isSignedIn) {
      // Sign-in flow will reload the page later
      return <button onClick={() => wallet.signIn()} >Sign in</button>;
    } else {
      return <SignOutButton accountId={wallet.accountId} onClick={() => wallet.signOut()} >Signout</SignOutButton>
    }
  }

  return (
    <Wrapper>
      <LogoWrapper>

        <Link to="/">
          {/* <Logo /> */}LOGO
        </Link>
      </LogoWrapper>

      <NavMenu isMenuOpen={isMenuOpen} />
      <HamburgerButton onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)} isMenuOpen={isMenuOpen}><span /></HamburgerButton>

      {RenderWalletSignBtn()}
    </Wrapper>


  )
}
