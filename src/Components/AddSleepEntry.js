import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import SleepEntryList from "./SleepEntryList";
import AxiosWithAuth from "./AxiosWithAuth";


const initialEntry = {
  date: '', 
  sleep_start: '',
  sleep_end: '',
  sleep_score_morning: '',
  sleep_score_day: '',
  sleep_score_night: '',

};

const AddSleepEntry = (props) => {
 
  const [entry, setEntry] = useState(initialEntry);
  const history = useHistory();

  useEffect(() => {
    AxiosWithAuth()
      .post("https://bw.stvsu.com/api/entries", entry)
      .then((res) => {
        console.log(res.data);
        console.log(res.status);

      })
      .catch((err) => console.log(err.message));
  }, []);
 
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
      
      AxiosWithAuth()
      .post("https://bw.stvsu.com/api/entries", entry)
      .then((res) => {
        console.log(res.data);
        console.log(res.status);
        history.push('/homepage')

      })
      .catch((err) => console.log(err.message));
    };

    return (
      <div>
        <h2>Add New Entry</h2>
        <form onSubmit={handleSubmit}>
  
          <h1>Sleep Start</h1>
          <input
            type="date"
            name="date"
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
         
          <h1>Sleep End</h1>
          <input
            type="time"
            name="sleep_end"
            onChange={changeHandler}
            placeholder="end time"
            value={entry.sleep_end}
          />
         
          <input
            type="text"
            name="sleep_score_morning"
            onChange={changeHandler}
            placeholder="sleep mood morning"
            value={entry.sleep_score_morning}
          />
         
          <input
            type="text"
            name="sleep_score_day"
            onChange={changeHandler}
            placeholder="sleep mood day"
            value={entry.sleep_score_day}
          />
         
          <input
            type="text"
            name="sleep_score_night"
            onChange={changeHandler}
            placeholder="sleep mood night"
            value={entry.sleep_score_night}
          />
  
          <button type="submit">Save</button>
  
        </form>
      </div>
    );
    };
  
  export default AddSleepEntry;
  