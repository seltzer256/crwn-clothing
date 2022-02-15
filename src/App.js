import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route } from "react-router";

function App() {
    return (
        <div className="">
            <HomePage />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/topics" component={HomePage} />
        </div>
    );
}

export default App;
