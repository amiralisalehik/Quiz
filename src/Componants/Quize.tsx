import { useState } from "react";
import { questions } from "../questions";

export default function Quiz() {
  const [curentQuestion, setCurentQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isFinal, setIsFinal] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  function hanleAnswer(option: string) {
    if (selectedOption) return;
    setSelectedOption(option);
    if (option == questions[curentQuestion].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (curentQuestion < questions.length - 1) {
        setCurentQuestion(curentQuestion + 1);
        setSelectedOption(null)
      } else {
        setIsFinal(true);
      }
    }, 1000);
  }

  return (
    <div className="quiz-container">
      {isFinal ? (
        <div className="result">
          <h2>you submited all questions</h2>
          <p>
            your score is {score} from {questions.length}
          </p>
          <div className="Mybutton">
            Your Score is <span>
                {Math.floor((score/questions.length)*100)}%
            </span>
          </div>
          <button onClick={()=>{
            setScore(0);
            setIsFinal(false);
            setSelectedOption("");
            setCurentQuestion(0)
        
          }}>
            reset
          </button>
        </div>
      ) : (
        <div className="question-box">
            <div>question {curentQuestion+1} of {questions.length}</div>
          <h3>{questions[curentQuestion].question}</h3>
          <ul>
            {questions[curentQuestion].options.map(
              (option: string, index: number) => (
                <li
                  className={
                    selectedOption == option
                      ? option == questions[curentQuestion].answer
                        ? "correct"
                        : "wrong"
                      : ""
                  }
                  onClick={() => hanleAnswer(option)}
                  key={index}
                >
                  {option}
                </li>
              )
            )}
          </ul>

          <div className="Mybutton">
            Your Score is <span>{score}</span>
          </div>
        </div>
      )}
    </div>
  );
}
