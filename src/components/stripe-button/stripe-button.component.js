import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51KVRwGB4LEx6vjjqqS6VKlgANbcCzCQS3LRAAPFWjFcSGYydWVJOjrHFSOfpPzkb92xYNxxgqNFZVOTTgWWDjYiQ00iXDkHanh";

    const onToken = (token) => {
        console.log(token);
        alert("Payment Successful");
    };
    return (
        <StripeCheckout
            label="Pay Now"
            name="Henry's Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};
export default StripeCheckoutButton;
