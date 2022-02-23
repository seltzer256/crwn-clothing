import React, { useContext } from "react";
import CustomButtom from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { useHistory } from "react-router-dom";
import {
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageSpan,
} from "./cart-dropdown.styles";
import { CartContext } from "../../providers/cart/cart.provider";

const CartDropdown = () => {
    const { cartItems, toggleHidden } = useContext(CartContext);
    //const dispatch = useDispatch();
    const history = useHistory();
    //const { cartId } = useParams();

    return (
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
                    toggleHidden();
                }}
            >
                Go to checkout
            </CustomButtom>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
