import styled from 'styled-components'

export const Description = styled.div`
    background:rgba(255, 255, 255, 0.2);
    border-radius:5px;
    color:#fff;
    width:40%;
    height:auto;
    min-height:30vh;
    font-size:1em;
    font-weight:bold;
    display:row;
    align-items:center;
    justify-content:center;
    margin:2em 0em;
    padding:3em 1em;
    @media(max-width: 800px) {
        width:90%;
  }
`

export const P = styled.p`
    color:#fff;
    text-align:center;
    padding:2em 0em;
`

export const Footer = styled.div`
    width:100%;
    height:30vh;
    display:flex;
    align-items:center;
    justify-content:center;
    button{
        margin:0px 4em 0px 4em;
        @media(max-width: 800px) {
            margin:0px 1.5em 0px 1.5em;
  }
    }
`

export const Container = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    
`