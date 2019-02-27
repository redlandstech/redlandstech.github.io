import styled, {css, createGlobalStyle} from 'styled-components'
import curtana from './curtana'

export {css, styled}

export interface Theme {
  readonly breakpointLg: string
  readonly breakpointMd: string
  readonly breakpointSm: string
  readonly breakpointXs: string
  readonly backgroundColor: string
  readonly linkColor: string
  readonly breakpointColor: string
  readonly textColor: string
  readonly codeColor: string
}

export const theme: Theme = {
  breakpointLg: '1600px',
  breakpointMd: '1080px',
  breakpointSm: '640px',
  breakpointXs: '400px',
  backgroundColor: '#fff',
  linkColor: '#a212d1',
  breakpointColor: '#fff',
  textColor: '#000',
  codeColor: '#3914b3',
}

export const GlobalStyle = createGlobalStyle`
  ${curtana(theme)}
`
