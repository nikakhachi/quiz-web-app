import Loading from './subcomponents/loading/loading';
import QuizTest from './subcomponents/quiz-test/quiz-test';
import { useState, useEffect } from 'react';

function Data(props) {

    const [data, setData] = useState([]);

    useEffect(() => {

        async function getData(){

        const response = await fetch(`https://opentdb.com/api_category.php`);
        const data = await response.json();

        // This method finds the corresponding id to the category chosen.
        const category = data[`trivia_categories`].filter(item => {
            return item.name === props.category;
            });
        const id = category.length === 0 ? '' : category[0].id;

        // Gets 10 questions of corresponding difficulty and category.
        // The amount of questions can be changed from the url. User can't to it.
        const response2 = await fetch(`https://opentdb.com/api.php?amount=10&category=${id}&difficulty=${props.difficulty}`);
        const data2 = await response2.json();

        // If no questions are found on corresponding difficulty and category...
        // ...User will be returned to the main page. Told that questions weren't found.
        // If they were found, the quiz will start immediately.
        if(data2.results.length === 0){
            props.notFound();
        }else{
            setData(data2.results);
        }
    }
        // Calling the function above
        getData();
    }, [props]);

    return(
        data.length === 0 ? <Loading /> : <QuizTest data={data} anotherTest={props.anotherTest}/>
    )
}

export default Data;

    