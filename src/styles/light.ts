import { extendTheme } from '@chakra-ui/react';

// * Sobreescrevendo os temas padroes
export const light = extendTheme({
  colors: {
    gray: {
      "900": "#C71585",
      "800": "#FF1493",
      "700": "#FF69B4",
      "600": "#DB7093",
      "500": "#FFB6C1",
      "400": "#F08080",
      "300": "#F08080",
      "200": "#B3B5C6",
      "100": "#CD5C5C",
      "50": "#DC143C",
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
        color: 'purple.50'
      }
    }
  }
})