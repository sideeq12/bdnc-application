import React, {useState} from "react";
import axios from "axios";
import "./formstyle.css"

const Rythmes = ()=>{
    const [words, setWord] = useState([])
    const [params, setParams ]= useState("")

    const getRythmes = async()=>{
        const response = await axios.get(`https://api.datamuse.com/words?rel_rhy=${params}`);
        const data = await  response.data;
        setWord(data)
        console.log(data)
    }

    // WHILE GENERATING THE WORDS, INDEX WAS USED AS KEY, WHICH IS NOT ADVISABLE { FOR DIFFING ALGORITHM WHICH IS THE CORES CONCEPT BEHIND REACT PERFORMANCE}
    // its advisable to use the id generated from the main database (not available in this concept)

    
    return(
        <div className="cover">
            <div  className="form">
        <h2>Your Perfect Rythmes Generator</h2>
        <hr/>
        <input type="text" placeholder="Enter a word" onChange={(e)=> setParams(e.target.value)} />
        <button onClick={getRythmes}>Search</button> <br/>
        <span>{words.length} words found!</span>
        <div className="wordlist">
            { words.length > 1 ?
            words.map((word, index) => <label key={index}>{word.word}</label>): 
            null }
        </div>
    </div>
       <img src="/undraw.svg" />
        </div>
    )
}

export default Rythmes;