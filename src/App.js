import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Index from "./pages/Index";
import Pledge from "./pages/Pledge";
import "./style/main.scss";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/pledge">
          <Pledge />
        </Route>
      </Switch>
    </Router>
  );
}
