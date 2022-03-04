import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import React from "react";
//import Input from "./components/Input/main";
import ListOfInterests from "./components/ListOfInterests/ListOfInterests";
import Navbar from "./components/NavigationBar/Navbar";
import { BrowserRouter } from 'react-router-dom'

//User comes to page with login...they can either search by topic of interest or write their own meetup
//Search by location, then topic
//Has opportunity to discuss topics as well (maybe tabs going across the top of the screen)
//topic pages route to new html pages...where comments append to the topic of the page
//data is stored on database, sql or mongodb

//Should we use same authentication as mobile app?
//Best use case for nosql or sql database?

function App() {
  return (
          <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

      <div>
        <h1 className="title">Welcome to the BoostCamp Forum!!!</h1>
        <ListOfInterests />
        <il>{Comment}</il>
        {/* <Input>Enter Text Here</Input> */}
      </div>
  );
}

export default App;
