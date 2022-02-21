import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
//import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import {
    CartIconContainer,
    ItemCountSpan,
    ShoppingIconContainer,
} from "./cart-icon.styles";

const CartIcon = ({ toogleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toogleCartHidden}>
        <ShoppingIconContainer as={ShoppingIcon} />
        <ItemCountSpan>{itemCount}</ItemCountSpan>
    </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
    toogleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
