import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import testQuestions from "../TestQuestions";
import QuizContext from "../QuizContext/QuizContext";
import "./Questions.css";

const Questions = () => {
  const value = useContext(QuizContext);

  const [totalRight, setTotalRight] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);
  const [isCorrect, setIsCorrect] = useState(<span></span>);
  const [answered, setAnswered] = useState(false);

  const handleCheckAnswer = e => {
    let checkedAnswer = e.target.value;
    let checkedNumber = e.target.id - 1;

    console.log(checkedAnswer, "was clicked - is it right?");
    if (checkedAnswer === value.correctAnswers[checkedNumber]) {
      setTotalRight(totalRight + 1);
      value.totalRight = totalRight;
      console.log("You got it right!");
      console.log(totalRight, value.totalRight);
    } else {
      setTotalWrong(totalWrong + 1);
      value.totalWrong = totalWrong;
      console.log("You got it wrong");
      console.log(totalWrong, value.totalWrong);
    }
    setAnswered(true);
  };

  const newQuestions = testQuestions.map((q, index) => {
    let answer = q.correctAnswer;
    let qNumber = q.id;
    let answerId = qNumber + index;

    if (value.display === true) {
      return (
        <div key={index} id={qNumber}>
          <h3 className="question">
            {qNumber}. What season did {q.name} first appear?
          </h3>
          <form>
            <div className="input-group justify-content-center">
              <div className="input-group-lg">
                {q.answers.map((answer, i) => {
                  return (
                    <div className="radio btn-group" key={i}>
                      <label
                        htmlFor="season"
                        className="btn btn-secondary mx-3"
                      >
                        <input
                          type="radio"
                          name="season"
                          value={answer}
                          id={qNumber}
                          onClick={handleCheckAnswer}
                          required
                        />
                        {answer}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </form>
        </div>
      );
    } else if (value.display !== true) {
      return (
        <div key={index} className="correct">
          <p>Time is Up - Click Below to see your score</p>
        </div>
      );
    }
  });

  useEffect(() => {
    if (value.display !== true) {
      return newQuestions;
    }
  }, [newQuestions, value.display]);

  return (
    <div className="questions">
      {newQuestions}

      <div className="score-check">
        <Link to="/results">
          <button className="btn-primary my-4 btn-lg">Check Your Score</button>
        </Link>
      </div>
    </div>
  );
};

export default Questions;
