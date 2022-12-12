import React from 'react'

import {HowItWorksWrapper, TextContent, Steps, Step, StepHeading, GradientNumber} from './HowItWorks.styled'

import { WhiteHeading2, WhiteHeading3, OpacityText } from '../styles/GlobalStyles.styled'

export default function HowItWorks() {

  const steps = [
    {
      icon: 'create-wallet',
      title: 'Create a wallet',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an "
    },
    {
      icon: 'join-community',
      title: 'Join our network',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took "
    },
    {
      icon: 'support',
      title: 'Support your favorite arist',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the "
    }
  ]

  return (
    <HowItWorksWrapper>
      <TextContent>
        <WhiteHeading2>Start supporting your favourite artist today!</WhiteHeading2>
        <OpacityText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</OpacityText>
      </TextContent>

      <Steps>
        {
          steps.map((step, index) => {
            return(
              <Step>
                <StepHeading>
                  <GradientNumber>0{index + 1}</GradientNumber>
                  <WhiteHeading3>{step.title}</WhiteHeading3>
                </StepHeading>
                <OpacityText>{step.text}</OpacityText>
              </Step>
            )
          })
        }
      </Steps>
    </HowItWorksWrapper>
  )
}
