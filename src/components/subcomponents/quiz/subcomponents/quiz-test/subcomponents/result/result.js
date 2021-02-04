import './result.css';

function Result(props){
    return(
        <div id='result-div'>
            <p id='result-title'>Result</p>
            <p id='result-score'>{props.score}/10</p>
            <p id='result-text'>{props.score < 5 ? 'Better Luck Next Time!' : props.score >= 8 ? 'You Rock!' : 'Good Job!' }</p>
            <button onClick={props.anotherTest} id='another-test-btn'>Take Another Test</button>
            <button onClick={props.tryAgain} id='try-again-btn'>Try Again Same Test</button>  
        </div>
    )
}

export default Result;