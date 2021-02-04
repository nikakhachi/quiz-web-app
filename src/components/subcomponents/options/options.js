import './options.css';

function Options(props){
    return(
        <div id='options-div'>
            <div className='text'>
                <p>Thank you for participating in our Trivial Quiz</p>
                <p id='good-luck'>Good Luck !</p>
            </div>
            <form>
                <label>Select Category</label>
                <select id="select-category" onChange={props.selectCategory}>
                    <option value="default">Any Category</option>
                    <option value="General Knowledge">General Knowledge</option>
                    <option value="Entertainment: Books">Entertainment: Books</option>
                    <option value="Entertainment: Film">Entertainment: Film</option>
                    <option value="Entertainment: Music">Entertainment: Music</option>
                    <option value="Entertainment: Musicals &amp; Teatres">Entertainment: Musicals &amp; Teatres</option>
                    <option value="Entertainment: Television">Entertainment: Television</option>
                    <option value="Entertainment: Video Games">Entertainment: Video Games</option>
                    <option value="Entertainment: Board Games">Entertainment: Board Games</option>
                    <option value="Science &amp; Nature">Science &amp; Nature</option>
                    <option value="Science: Computers">Science: Computers</option>
                    <option value="Science: Mathematics">Science: Mathematics</option>
                    <option value="Mythology">Mythology</option>
                    <option value="Sports">Sports</option>
                    <option value="Geography">Geography</option>
                    <option value="History">History</option>
                    <option value="Politics">Politics</option>
                    <option value="Art">Art</option>
                    <option value="Celebrities">Celebrities</option>
                    <option value="Animals">Animals</option>
                    <option value="Vehicles">Vehicles</option>
                    <option value="Entertainment: Comics">Entertainment: Comics</option>
                    <option value="Science: Gadgets">Science: Gadgets</option>
                    <option value="Entertainment: Japanese Anime &amp; Manga">Entertainment: Japanese Anime &amp; Manga</option>
                    <option value="Entertainment: Cartoon &amp; Animations">Entertainment: Cartoon &amp; Animations</option>
                </select>
                <label>Select Difficulty</label>
                <select id="select-difficulty" onChange={props.selectDifficulty}>
                    <option value="default">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <div id='no-questions'>{props.errorText}</div>
                <button onClick={props.start}>Start Quiz</button>
            </form>
        </div>
    )
}

export default Options;