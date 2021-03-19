import styled from 'styled-components'

export const ContainerList = styled.div`
width:60%;
display:flex;
font-size:0.7em;
max-width:500px;
flex-direction:column;
align-items:center;
justify-content:center;
margin:2em 0em;
@media(max-width: 800px) {
        width:80%;
  }
div{
    display:flex;
    align-items:center;
    justify-content:flex-direction;
    div :first-child{
        position:relative;
        left:0px;
        width:30%;
    }
}
p{
    width:90%;
}
`
export const Container = styled.div`
    display:flex; 
    align-items:center;
    justify-content:center;
    font-size:1.2em;
`
export const Score = styled.div`
    display:flex; 
    align-items:center;
    justify-content:space-between;
    width:30%;
    margin-bottom:1em;
    @media(max-width: 800px) {
        width:60%;
        font-size:0.9em;
  }
`
export const Hits = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`