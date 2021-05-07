import PropTypes from "prop-types";
import React, { Component } from "react";

class Card extends Component {
  static propTypes = {
    airbnb: PropTypes.shape({
      title: PropTypes.string.isRequired,
      houseType: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      location: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
      }),
      payment: PropTypes.shape({
        cost: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      }),
      host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        isSuperhost: PropTypes.bool.isRequired,
      }),
      rating: PropTypes.shape({
        stars: PropTypes.number.isRequired,
        reviews: PropTypes.number.isRequired,
      }),
    }),
    cartItems: PropTypes.arrayOf(PropTypes.number),
    index: PropTypes.number.isRequired,
  };

  addToCart() {
    if (this.props.cartItems.includes(this.props.index)) {
      return;
    }

    this.props.cartItems.push(this.props.index);
  }

  render() {
    return (
      <div>
        <h2>{this.props.airbnb.title}</h2>
        <img src={this.props.airbnb.image} alt={this.props.airbnb.title}></img>
        <h3>Payment</h3>
        <p>
          <span>Cost: {this.props.airbnb.payment.cost}</span>
          <br></br>
          <span>Description: {this.props.airbnb.payment.description}</span>
        </p>
        <button style={{'font-size': 40}} onClick={this.addToCart}>Add</button>
      </div>
    );
  }
}

export default Card;
