import './question.css';

function Question(props){

    return(
        <fieldset>
            <legend>Question {props.num + 1}/10</legend>
            <p id='question' dangerouslySetInnerHTML={{__html: props.question}}/>
            <ul id='answers'>
                {props.answers.map((item, index) => (
                    <li id={index} key={index} onClick={props.answer} dangerouslySetInnerHTML={{__html: item}} />
                ))}
            </ul>
            <button onClick={props.next} id='next-btn'>Skip</button>   
        </fieldset>
    )
}

export default Question;