import React, { useState } from "react";

function Home() {
  let [inputValue, setInputValue] = useState("");
  let [topicHeader, setTopicHeader] = useState([
    { Username: "AJ Temp", Topic: "BasketBall", location: "Birmingham" },
  ]);

  function navigate() {}
  console.log(inputValue);
  return (
    <div>
      <h1 className="title">Welcome to the BoostCamp Forum!!!</h1>
      Your Home!
      {topicHeader.map((Topic, Index) => {
        return (
          <div className="newTopic" onClick={() => navigate(Index)}>
            <h1>{Topic.Username}</h1>
            <h2>{Topic.Topic}</h2>
            <h3>{Topic.location}</h3>
          </div>
        );
      })}
      <input onChange={(e) => setInputValue(e.target.value)} />
      Enter text here
      {/* </input> */}
    </div>
  );
}

export default Home;
