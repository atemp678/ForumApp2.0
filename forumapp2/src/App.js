import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import React from "react";
//import Input from "./components/Input/main";
import ListOfInterests from "./components/ListOfInterests/ListOfInterests";
import Navbar from "./components/NavigationBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import TopicHeader from "./components/Pages/TopicHeader";

//User comes to page with login...they can either search by topic of interest or write their own meetup
//Search by location, then topic
//Has opportunity to discuss topics as well (maybe tabs going across the top of the screen)
//topic pages route to new html pages...where comments append to the topic of the page
//data is stored on database, sql or mongodb

//Should we use same authentication as mobile app?
//Best use case for nosql or sql database?

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container mt-2" style={{ marginTop: 40 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/topicHeader" element={<TopicHeader />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
