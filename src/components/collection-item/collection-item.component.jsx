import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
import {
    CollectionFooterContainer,
    CollectionItemContainer,
    CustomButtonContainer,
    ImageContainer,
    NameSpan,
    PriceSpan,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <ImageContainer imageUrl={imageUrl}></ImageContainer>
            <CollectionFooterContainer>
                <NameSpan>{name}</NameSpan>
                <PriceSpan>{price}</PriceSpan>
            </CollectionFooterContainer>
            <CustomButtonContainer
                as={CustomButton}
                onClick={() => addItem(item)}
                inverted
            >
                ADD TO CART
            </CustomButtonContainer>
        </CollectionItemContainer>
    );
};
const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
