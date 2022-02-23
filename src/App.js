import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Switch, Route, Redirect } from "react-router";
import { auth } from "./firebase/firebase.utils";
import React, { useEffect, useState } from "react";
import CheckoutPage from "./pages/checkout/checkout.component";
import CurrentUserContext from "./context/current-user/current-user.context";

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(
            async (userAuth) => {
                if (userAuth) {
                    //const userRef = await dispatch(setCurrentUser(userAuth));
                    // userRef.onSnapshot((snapshot) => {
                    //     dispatch({
                    //         type: "UPDATE_USER_PROFILE",
                    //         payload: {
                    //             id: snapshot.id,
                    //             ...snapshot.data()
                    //         }
                    //     });
                    // });
                }
                setCurrentUser(userAuth);
            }
        );
        return () => {
            unsubscribeFromAuth();
        };
    }, []);

    return (
        <div className="">
            <CurrentUserContext.Provider value={currentUser}>
                <Header />
            </CurrentUserContext.Provider>

            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route
                    exact
                    path="/signin"
                    render={() =>
                        currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
                    }
                />
                <Route exact path="/checkout" component={CheckoutPage} />
            </Switch>
        </div>
    );
};

export default App;
