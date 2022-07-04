import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "1px solid white",
  });

  const [BtnText, setBtnText] = useState("Enable Dark Mode");
  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        // border:'1px solid black'
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h2 className="my-3">About us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              About TextUtils
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Free software utility which allows you to find the most frequent
              phrases and frequencies of words. Non-English language texts are
              supported. It also counts number of words, characters, sentences
              and syllables. Also calculates lexical density.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-dark">
          {BtnText}
        </button>
      </div>
    </div>
  );
}
