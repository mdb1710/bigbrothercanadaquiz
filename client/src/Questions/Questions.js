import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import testQuestions from "../TestQuestions";
import QuizContext from "../QuizContext/QuizContext";
import "./Questions.css";

import {
  Grid,
  Typography,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio
} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";

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

  const canadaQuestions = testQuestions.map((q, index) => {
    let answer = q.correctAnswer;
    let qNumber = q.id;
    let answerId = qNumber + index;

    return (
      <div>
        <Grid key={index} id={qNumber}>
          <Typography variant="h5">
            {qNumber}. What season did {q.name} first appear?
          </Typography>
        </Grid>
        <FormControl component="fieldset">
          {q.answers.map((answer, i) => {
            return (
              <div key={i}>
                <FormControlLabel
                  control={<Radio />}
                  value={answer}
                  id={qNumber}
                  onClick={handleCheckAnswer}
                  label={answer}
                  labelPlacement="start"
                />
              </div>
            );
          })}
        </FormControl>
      </div>
    );
  });

  // const newQuestions = testQuestions.map((q, index) => {
  //   let answer = q.correctAnswer;
  //   let qNumber = q.id;
  //   let answerId = qNumber + index;

  //   if (value.display === true) {
  //     return (
  //       <div key={index} id={qNumber}>
  //         <h3 className="question">
  //           {qNumber}. What season did {q.name} first appear?
  //         </h3>
  //         <form>
  //           <div className="input-group justify-content-center">
  //             <div className="input-group-lg">
  //               {q.answers.map((answer, i) => {
  //                 return (
  //                   <div className="" key={i}>
  //                     <label
  //                       htmlFor="season"
  //                       className="btn btn-secondary mx-3"
  //                     >
  //                       <input
  //                         type="radio"
  //                         name="season"
  //                         value={answer}
  //                         id={qNumber}
  //                         onClick={handleCheckAnswer}
  //                         required
  //                       />
  //                       {answer}
  //                     </label>
  //                   </div>
  //                 );
  //               })}
  //             </div>
  //           </div>
  //         </form>
  //       </div>
  //     );
  //   } else if (value.display !== true) {
  //     return (
  //       <div key={index} className="correct">
  //         <p>Time is Up - Click Below to see your score</p>
  //       </div>
  //     );
  //   }
  // });

  // useEffect(() => {
  //   if (value.display !== true) {
  //     return newQuestions;
  //   }
  // }, [newQuestions, value.display]);

  return (
    <div className="questions">
      <div className="test">{canadaQuestions}</div>

      <div className="score-check">
        <Link to="/results">
          <Button variant="outlined" className="">
            Check Your Score
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Questions;
