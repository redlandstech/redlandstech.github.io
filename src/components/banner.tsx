import React from 'react'
import * as banner from '../../static/banner.png'
import {styled} from '../styles/theme'

const StyledBanner = styled('header')`
  background-image: url(${banner}) !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  min-height: 80vh !important;
`

export default function() {
  return <StyledBanner />
}
