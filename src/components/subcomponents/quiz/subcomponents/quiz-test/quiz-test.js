import { useEffect, useState } from 'react';
import Question from './subcomponents/questions/question';
import Result from './subcomponents/result/result';

let question; let newArray;

function QuizTest(props){

    // by help of this variable, on each new question, the components has fade in effect. 
    const [animate, setAnimate] = useState(false); 
    
    // Num variable is corresponding to the question index in the array.
    const [num, setNum] = useState(0);

    // This variable counts the answers that suer has correct, which will be displayed in the end.
    const [score, setScore] = useState(0);

    useEffect( () => {
        // If questions are left to be answered, it takes all possibly answers, mixes them up and positioning them in random positions.
        // If not, user will be redirected to the results page.
        if(num !== 10){
            question = props.data[num].question;
            let answers = [...props.data[num]['incorrect_answers'], props.data[num]['correct_answer']];
            let answersCopy = [...answers]
            newArray = [];
            for(let i = 0; i < answers.length; i++){
                let randomNum = Math.floor(Math.random() * answersCopy.length);
                newArray.push(answersCopy[randomNum]);
                answersCopy.splice(randomNum, 1);
            }
            setAnimate(true);
        }
    }, [num, props]);

    function nextQuestion(){
        setNum(num + 1);

        setAnimate(false);
        setTimeout( ()=>{ setAnimate(true) }, 1);
    }

    function answer(e){
        if(e.target.innerText === props.data[num]['correct_answer']){
            setScore(score + 1);
        }
        setNum(num + 1);

        setAnimate(false);
        setTimeout( ()=>{ setAnimate(true) }, 1);
    }

    return(
        <div>
            {!animate ? <div></div> 
             : num !== 10 && animate ? <Question answer={answer}
                                                num={num} 
                                                question={question} 
                                                answers={newArray} 
                                                next={nextQuestion}/> 
                                    : <Result anotherTest={props.anotherTest} 
                                                tryAgain={() => {
                                                  setNum(0);
                                                  setScore(0);
                                                  setAnimate(false);
                                                }}
                                                score={score}/>}
        </div>
    )
}

export default QuizTest;