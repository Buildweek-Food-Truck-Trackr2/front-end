import React,                                                                { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import SleepEntryCard from "./SleepEntryCard";
import mockSleepEntries from "./Homepage";

const SleepEntryList = ({ entries }) => {
  // // const [entries, setEntries] = useState(mockSleepEntries)
  return (
    <Container style={{height: '100vh'}}>
      {entries.map((entry, index) => (
        <Row >
          <SleepEntryCard key={index} entry={entry} />
        </Row>
      ))}
    </Container>
  );
};

export default SleepEntryList;
