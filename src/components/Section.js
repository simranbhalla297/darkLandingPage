import React from "react";
import CardData from "./CardData";
import Card from "./Card";
import { Row, Col } from "react-bootstrap";
function Section() {
  console.log(CardData);
  return (
    <div className="features">
      {CardData.map((details) => {
        return <Card data={details}></Card>;
      })}
    </div>
  );
}

export default Section;
