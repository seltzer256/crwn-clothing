import React from "react";
import { connect } from "react-redux";
import CustomButtom from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageSpan,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ? (
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <EmptyMessageSpan>Your cart is empty</EmptyMessageSpan>
            )}
        </CartItemsContainer>
        <CustomButtom
            onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartHidden());
            }}
        >
            Go to checkout
        </CustomButtom>
    </CartDropdownContainer>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
