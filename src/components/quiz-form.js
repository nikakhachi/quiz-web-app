import Options from './subcomponents/options/options';
import GetData from './subcomponents/quiz/get-data';
import { useState } from 'react';

function QuizForm(){

    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [start, setStart] = useState(false);

    function selectCategory(e){
        setCategory(e.target.value);
    }
    function selectDifficulty(e){
        setDifficulty(e.target.value);
    }
    function startQuiz(e){
        e.preventDefault();
        setStart(true);
    }
    function anotherTest(){
        setStart(false);
    }

    return(
        <div>
            {!start ? <Options selectCategory={selectCategory} 
                               selectDifficulty={selectDifficulty} 
                               start={startQuiz} /> 
                    : <GetData category={category} difficulty={difficulty} anotherTest={anotherTest}/>}
        </div>
    )
}

export default QuizForm;