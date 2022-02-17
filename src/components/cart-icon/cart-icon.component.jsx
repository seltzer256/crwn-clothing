import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = (props) => (
    <div className="cart-icon" onClick={props.handleCart}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{props.cartItems}</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    handleCart: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
