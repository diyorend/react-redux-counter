import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  
  body{
    height: 100vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #08a589;
    text-shadow: 0px 0px 10px #88cdb6;;
    background: rgba(109, 228, 220, 0.741);
  }
 
`;

export default GlobalStyles;
