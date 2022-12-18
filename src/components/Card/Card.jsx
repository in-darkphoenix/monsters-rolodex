import React from "react";
import "./Card.css";

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;

/*
import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
*/
