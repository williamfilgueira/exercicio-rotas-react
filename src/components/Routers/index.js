import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageHome from "../PageHome";
import PageFrontEnd from "../PageFrondEnd";
import PageBackEnd from "../PageBackEnd";

const Routers = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PageHome} />
      <Route path="/front-end" component={PageFrontEnd} />
      <Route path="/back-end" component={PageBackEnd} />
    </Switch>
  </BrowserRouter>
);
export default Routers;
