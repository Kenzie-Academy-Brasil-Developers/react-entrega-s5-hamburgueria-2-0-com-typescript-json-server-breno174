import { Route, Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/Register" component={Register} />
  </Switch>
);
