import './question.css';

function Question(props){
    return(
        <fieldset>
            <legend>Question {props.num + 1}/10</legend>
            <p id='question'>{props.question}</p>
            <ul id='answers'>
                {props.answers.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={props.next} id='next-btn'>Next</button>   
        </fieldset>
    )
}

export default Question;