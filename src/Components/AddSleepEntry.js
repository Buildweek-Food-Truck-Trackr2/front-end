import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import SleepEntryList from "./SleepEntryList";
import axios from "axios";

// // const initialEntry = {

// // };

// const AddSleepEntry = (props) => {
//   const [entry, setEntry] = useState([
//     {
//       start_date: "",
//       end_date: "",
//       sleep_start: "",
//       sleep_end: "",
//       moodBeforeSleep: "",
//       moodAfterSleep: "",
//       sleepScore: "",
//       entry_id: "",
//     },
//   ]);
//   const history = useHistory();

//   const changeHandler = (ev) => {
//     ev.persist();

//     console.log(ev.target);

//     setEntry({
//       ...entry,
//       [ev.target.name]: ev.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("https://bw.stvsu.com", entry)
//       .then((response) => {
//       })
//       .catch((err) => console.log(err.response));
//   };

//         <button type="submit">Save</button>
//         {post.length > 0 ? <pre>{JSON.stringify(post, null, 2)}</pre> : null}
//         <UsersList users={users} />
//       </form>
//     </div>
//   );
// };

// export default AddSleepEntry;

export default function AddSleepEntry() {
  const [entry, setEntry] = useState([
    {
      start_date: "",
      end_date: "",
      sleep_start: "",
      sleep_end: "",
      moodBeforeSleep: "",
      moodAfterSleep: "",
      sleepScore: "",
      entry_id: "",
    },
  ]);

  const history = useHistory();
  const changeHandler = (event) => {
    event.persist();
    let value = event.target.value;
    setEntry({
      ...entry,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://bw.stvsu.com", entry)
      .then((response) => {})
      .catch((err) => console.log(err.response));
  };

  return (
    <div>
      <h2>Add Sleep</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="start_date"
          id="start_date"
          onChange={changeHandler}
          placeholder="date"
          value={entry.date}
        />

        <input
          type="time"
          name="sleep_start"
          id="sleep_start"
          onChange={changeHandler}
          placeholder="start time"
          value={entry.sleep_start}
        />

        <input
          type="date"
          name="end_date"
          id="end_date"
          onChange={changeHandler}
          placeholder="date"
          value={entry.date}
        />

        <input
          type="time"
          name="sleep_end"
          id="sleep_end"
          onChange={changeHandler}
          placeholder="end time"
          value={entry.sleep_end}
        />

        <textarea
          name="moodbeforesleep"
          id="moodbeforesleep"
          onChange={changeHandler}
          placeholder="Mood Before Bed"
          value={entry.moodBeforeSleep}
        />

        <textarea
          name="moodaftersleep"
          id="moodaftersleep"
          onChange={changeHandler}
          placeholder="Mood Upon Waking"
          value={entry.moodAfterSleep}
        />

        <textarea
          name="sleep_score"
          id="sleep_score"
          onChange={changeHandler}
          placeholder="Sleep Score"
          value={entry.sleepScore}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
