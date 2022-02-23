import React, { createContext, useState, useEffect } from "react";

import {
    addItemToCart,
    removeItemFromCart,
    clearItemsFromCart,
} from "./cart.utils";

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0,
    total: 0,
});

const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    const toggleHidden = () => setHidden(!hidden);

    const addItem = (item) => setCartItems(addItemToCart(cartItems, item));

    const removeItem = (item) =>
        setCartItems(removeItemFromCart(cartItems, item));

    const clearItemFromCart = (item) =>
        setCartItems(clearItemsFromCart(cartItems, item));

    const [total, setTotal] = useState(0);

    useEffect(() => {
        setCartItemsCount(
            cartItems.reduce(
                (accumulatedQuantity, cartItem) =>
                    accumulatedQuantity + cartItem.quantity,
                0
            )
        );
        setTotal(
            cartItems.reduce(
                (accumulatedQuantity, cartItem) =>
                    accumulatedQuantity + cartItem.quantity * cartItem.price,
                0
            )
        );
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                hidden,
                toggleHidden,
                cartItems,
                addItem,
                removeItem,
                clearItemFromCart,
                cartItemsCount,
                total,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;
