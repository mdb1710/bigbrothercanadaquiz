import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import testQuestions from "../TestQuestions";
import QuizContext from "../QuizContext/QuizContext";
import "./Questions.css";

import {
  Grid,
  Typography,
  Button,
  FormControl,
  FormControlLabel,
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
