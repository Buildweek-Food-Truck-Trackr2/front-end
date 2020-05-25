import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import SleepEntryList from "./SleepEntryList";
import axios from "axios";

const initialEntry = {
    start_date: "",
    end_date:"",
    sleep_start: "",
    sleep_end: "",
    moodBeforeSleep: "",
    moodAfterSleep: "",
    sleepScore: "",
    entry_id: "",

};

const SleepEntry = (props) => {
 
  const [entry, setEntry] = useState(initialEntry);
  const history = useHistory();
 
  const changeHandler = (ev) => {
    ev.persist();
    let value = ev.target.value;

    console.log(ev.target);

    setEntry({
      ...entry,
      [ev.target.name]: value
    });

  }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(entry);
    };

    return (
      <div>
        <h2>Add Sleep</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            name="start_date"
            onChange={changeHandler}
            placeholder="date"
            value={entry.date}
          />
          
          <input
            type="time"
            name="sleep_start"
            onChange={changeHandler}
            placeholder="start time"
            value={entry.sleep_start}
          />
       
  
          <input
            type="date"
            name="end_date"
            onChange={changeHandler}
            placeholder="date"
            value={entry.date}
          />
          
          <input
            type="time"
            name="sleep_end"
            onChange={changeHandler}
            placeholder="end time"
            value={entry.sleep_end}
          />

          <input
            type="text"
            name="moodbeforesleep"
            onChange={changeHandler}
            placeholder="name"
            value={entry.moodBeforeSleep}
          />
         
          <input
            type="text"
            name="moodaftersleep"
            onChange={changeHandler}
            placeholder="name"
            value={entry.moodAfterSleep}
          />
         
          <input
            type="text"
            name="sleep_score"
            onChange={changeHandler}
            placeholder="name"
            value={entry.sleepScore}
          />
  
          <button type="submit">Save</button>
        </form>
      </div>
    );
}

export default SleepEntry; 
