import Options from './subcomponents/options/options';
import GetData from './subcomponents/quiz/get-data';
import { useState } from 'react';


function QuizForm(){

    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [start, setStart] = useState(false);
    const [notFoundText, setnotFoundText] = useState('');

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
    // This function is passed to the last component, where you see test results.
    // It returns you from results page to the main page to choose options for the new test.
    function anotherTest(){
        setStart(false);
        setnotFoundText('');
    }
    // This function is run, when no results are found on requested api.
    function noQuestions(){
        setStart(false);
        
        //This text will be displayed in Options component, if no question were found in selected difficulty and category
        setnotFoundText('No questions were found. Please choose another Category/Difficulty.');
    }

    return(
        <div>
            {!start ? <Options selectCategory={selectCategory} 
                               selectDifficulty={selectDifficulty} 
                               start={startQuiz}
                               errorText={notFoundText} /> 
                    : <GetData category={category} 
                               difficulty={difficulty} 
                               anotherTest={anotherTest}
                               notFound={noQuestions}/>}
        </div>
    )
}

export default QuizForm;