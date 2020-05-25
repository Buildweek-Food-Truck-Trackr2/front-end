import React from "react";
import { Card, CardHeader, CardBody, CardText, Col } from "reactstrap";
// import Sleepstyles from "../Styles/Sleepstyles.css";

const SleepEntryCard = ({entry}) => {

  return (

    <Col>
      <br />
      <Card>
        <CardBody style={{backgroundColor: 'black', textAlign: 'left', color:'white', fontSize:"3em"}}>
          <CardText> {entry.date} {entry.sleep_start} - {entry.sleep_end}</CardText>
          <CardText> {entry.sleep_minutes}</CardText>
        </CardBody>
      </Card>
    </Col>

    // // <div>
    // //   <span>{entry.date} {entry.sleep_start} - {entry.sleep_end}</span>
    // //   <br/>
    // //   <span>{entry.sleep_minutes}</span>
    // // </div>
  );
};

export default SleepEntryCard;
