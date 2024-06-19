import React, {useState} from 'react'

export default function Textform(props) {
    
    const handleUpClick = () =>{
        // console.log("Button has been clicked");
        let newText = text.toUpperCase();
        setText(newText);
        // text = 'new Text' // Wrong way to change the state. 
        // setText("new Text"); // Correct way to change the text.
    }
    const handleLowClick = () =>{
        // console.log("Button has been clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }

    // const [text, setText] = useState("Enter Text Here");// Enter the Text to initiat the String.
    const [text, setText] = useState("");
    return (
        <>
        <div className='container'  style={{color: props.mode==='light' ? '#042743':'white'}}> 
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='light' ? '#042743':'white' }} id="myBox" rows="8" ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        </div>
        <div className="container my-4"  style={{color:props.mode==='light' ? '#042743':'white'}}>
            <h2>Text Sumarry</h2>
            <div>{text.split(" ").length} Words and {text.length} Characters</div>
        </div>
        </>
    )
}
