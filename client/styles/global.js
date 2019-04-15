import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face: 'Teko';
  src: url(../fonts/Teko/Teko-Bold.ttf) format('truetype')
  src: url(../fonts/Teko/Teko-Light.ttf) format('truetype')
  src: url(../fonts/Teko/Teko-Medium.ttf) format('truetype')
  src: url(../fonts/Teko/Teko-Regular.ttf) format('truetype')
  src: url(../fonts/Teko/Teko-SemiBold.ttf) format('truetype')

  html {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
