import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'; // 이 라인만 변경

const GlobalStyle = createGlobalStyle`
  ${reset}
 
  body {
    font-size: 25px;
    line-height: 1.6;
    font-family: 'Pretendard', sans-serif;


  }









`;

export default GlobalStyle;
