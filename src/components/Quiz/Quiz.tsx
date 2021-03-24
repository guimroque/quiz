//hooks imports
import { useEffect, useState } from "react";
import useQuestions from "../../hooks/useQuestions"
import useConvert from "../../hooks/useConvert"

//components
import { Header } from "../../assets/styles/Components/Header"; 
import {  DefaultButton } from "../../assets/styles/Components/Button";
import { Description, Footer, P, Container} from "./style";


export function Quiz(){
    //setConsts
    const [contador, setContador] = useState(0);
    const {getQuestions, question, getQuestion, validQuestion, result} = useQuestions();
    const {decodeHTMLEntities} = useConvert();
    
    //set functions
    const next = async()=>{
        setContador(contador+1)
    }
    const validatorTrue = async()=>{
        await validQuestion(contador, "True")
        await next()
    }
    const validatorFalse = async()=>{
        await validQuestion(contador, "False")
        await next()
    }

    //control render
    useEffect(()=>{
        getQuestions()
    }, [])

    useEffect(()=>{
        if(contador>=10){
            var hits = 0
            result.filter((result)=>{
                if(result.response === "True"){
                    hits++;
                }
                return true
            })
            localStorage.score = (hits/result.length)*100
            localStorage.result = JSON.stringify(result)
            window.location.href = "http://localhost:3000/result"
        }else{
            getQuestion(contador)
        }
    },[contador])

    return(
        <div>
            <Header>{question?.category}</Header>        
            <Container>
                <Description>
                    <P>{question?decodeHTMLEntities(question.question):<></>}</P>
                </Description>
            </Container>
            <Footer>
                <DefaultButton onClick={validatorTrue}>True</DefaultButton>
                <DefaultButton onClick={validatorFalse}>False</DefaultButton>
            </Footer>
        </div>
        
    )
}