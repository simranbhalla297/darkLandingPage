import React from "react";
import CardData from "./CardData";
import Card from "./Card";
import { Row, Col } from "react-bootstrap";
function Section() {
  console.log(CardData);
  return (
    <div className="section">
      {CardData.map((details) => {
        return (
          <div className="cardCOntainer">
            <Card data={details}></Card>
          </div>
        );
      })}
    </div>
  );
}

export default Section;
