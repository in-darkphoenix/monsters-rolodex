import React from "react";
import Card from "../Card/Card";
import "./CardList.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;

/*
import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardList.css";

class CardList extends Component {
  render() {
    // console.log(this.props.monsters);
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

export default CardList;
*/
