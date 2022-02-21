import styled, { css } from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }
`;

const IsQuantity = css`
    display: flex;
`;

const QuantityContainer = (props) => {
    if (props.isQuantity) {
        return IsQuantity;
    }
};

export const ColumnsContainer = styled.div`
    width: 23%;
    ${QuantityContainer}
`;

export const ArrowContainer = styled.div`
    cursor: pointer;
`;
export const ValueContainer = styled.div`
    margin: 0 10px;
`;
export const RemoveButtonContainer = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;
