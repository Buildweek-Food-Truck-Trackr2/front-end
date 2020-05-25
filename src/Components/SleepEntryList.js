import React,                                                                { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import SleepEntryCard from "./SleepEntryCard";
import EditEntry from "./EditEntry";
import {Link} from "react-router-dom";

const SleepEntryList = ({ entries , editEntries}) => {
  // // const [entries, setEntries] = useState(mockSleepEntries)
 

  return (
    <Container style={{height: '100vh'}}>
      {entries.map((entry, index) => (
        <Row >
          <Link to= {"/editentry"}>
            <SleepEntryCard key={index} entry={entry} />
          </Link>
        </Row>
      ))}
    </Container>
  );
};

export default SleepEntryList;

{/* <Link to= {`/editentry/${entry.entry_id}`}></Link> */}
