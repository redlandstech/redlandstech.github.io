import React from 'react'
import banner from '../../static/banner.png'
import {styled} from '../styles/theme'

const StyledBanner = styled('div')`
  background-image: url(${banner});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 100vh;
`

export default function() {
  return <StyledBanner />
}
