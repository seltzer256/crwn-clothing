import React from "react";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CustomButtom from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = (cartItems) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.cartItems.length ? (
                cartItems.cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <span className="empty-message">Your cart is empty</span>
            )}
        </div>
        <CustomButtom>Go to checkout</CustomButtom>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
