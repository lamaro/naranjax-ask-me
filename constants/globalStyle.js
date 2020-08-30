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

.inner {max-width:1200px; margin: 0 auto;}

button { width: 100px; cursor: pointer; opacity: .8; background: #fff; border:0; text-transform: uppercase; padding:20px 10px !important; color:#fff; background-color:#000; margin:0 auto;margin-left:20px; border-radius:30px;}

.red {background-color: #ff0000;}

* {
  box-sizing: border-box;
}
`;

export default GlobalStyle;
