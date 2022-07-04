import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to UPPER CASE", "success");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);

    
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to LOWER CASE", "success");
  };
  const handleClrClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };
  const handleCopy = () => {
    var txt = document.getElementById("my-text");
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.showAlert("Text copied to clipboard", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#2F4F4F" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="my-text"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#2F4F4F",
              color: props.mode === "light" ? "#2F4F4F" : "white",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mt-3 mx-2 my-2"
          onClick={handleUpClick}
          type="submit"
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mt-3 mx-2 my-2"
          onClick={handleLoClick}
          type="submit"
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mt-3 mx-2 my-2"
          onClick={handleClrClick}
          type="submit"
        >
          Clear
        </button>
        <button
          className="btn btn-primary mt-3 mx-2 my-2"
          onClick={handleCopy}
          type="submit"
        >
          Copy
        </button>
        <button
          className="btn btn-primary mt-3 mx-2 my-2"
          onClick={handleExtraSpaces}
          type="submit"
        >
          Spaces Handle
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "light" ? "#2F4F4F" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          <b>{text.split(" ").length}</b> words <b>{text.length}</b> characters
        </p>
        <p>
          <b> {0.008 * text.split(" ").length} </b>
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox above to Preview it here!!!"}</p>
      </div>
    </>
  );
}
