import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
    clearItemFromCart,
    addItem,
    removeItem,
} from "../../redux/cart/cart.actions";
import {
    ArrowContainer,
    CheckoutItemContainer,
    ColumnsContainer,
    ImageContainer,
    RemoveButtonContainer,
    ValueContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
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
                    clearItem(cartItem);
                }}
            >
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
