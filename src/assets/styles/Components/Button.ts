import styled, { css } from 'styled-components'

export const DefaultButton = styled.button`
    background:transparent;
    color:var(--text);
    min-height:2em;
    min-width:10em;
    margin:0.5em;
    border:3px solid white;
    font-weight:bold;
    border-radius:5px;
    cursor: pointer;
    padding:1em;
    &:hover{
        background:var(--defaultButtonOn);
        transform:translateY(-2px);
        transition:300ms;
        color:#000;
        border:3px solid var(--defaultButtonOn);
    }
`

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props && css`
    background: palevioletred;
    color: white;
  `}
`;