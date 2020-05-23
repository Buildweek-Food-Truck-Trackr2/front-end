import React, { Component } from "react";
import HorizontalGridLines from "react-vis-styles";
import VerticalBarSeries from "react-vis-styles";
import XAxis from "react-vis-styles";
import YAxis from "react-vis-styles";
import XYPlot from "react-vis-styles";

// import "../../node_modules/react-vis/dist/style.css";
import  Card  from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent"
import RVStyles from 'react-vis-styles';

const SleepGraph = (props) =>  {

    
    return (
      <>
        <Card className="graphCard">
          <CardContent>
            <p className="chartTitle">Sleep Data</p>
            <RVStyles />
            <XYPlot height={300} width={500} xType="ordinal">
              <HorizontalGridLines />
              <VerticalBarSeries
                data-testid='vertical-barchart'
                data={props.dummyData}
                barWidth={0.8}
                opacity={0.9}
                color="#195e83"
              />
              <XAxis />
              <YAxis />
            </XYPlot>
          </CardContent>
        </Card>
      </>
    );
  }

export default SleepGraph;
