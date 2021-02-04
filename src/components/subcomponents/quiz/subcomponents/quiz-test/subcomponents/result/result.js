import './result.css';

function Result(props){
    return(
        <div id='result-div'>
            <p id='result-title'>Result</p>
            <p id='result-score'>5/10</p>
            <p id='result-text'>Better Luck Next Time!</p>
            <button onClick={props.tryAgain} id='try-again-btn'>Try Again</button>  
            <button onClick={props.anotherTest} id='another-test-btn'>Take Another Test</button>
        </div>
    )
}

export default Result;