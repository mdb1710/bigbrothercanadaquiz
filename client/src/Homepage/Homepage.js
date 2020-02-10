import React, { useState, useContext } from "react";
import { withRouter } from "react-router";
import QuizContext from "../QuizContext/QuizContext";
import { Link } from "react-router-dom";

import "./Homepage.css";

import { Grid, Typography, Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";

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
            <Button type="submit">Start Now</Button>
          </Link>
        </div>
      );
    });
    return welcomeMessage;
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Box className="home">
        <Typography variant="h2">How Much Do You Know Big Brother</Typography>
        <Box className="">
          <Typography>
            Test Your knowledge of your favorite summer guilty pleasure here
          </Typography>
          <Typography>
            Answer each questions to see how much you really know - remember to
            expect the unexpected
          </Typography>
        </Box>
        <div className="start">
          <form onSubmit={handleGuestChange}>
            <h3 className="">Enter Your Name, Houseguest</h3>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="standard"
              onChange={e => setHouseGuest(e.target.value)}
            />
            <Button
              type="submit"
              variant="outlined"
              onSubmit={handleGuestChange}
            >
              Enter
            </Button>
          </form>
          <br />
        </div>
        <Box className="">{welcomeMessage}</Box>
      </Box>
    </Grid>
  );
};

export default withRouter(Homepage);
