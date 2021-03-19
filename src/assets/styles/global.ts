import {createGlobalStyle} from 'styled-components'
import img from '../img/bg.jpg'
export const GlobalStyle = createGlobalStyle`

:root{
    --text:#fff;
    --defaultButton: rgba(255,255,255, 0.2);
    --defaultButtonOn: rgba(255,255,255, 0.7);
    --header:rgba(255,255,255, 0.2);
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Ranchers;
    letter-spacing: 2px;
}

body{
    background:url(${img});
    color:var(--text);
    -webkit-font-smoothing: antialiased;
    background-repeat: repeat-y;
    background-origin: content-box;
}

`