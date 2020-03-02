import React, { useState, useContext } from "react";
import { withRouter } from "react-router";

import Questions from "../Questions/Questions";
import QuizContext from "../QuizContext/QuizContext";

const QuizSection = () => {
  const value = useContext(QuizContext);
  return (
    <div className="quiz-page text-center">
      <h3>Good luck {value.houseGuest}</h3>

      <Questions />
    </div>
  );
};

export default withRouter(QuizSection);
