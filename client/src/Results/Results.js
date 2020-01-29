import React, { useContext, useState } from "react";
import { withRouter } from "react-router";
import QuizContext from "../QuizContext/QuizContext";
import { Link } from "react-router-dom";

const Results = () => {
  const value = useContext(QuizContext);
  const [status, setStatus] = useState("");

  const checkStatus = () => {
    let score = value.totalRight - value.totalWrong;
    switch (true) {
      case score > 12:
        setStatus("You are the HOH");
        break;
      case score > 9:
        setStatus("You are in the power alliance");
        break;
      case score > 7:
        setStatus("You need the power of Veto");
        break;
      case score > 5:
        setStatus("You need to make some deals fast");
        break;
      default:
        setStatus("Watch the rest of the season from home");
        break;
    }
  };

  return (
    <div className="container text-center w-50 h-50 ">
      <div className="quiz-results justify-context-center p-20">
        <h4 className="mb-30 mt-30">
          Let's see how you did {value.houseGuest}
        </h4>
        <p className="text-success bg-light h-50">
          Total Right is {value.totalRight}
        </p>
        <p className="bg-danger text-dark">Total Wrong is {value.totalWrong}</p>
        <button onClick={checkStatus}>See Your Status In the House</button>
        <div className="status-display">{status}</div>
        <Link to="/quiz">
          <button className="my-3">Try Again</button>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Results);
