import React, {Component} from "react";
import PropTypes from 'prop-types';
import airbnbs from "../../data/airbnbs.json";

class Cart extends Component {
  static headerText = "Cart"
  static propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.number),
  };

  render() {
    let cartItems = [];
    if (this.props.cartItems.length) {
      cartItems = this.props.cartItems.map((cartItemIndex) => {
        <div>
          {airbnbs[cartItemIndex].payment.cost}
        </div>
      })
    }

    return (
      <div>
        <h2>{this.headerText}</h2>
        {/* <h3>{this.headerText}</h3> */}
        <h3>Payment</h3>
        <p>
          {/* <span>some content</span> */}
          {cartItems}
        </p>
      </div>
    )
  }
}

export default Cart;
