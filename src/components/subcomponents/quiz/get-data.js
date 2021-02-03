import Loading from './subcomponents/loading/loading';
import QuizTest from './subcomponents/quiz-test/quiz-test';
import { useState, useEffect } from 'react';

function Data(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData(){
        const response = await fetch(`https://opentdb.com/api_category.php`);
        const data = await response.json();
        const category = data[`trivia_categories`].filter(item => {
            return item.name === props.category;
            });
        const id = category.length === 0 ? '' : category[0].id;
        const response2 = await fetch(`https://opentdb.com/api.php?amount=10&category=${id}&difficulty=${props.difficulty}`)
        const data2 = await response2.json();
        setData(data2);
    }
        getData();
    }, [props]);

    return(
        data.length === 0 ? <Loading /> : <QuizTest data={data}/>
    )
}

export default Data;

    