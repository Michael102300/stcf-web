import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import AuthState from "./context/auth/authState";
import ProblemState from "./context/problems/problemsState";
import AlertState from "./context/alerts/alertState";
import tokenAuth from "./config/tokenAuth";
import Problems from "./components/problems/Problems";
import PrivateRoute from "./components/routes/PrivateRoutes";
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <AlertState>
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/problems" component={Problems} />
          </Switch>
        </Router>
      </AuthState>
    </AlertState>
  );
}

export default App;
