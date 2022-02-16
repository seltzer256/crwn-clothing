import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Switch, Route } from "react-router";
import { auth } from "./firebase/firebase.utils";
import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null,
        };
    }
    componentDidMount() {
        this.unsuscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
            console.log(user);
        });
    }
    unsuscribeFromAuth = null;
    componentWillUnmount() {
        this.unsuscribeFromAuth();
    }
    render() {
        return (
            <div className="">
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInAndSignUp} />
                </Switch>
            </div>
        );
    }
}

export default App;
