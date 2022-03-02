import logo from "./logo.svg";
import "./App.css";
import "./index.css";
//import Input from "./components/Input/main";
import ListOfInterests from "./components/ListOfInterests/ListOfInterests";

//User comes to page with login...they can either search by topic of interest or write their own meetup
//Search by location, then topic
//Has opportunity to discuss topics as well (maybe tabs going across the top of the screen)
//topic pages route to new html pages...where comments append to the topic of the page
//data is stored on database, sql or mongodb

//Should we use same authentication as mobile app?
//Best use case for nosql or sql database?

function App() {
  return (
    <div>
      <h1 className="title">Welcome to the BoostCamp Forum!!!</h1>
      <ListOfInterests />
      {/* <Input>Enter Text Here</Input> */}
    </div>
  );
}

export default App;
