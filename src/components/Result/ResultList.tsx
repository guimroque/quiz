//hooks imports
import { useEffect, useState } from "react";
import useConvert from "../../hooks/useConvert"

//import components
import { Header } from "../../assets/styles/Components/Header"
import { ResponseItem } from "./ResponseItem/ResponseItem";
import { Container, ContainerList, Hits, Score } from "./style";

//material-ui
import CircularProgress from '@material-ui/core/CircularProgress';
import { DefaultButton } from "../../assets/styles/Components/Button";

//typing
type Result = {
    question:string,
    response:string
}

export function ResultList(){
    //setConsts
    const [results, setResults] = useState<Result[]>([]);
    const [score, setScore] = useState(0);
    const {decodeHTMLEntities} = useConvert();

    //setFunctions
    const parseResults= async()=>{
        setResults(JSON.parse(localStorage.result))
        setScore(localStorage.score)
    }
    const retry = ()=>{
        window.location.href = "http://localhost:3000/quiz"
    }


    useEffect(()=>{
        parseResults()
    }, [])

    return(
        <div>
            <Header>
                <Score>
                    <h3>Score:</h3>
                    <Hits>
                    <CircularProgress 
                    variant="determinate"
                    thickness={12}
                    style={{color:"white"}}
                    value={score}/>
                    {score/results.length}/{results.length}
                    </Hits>
                </Score>
                <DefaultButton
                    onClick={retry}>
                    Retry
                </DefaultButton>
            </Header>
            <Container>
                <ContainerList>
                {results.map((result)=>{
                return <ResponseItem 
                            question={decodeHTMLEntities(result.question)} 
                            response={result.response} 
                            key={result.question}/>
                })}
                </ContainerList>
            </Container>
        </div>
    )
}