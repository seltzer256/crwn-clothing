import React, { useContext } from "react";
import {
    ArrowContainer,
    CheckoutItemContainer,
    ColumnsContainer,
    ImageContainer,
    RemoveButtonContainer,
    ValueContainer,
} from "./checkout-item.styles";
import { CartContext } from "../../providers/cart/cart.provider";

const CheckoutItem = ({ cartItem }) => {
    const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <ColumnsContainer>{name}</ColumnsContainer>
            <ColumnsContainer isQuantity>
                <ArrowContainer onClick={() => removeItem(cartItem)}>
                    &#10094;
                </ArrowContainer>
                <ValueContainer>
                    <span>{quantity}</span>
                </ValueContainer>
                <ArrowContainer onClick={() => addItem(cartItem)}>
                    &#10095;
                </ArrowContainer>
            </ColumnsContainer>
            <ColumnsContainer>{price}</ColumnsContainer>
            <RemoveButtonContainer
                onClick={() => {
                    clearItemFromCart(cartItem);
                }}
            >
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
