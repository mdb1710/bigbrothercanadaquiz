import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import QuizSection from "./QuizSection/QuizSection";
import Results from "./Results/Results";

import Box from "@material-ui/core/Box";

import QuizContext from "./QuizContext/QuizContext";

import testQuestions from "./TestQuestions";

const App = () => {
  const bbAnswers = testQuestions.map(answer => {
    return answer.correctAnswer;
  });

  console.log(bbAnswers);

  const contextValue = {
    houseGuest: "",
    questions: [],
    questionNumber: null,
    totalRight: "",
    totalWrong: "",
    correctAnswers: bbAnswers,
    time: null,
    display: true
  };

  return (
    <div className="App">
      <Box component="header" color="text.primary">
        <h1 className="">Big Brother Canada Quiz App - Season One</h1>
      </Box>

      <main>
        <QuizContext.Provider value={contextValue}>
          <Route exact path="/" component={Homepage} />
          <Route path="/quiz" component={QuizSection} />
          <Route path="/results" component={Results} />
        </QuizContext.Provider>
      </main>
    </div>
  );
};

export default App;
