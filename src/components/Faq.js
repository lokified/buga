import React, {useState} from 'react';
import "./Faq.css";

function Faq({question, answer}) {

    const [isVisible, setisVisible] = useState(false);
    const toggleShowAnswer = () => setisVisible(!isVisible);

    return (
      <>
        <div className="faq">
          <i
            onClick={toggleShowAnswer}
            className={isVisible ? "fa fa-minus-circle" : "fa fa-plus-circle"}
            aria-hidden="true"
          ></i>

          <div className="question-wrapper">
            <p onClick={toggleShowAnswer}>{question}</p>
            <p className={isVisible ? "answer active" : "answer"}>{answer}</p>
          </div>
        </div>
      </>
    );
}

export default Faq;