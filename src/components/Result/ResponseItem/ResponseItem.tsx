//material-ui
import CancelIcon from '@material-ui/icons/Cancel';
import CheckIcon from '@material-ui/icons/CheckCircle';

//import style
import {ItemList} from './style'

//typing
interface ResultProps{
    question:string,
    response:string
}

export function ResponseItem(props:ResultProps){
    const {question, response} = props
    return(
            <ItemList>
                <div>
                    {response==="True"?
                    <CheckIcon style={{color:"green"}}/>
                    :<CancelIcon style={{color:"red"}}/>}
                    <p>{question}</p>
                </div>
            </ItemList>
    )
}