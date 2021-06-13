import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/article">
                    <Article />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
