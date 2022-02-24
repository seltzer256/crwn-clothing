//import "./App.css";
import { GlobalStyle } from "./global.styles";
//import HomePage from "./pages/homepage/homepage.component";
//import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
//import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Switch, Route, Redirect } from "react-router";
import { auth } from "./firebase/firebase.utils";
import React, { lazy, useEffect, useState, Suspense } from "react";
//import CheckoutPage from "./pages/checkout/checkout.component";
import CurrentUserContext from "./context/current-user/current-user.context";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInAndSignUp = lazy(() =>
    import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

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
            <GlobalStyle />
            <CurrentUserContext.Provider value={currentUser}>
                <Header />
            </CurrentUserContext.Provider>

            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/shop" component={ShopPage} />
                        <Route
                            exact
                            path="/signin"
                            render={() =>
                                currentUser ? (
                                    <Redirect to="/" />
                                ) : (
                                    <SignInAndSignUp />
                                )
                            }
                        />
                        <Route
                            exact
                            path="/checkout"
                            component={CheckoutPage}
                        />
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>
    );
};

export default App;
