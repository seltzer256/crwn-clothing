import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../providers/cart/cart.provider";

import {
    CartIconContainer,
    ItemCountSpan,
    ShoppingIconContainer,
} from "./cart-icon.styles";

const CartIcon = () => {
    const { toggleHidden, cartItemsCount } = useContext(CartContext);

    return (
        <CartIconContainer onClick={toggleHidden}>
            <ShoppingIconContainer as={ShoppingIcon} />
            <ItemCountSpan>{cartItemsCount}</ItemCountSpan>
        </CartIconContainer>
    );
};

// const mapDispatchToProps = (dispatch) => ({
//     toogleCartHidden: () => dispatch(toggleCartHidden()),
// });
// const mapStateToProps = createStructuredSelector({
//     itemCount: selectCartItemsCount,
// });
export default CartIcon;
