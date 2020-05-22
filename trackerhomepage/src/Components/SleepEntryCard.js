import React from "react";
import { Card, CardHeader, CardBody, CardText, Col } from "reactstrap";
import Sleepstyles from "../Styles/Sleepstyles.css";

const SleepEntryCard = ({entry}) => {

  return (

    <Col>
      <br />
      <Card color>
        <CardBody style={{backgroundColor: 'black'}}>
          <CardText> {entry.date} {entry.sleep_start} - {entry.sleep_end}</CardText>
          <CardText> {entry.sleep_minutes}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SleepEntryCard;
