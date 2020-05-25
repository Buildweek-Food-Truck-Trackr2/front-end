import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Form from "./Components/Form";
import SleepEntryHomePage from "./Components/SleepEntryHomePage";
import EditEntry from "./Components/EditEntry";
import SleepEntry from "./Components/SleepEntry";

// import MainPage from "./components/MainPage";
import WelcomePage from "./Components/WelcomePage";
import Register from "./Authentication/Register";
import Signin from "./Authentication/Signin";
import ForgotPassword from "./Authentication/ForgotPassword";
import Signout from "./Authentication/Signout";

import "./App.css";
import SleepGraph from "./Components/SleepGraph";

// state data for sleep graph
const fakeRes = {
  id: 1,
  username: "joedoe",
  data: [
    {
      id: 1,
      date: "2020-04-21",
      sleepStart: "2020-04-21 21:15:00.000",
      sleepEnd: "2020-04-22 07:15:00.000",
      duration: 6,
      moodBeforeSleep: 1,
      moodAfterSleep: 3,
      sleepScore: 7,
      user_id: 1,
    },
    {
      id: 2,
      date: "2020-04-22",
      sleepStart: "2020-04-22 021:15:00.000",
      sleepEnd: "2020-04-23 07:15:00",
      duration: 4,
      moodBeforeSleep: 4,
      moodAfterSleep: 4,
      sleepScore: 5.5,
      user_id: 1,
    },
    {
      id: 3,
      date: "2020-04-23",
      sleepStart: "2020-04-21 21:15:00.000",
      sleepEnd: "2020-04-22 07:15:00.000",
      duration: 8,
      moodBeforeSleep: 2,
      moodAfterSleep: 2,
      sleepScore: null,
      user_id: 1,
    },
    {
      id: 4,
      date: "2020-04-24",
      sleepStart: "2020-04-21 21:15:00.000",
      sleepEnd: "2020-04-22 07:15:00.000",
      duration: 8,
      moodBeforeSleep: 1,
      moodAfterSleep: 3,
      sleepScore: 7,
      user_id: 1,
    },
    {
      id: 5,
      date: "2020-04-25",
      sleepStart: "2020-04-22 021:15:00.000",
      sleepEnd: "2020-04-23 07:15:00",
      duration: 7,
      moodBeforeSleep: 4,
      moodAfterSleep: 4,
      sleepScore: 5.5,
      user_id: 1,
    },
    {
      id: 6,
      date: "2020-04-26",
      sleepStart: "2020-04-21 21:15:00.000",
      sleepEnd: "2020-04-22 07:15:00.000",
      duration: 6,
      moodBeforeSleep: 2,
      moodAfterSleep: 2,
      sleepScore: null,
      user_id: 1,
    },
    {
      id: 7,
      date: "2020-04-27",
      sleepStart: "2020-04-21 21:15:00.000",
      sleepEnd: "2020-04-22 07:15:00.000",
      duration: 4,
      moodBeforeSleep: 2,
      moodAfterSleep: 2,
      sleepScore: null,
      user_id: 1,
    },
  ],
};

// let formattedDates = [];

// for (let i = 0; i < fakeRes.data.length; ++i) {
//   formattedDates = fakeRes.data[i].date.split('-');
// }

const dummyData = [
  { x: fakeRes.data[0].date.slice(5), y: fakeRes.data[0].duration },
  { x: fakeRes.data[1].date.slice(5), y: fakeRes.data[1].duration },
  { x: fakeRes.data[2].date.slice(5), y: fakeRes.data[2].duration },
  { x: fakeRes.data[3].date.slice(5), y: fakeRes.data[3].duration },
  { x: fakeRes.data[4].date.slice(5), y: fakeRes.data[4].duration },
  { x: fakeRes.data[5].date.slice(5), y: fakeRes.data[5].duration },
  { x: fakeRes.data[6].date.slice(5), y: fakeRes.data[6].duration },
];

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sleep-data">
          <SleepGraph dummyData={dummyData} />
        </Route>
        {/* <Route exact path="/signout" component={Signout} /> */}
        <Route exact path="/forgot" component={ForgotPassword} />
        {/* <Route exact path="/signin" component={Signin} /> */}
        <Route exact path="/register" component={Form} />
        <Route exact path="/" component={WelcomePage} />
        <Route path="/sleep-entry-homepage" component={SleepEntryHomePage} />
        <Route exact path="/editentry" component={EditEntry} />
        <Route exact path="/sleepentry" component={SleepEntry} />
      </Switch>

      {/* <PrivateRoute exact path="/my" component={MainPage} />
        

        <PrivateRoute path="/my/list" component={ListItem} /> */}
    </div>
  );
}

export default App;
