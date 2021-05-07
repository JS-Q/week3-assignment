import React, { Component } from "react";
import "./feed.css"
import airbnbs from "../../data/airbnbs.json";
import Card from "../card/card";
import PropTypes from 'prop-types';

class Feed extends Component {
  static propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.number),
  };

  render() {
    const cards = airbnbs.map((airbnb, index) => (
      <Card airbnb={airbnb} cartItems={this.props.cartItems || []} index={index}></Card>
    ));

    return (
      <>
      <div className="Feed-cards">
        {cards}
      </div>
      </>
    );
  }
}

export default Feed;
