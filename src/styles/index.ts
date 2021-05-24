import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
  --black: #000;
  --green-jussi: #03FFA5;
  --white: #FFF;
  --pink-jussi: #EE0E7D;
  --grey: #F2F2F2;
  --dark-grey: #5B5B5B;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
}

button{
    cursor: pointer;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, span, p, ul, li{
    font-family: 'Barlow', sans-serif;

  }


`;
