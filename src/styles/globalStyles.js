import { createGlobalStyle } from 'styled-components';
import { primaryDarkColor, primaryColor } from '../config/colors';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background-color: ${primaryDarkColor} ;
  color: ${primaryColor};
}

body, html, #root {
  height: 100% ;
}

button {
  cursor: pointer;
  background: ${primaryColor};
  border:none ;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
}

a{
  text-decoration: ${primaryColor};
  color: #fff;
  cursor: pointer;
}

ul{
  list-style: none ;
}

container{

}
`;
