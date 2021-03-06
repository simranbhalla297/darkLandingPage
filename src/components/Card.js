import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div>
      <div className="feature" data-aos="fade-right">
        <h3>{props.data.title}</h3>
        <p>{props.data.heading}</p>
      </div>
    </div>
  );
}

export default Card;
