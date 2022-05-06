import { extendTheme } from '@chakra-ui/react';

// * Sobreescrevendo os temas padroes
// LIGHT THEME
export const light = extendTheme({
  colors: {
    gray: {
      "900": "#4B0082",
      "800": "#E6E6FA ",
      "700": "#DDA0DD",
      "600": "#EE82EE",
      "500": "#DA70D6",
      "400": "#FF00FF",
      "300": "#BA55D3",
      "200": "#9370DB",
      "100": "#8A2BE2",
      "50": "#9400D3",
    },
    white: {
      "900": "#FFFFFF"
    }
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: 'white.900',
        color: 'purple.300'
      }
    }
  }
})