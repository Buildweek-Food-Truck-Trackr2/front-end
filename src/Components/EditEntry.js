import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import SleepEntryList from "./SleepEntryList";
import axios from "axios";

const initialEntry = {
      date: '', 
      sleep_start: '',
      sleep_end: '',
      sleep_score_morning: '',
      sleep_score_day: '',
      sleep_score_night: '',
      user_id: ''
    }
    // start_date:"2020-04-21",
    // end_date:"2020-04-22 ",
    // sleep_start: " 8:15:00.000",
    // sleep_end: "07:15:00.000",
    // moodBeforeSleep: 2,
    // moodAfterSleep: 2,
    // sleepScore: null,
    // entry_id: 1,
  

const EditEntry = (props) => {
  //const { push } = useHistory();
  const [entry, setEntry] = useState(initialEntry);
  const history = useHistory();

  console.log(entry);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`GET URL`)
      .then(res => {
        // res.data
        setEntry(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const changeHandler = (ev) => {
    ev.persist();
    let value = ev.target.value;

    console.log(ev.target);

    setEntry({
      ...entry,
      [ev.target.name]: ev.target.value
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(entry);
      // // make a PUT request to edit the item
      // axios
      //   .put(`GET URL`, entry)
      //   .then(res => {
      //     // res.data
      //     props.setEntries(res.data); //please send me the whole array again
      //     push("/sleep-entry-homepage");
      //   })
      //   .catch(err => console.log(err));

      useEffect(() => {
        AxiosWithAuth()
          .put("https://bw.stvsu.com/api/entries/:id", entry)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err.message));
      }, []);
  };

  };

  const deleteEntry = (e) => {
    e.preventDefault();
      // axios
      //   .delete(`GET URL`)
      //   .then(res => {
      //     // res.data
      //     props.setEntries(res.data); //please send me the whole array again
      //     push("/sleep-entry-homepage");
      //   })
      //   .catch(err => console.log(err));
  }

  return (
    <div>
      <h2>Edit Entry</h2>
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
          placeholder="mood"
          value={entry.sleep_score_morning}
        />
       
        <input
          type="text"
          name="sleep_score_day"
          onChange={changeHandler}
          placeholder="mood"
          value={entry.sleep_score_day}
        />
       
        <input
          type="text"
          name="sleep_score_night"
          onChange={changeHandler}
          placeholder="sleepscore"
          value={entry.sleep_score_night}
        />
       
       <input
          type="text"
          name="user_id"
          onChange={changeHandler}
          placeholder="userId"
          value={entry.user_id}
        />

        <button type="submit">Save</button>

        <button onClick={deleteEntry}>Delete</button>

      </form>
    </div>
  );
};

export default EditEntry;
