import { DefaultButton} from "../../assets/styles/Components/Button";
import { Header } from "../../assets/styles/Components/Header";
import { Description, Footer, P } from "./style";

const start = ()=>{
    window.location.href = "http://localhost:3000/quiz"
}

export function Home(){
    return(
        <div>
            <Header>Welcome to Quiz</Header>
            <Description>
                <P>10 questions will be shown to you.</P>
                <P>Can yout get maximun score?</P>
            </Description>
            <Footer>
                <DefaultButton onClick={start}>Start</DefaultButton>
            </Footer>
        </div>
    )
}