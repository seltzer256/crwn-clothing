import React, { useContext } from "react";
import CustomButton from "../custom-button/custom-button.component";
import {
    CollectionFooterContainer,
    CollectionItemContainer,
    CustomButtonContainer,
    ImageContainer,
    NameSpan,
    PriceSpan,
} from "./collection-item.styles";
import { CartContext } from "../../providers/cart/cart.provider";

const CollectionItem = ({ item }) => {
    const { addItem } = useContext(CartContext);
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
export default CollectionItem;
