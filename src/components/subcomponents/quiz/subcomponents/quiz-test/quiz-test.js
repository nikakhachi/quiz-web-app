import './quiz-test.css';
import { useState } from 'react';
import Question from './subcomponents/questions/question';
import Result from './subcomponents/result/result';

let question; let newArray;

function QuizTest(props){
    
    const [num, setNum] = useState(0);

    // If questions are left to be answered, it takes all possibly answers, mixes them up and positioning them in random positions.
    if(num !== 10){
        question = props.data.results[num].question;
        let answers = [...props.data.results[num]['incorrect_answers'], props.data.results[num]['correct_answer']];
        let answersCopy = [...answers]
        newArray = [];
        for(let i = 0; i < answers.length; i++){
            let randomNum = Math.floor(Math.random() * answersCopy.length)
            newArray.push(answersCopy[randomNum])
            answersCopy.splice(randomNum, 1);
        }
    }

    return(
        <div>
            {num !== 10 ? <Question num={num} question={question} answers={newArray} next={() => setNum(num + 1)}/> : <Result anotherTest={props.anotherTest} tryAgain={() => setNum(0)}/>}
        </div>
    )
}

export default QuizTest;