import React, { useState } from "react";
import SleepEntryList from "./SleepEntryList";
import SleepGraph from "./SleepGraph";


const mockSleepEntries = [
  {
    
    start_date:"2020-04-21",
    end_date:"2020-04-22 ",
    sleep_start: " 21:15:00.000",
    sleep_end: "07:15:00.000",
    sleep_minutes: 6,
    moodBeforeSleep: 1,
    moodAfterSleep: 3,
    sleepScore: 7,
    entry_id: 1,
    
  },
  {
    
    start_date:"2020-04-21",
    end_date:"2020-04-22 ",
    sleep_start: " 21:15:00.000",
    sleep_end: "07:15:00.000",
    sleep_minutes: 4,
    moodBeforeSleep: 4,
    moodAfterSleep: 4,
    sleepScore: 5.5,
    entry_id: 2,
   
  },
  {
    start_date:"2020-04-21",
    end_date:"2020-04-22 ",
    sleep_start: " 21:15:00.000",
    sleep_end: "07:15:00.000",
    sleep_minutes: 8,
    moodBeforeSleep: 2,
    moodAfterSleep: 2,
    sleepScore: null,
    entry_id: 3,
   
  },
  {
    
    start_date:"2020-04-21",
    end_date:"2020-04-22 ",
    sleep_start: " 21:15:00.000",
    sleep_end: "07:15:00.000",
    sleep_minutes: 8,
    moodBeforeSleep: 1,
    moodAfterSleep: 3,
    sleepScore: 7,
    entry_id: 4,
    
  },
  {
   
    start_date:"2020-04-21",
    end_date:"2020-04-22 ",
    sleep_start: " 21:15:00.000",
    sleep_end: "07:15:00.000",
    sleep_minutes: 7,
    moodBeforeSleep: 4,
    moodAfterSleep: 4,
    sleepScore: 5.5,
    entry_id: 5,
    
  },
  {
   
    start_date:"2020-04-21",
    end_date:"2020-04-22 ",
    sleep_start: " 21:15:00.000",
    sleep_end: "07:15:00.000",
    sleep_minutes: 6,
    moodBeforeSleep: 2,
    moodAfterSleep: 2,
    sleepScore: null,
    entry_id: 6,
   
  },
  {
    
    start_date:"2020-04-21",
    end_date:"2020-04-22 ",
    sleep_start: " 21:15:00.000",
    sleep_end: "07:15:00.000",
    sleep_minutes: 4,
    moodBeforeSleep: 2,
    moodAfterSleep: 2,
    sleepScore: null,
    user_id: 7,
   
  }
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

const SleepEntryHomepage = () => {
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

export default SleepEntryHomepage;
