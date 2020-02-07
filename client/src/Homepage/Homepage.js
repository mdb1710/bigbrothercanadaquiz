import React, { useState, useContext } from "react";
import { withRouter } from "react-router";
import QuizContext from "../QuizContext/QuizContext";
import { Link } from "react-router-dom";

import "./Homepage.css";
import HouseguestForm from "../components/HouseguestForm";

const Homepage = () => {
  const value = useContext(QuizContext);
  const [houseGuest, setHouseGuest] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const handleGuestChange = e => {
    e.preventDefault();

    value.houseGuest = houseGuest;

    console.log(
      "houseguest is",
      houseGuest,
      "context houseGuest is",
      value.houseGuest
    );

    setWelcomeMessage(() => {
      return (
        <div className="start-quiz">
          <h3 className="">
            Welcome {houseGuest}, you may now enter the House
          </h3>
          <Link to="/quiz">
            <button className="btn" type="submit">
              Start Now
            </button>
          </Link>
        </div>
      );
    });

    return welcomeMessage;
  };

  // setHouseGuest({
  //     houseGuest: name
  // })
  // console.log(houseGuest);

  return (
    <div className="home">
      <h2 className="">How Much Do You Know Big Brother</h2>
      <div className="">
        <p className="">
          Test Your knowledge of your favorite summer guilty pleasure here
        </p>
        <p className="">
          Answer each questions to see how much you really know - remember to
          expect the unexpected
        </p>
      </div>
      <div className="start">
        <form onSubmit={handleGuestChange}>
          <label className="houseGuest" htmlFor="houseGuest" name="houseGuest">
            <h3 className="">Enter Your Name, Houseguest</h3>
            <input
              type="text"
              className=""
              placeholder="Danielle Reyes"
              onChange={e => setHouseGuest(e.target.value)}
              required
            />
          </label>

          <button type="submit" className="" onSubmit={handleGuestChange}>
            Enter
          </button>
        </form>
        <br />
      </div>

      <div className="">{welcomeMessage}</div>
    </div>
  );
};

export default withRouter(Homepage);
