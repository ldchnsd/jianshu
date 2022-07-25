import { createGlobalStyle } from "styled-components";

export const GlobalFontStyle = createGlobalStyle`
@font-face {
  font-family: 'iconfont';  /* Project id 2468859 */
  src: url('//at.alicdn.com/t/font_2468859_bis8y7il1.woff2?t=1634457194883') format('woff2'),
      url('//at.alicdn.com/t/font_2468859_bis8y7il1.woff?t=1634457194883') format('woff'),
      url('//at.alicdn.com/t/font_2468859_bis8y7il1.ttf?t=1634457194883') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;
