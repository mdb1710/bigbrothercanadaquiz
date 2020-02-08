import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import QuizSection from "./QuizSection/QuizSection";
import Results from "./Results/Results";

import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

import QuizContext from "./QuizContext/QuizContext";

import testQuestions from "./TestQuestions";
import { red, yellow } from "@material-ui/core/colors";
import { Typography, Toolbar } from "@material-ui/core";

let darkTheme = createMuiTheme({
  palette: {
    primary: red,
    secondary: yellow
  },
  typography: {
    fontFamily: "Raleway"
  }
});

darkTheme = responsiveFontSizes(darkTheme);

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
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h3">
              Big Brother Canada Quiz - Season One
            </Typography>
          </Toolbar>
        </AppBar>

        <main>
          <QuizContext.Provider value={contextValue}>
            <Route exact path="/" component={Homepage} />
            <Route path="/quiz" component={QuizSection} />
            <Route path="/results" component={Results} />
          </QuizContext.Provider>
        </main>
      </ThemeProvider>
    </div>
  );
};

export default App;
