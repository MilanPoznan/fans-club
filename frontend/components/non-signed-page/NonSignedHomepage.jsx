import React from 'react'

import HomeHero from './HomeHero'
import WhyUs from './WhyUs'
import GetStarted from './GetStarted'
import NonSignedHeader from './NonSignedHeader'
import NonSignedFooter from './NonSignedFooter'
import HowItWorks from './HowItWorks'

import { Heading1, BigP, SmallP, ContentWrapper } from '../styles/GlobalStyles.styled'
import {NonSignedWrapper} from './NonSignedHomepage.styled'


export default function NonSignedHomepage({ wallet }) {

  return (
    <NonSignedWrapper>

        <ContentWrapper>
          <NonSignedHeader wallet={wallet} />
          
          <HomeHero wallet={wallet} />
            
          <WhyUs />

          <HowItWorks />

        </ContentWrapper>

      <GetStarted wallet={wallet} />
        
      <NonSignedFooter />

    </NonSignedWrapper>
  )
}
