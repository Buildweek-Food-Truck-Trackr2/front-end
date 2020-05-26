import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";
import {Link} from "react-router-dom";

const SleepGraph = ({ entries }) => {
  console.log(entries);
  // // const [entries, setEntries] = useState(mockSleepEntries)
  return (
    <div>
      <Link to= {"/addentry"}>
      <Button>Add New Entry</Button>
      </Link>
     
    </div>
  );
};

export default SleepGraph;
