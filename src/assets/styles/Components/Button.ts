import styled from 'styled-components'

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
