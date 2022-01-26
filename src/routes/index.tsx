import { Switch } from "react-router-dom";
import { Route } from "./routes";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/Register" component={Register} />
    <Route exact path="/Dashboard" component={Dashboard} isPrivate={false} />
  </Switch>
);
