import React from "react";

const Card = ({ heading, content }) => {
  return (
    <div className="card-info">
      <h3 className="card-heading">{heading}</h3>
      <h1 className="card-content">{content}</h1>
    </div>
  );
};

export default Card;
