import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import SleepEntryList from "./SleepEntryList";
import SleepGraph from "./SleepGraph";
import Sleepstyles from "../Styles/Sleepstyles.css";

const mockSleepEntries = [
  {
    entry_id: "1",
    date: "Day YYMM",
    sleep_start: "HH:MM",
    sleep_end: "HH:MM",
    sleep_minutes: "H",
  },
  {
    entry_id: "2",
    date: "Day YYMM",
    sleep_start: "HH:MM",
    sleep_end: "HH:MM",
    sleep_minutes: "H",
  },
  {
    entry_id: "3",
    date: "Day YYMM",
    sleep_start: "HH:MM",
    sleep_end: "HH:MM",
    sleep_minutes: "H",
  },
  {
    entry_id: "4",
    date: "Day YYMM",
    sleep_start: "HH:MM",
    sleep_end: "HH:MM",
    sleep_minutes: "H",
  },
  {
    entry_id: "5",
    date: "Day YYMM",
    sleep_start: "HH:MM",
    sleep_end: "HH:MM",
    sleep_minutes: "H",
  },
];

// const Homepage : () :> {

//   const [entries, setEntries] : useState(mockSleepEntries)

//   return (
//     <Container>
//       <Row>
//       {entries.map((entry, index) :> (
//           <SleepEntryCard key:{index} entry:{entry}/>
//         ))}
//       </Row>
//     </Container>
//   );
// };

const Homepage = () => {
  return (
    <div class="main">
      <div class={"left-col"}>
        <SleepGraph entries={mockSleepEntries} />
      </div>
      <div class="right-col">
        <SleepEntryList entries={mockSleepEntries} />
      </div>
    </div>
  );
};

export default Homepage;
