import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
}

h1{ color:#fff;}

.inner {max-width:1200px; margin: 0 auto;}

button { width: 120px; cursor: pointer; opacity: .8; background: #fff; border:0; text-transform: uppercase; padding:20px 20px!important; color:#fff; background-color:#000; margin:0 auto;margin-left:20px; border-radius:30px; font-weight:800; text-align:center;}

button:first-child {margin-left:0;}

.red {background-color: #ff0000;}
.hightlight {background-color: #F0B40A; color: #320A46;}

* {
  box-sizing: border-box;
}
`;

export default GlobalStyle;
