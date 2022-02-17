import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Switch, Route, Redirect } from "react-router";
import { auth } from "./firebase/firebase.utils";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { setCurrentUser } from "./redux/user/user.actions";
import CheckoutPage from "./pages/checkout/checkout.component";

class App extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         currentUser: null,
    //     };
    // }
    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsuscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
            }
            setCurrentUser(userAuth);
            //console.log(user);
        });
    }
    unsuscribeFromAuth = null;
    componentWillUnmount() {
        this.unsuscribeFromAuth();
    }
    render() {
        return (
            <div className="">
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route
                        exact
                        path="/signin"
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <SignInAndSignUp />
                            )
                        }
                    />
                    <Route exact path="/checkout" component={CheckoutPage} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
