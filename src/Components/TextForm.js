import React, { useState } from 'react'
export default function TextForm(props) {
    const upCase = () => {
        // console.log("Up case button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const lowCase = () => {
        // console.log("Up case button was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const reset = () => {
        // console.log("Up case button was clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Text has been reseted", "success");
    }

    const copy = () => {
        // console.log("Up case button was clicked");
        let newTextcopy = document.getElementById("myBox");
        newTextcopy.select();
        navigator.clipboard.writeText(newTextcopy.value);
        props.showAlert("Copied to clipboard", "success");

    }

    const extraSpace = () => {
        // console.log("Up case button was clicked");
        let extraText = text.split(/[ ]+/);
        setText(extraText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }


    const handleChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    //setText("some text com here");correct way to change state
    //text="some text come here"; wrong way to change state
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#6c757d' }}>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">{props.heading}</label>
                    <textarea className="form-control" value={text} onChange=
                        {handleChange} id="myBox" rows="6" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : '#6c757d' }} />
                </div>
                <div className="mb-3">
                    <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1" id="uppercase" onClick={upCase}>Convert to UpperCase</button>
                    <button disabled={text.length===0} type="submit" className="btn btn-warning  mx-1 my-1" id="lowercase" onClick={lowCase}>Convert to LowerCase</button>
                    <button disabled={text.length===0} type="submit" className="btn btn-danger  mx-1 my-1" id="reset" onClick={reset}>Reset</button>
                    <button disabled={text.length===0} type="submit" className="btn btn-info  mx-1 my-1" id="reset" onClick={copy}>Copy Text</button>
                    <button disabled={text.length===0} type="submit" className="btn btn-secondary  mx-1 my-1" id="reset" onClick={extraSpace}>Remove Extra Space</button>

                </div>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#6c757d' }}>
                <h1>Your text summary</h1>
                <p><b>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length}</b> words and <b>{text.length} </b>letters and you can read this in <b>{0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length}</b> minutes on an average</p>
                <h4>Preview of Text</h4>
                <p>{text.length > 0 ? text : 'Nothing to Preview'}</p>

            </div>
        </>

    )
}

