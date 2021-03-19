//hooks imports
import { useState } from "react";

//API
import axios from "axios"

//typing
type Question = {
    category:string,
    question:string,
    correct_answer:string
}
type Result = {
    question:string,
    response:string
}

export default function useQuestions() {
    //set consts
    const [questions, setQuestions] = useState<Question[]>([]); 
    const [question, setQuestion] = useState<Question>();
    const [result, setResult] = useState<Result[]>([])    
    
    //set functions
    async function  getQuestions(){
            await axios.get("https://opentdb.com/api.php?amount=11&difficulty=hard&type=boolean")
            .then(response=>{
                var res = (response.data.results)
                //console.log(decodeHTMLEntities(response.data.results.question))
                setQuestions(res)
                setQuestion(res[0])})
    }

    function getQuestion(id:number){
        setQuestion(questions[id])
    }

    function validQuestion(id:number, value:string){
        var results = result
        if(value === questions[id].correct_answer){
            results.push({
                question:questions[id].question,
                response:"True"
            })
        }else{
            results.push({
                question:questions[id].question,
                response:"False"
            })
        }
        setResult(results)
    }

    return {getQuestions, question, getQuestion, validQuestion, result}


}