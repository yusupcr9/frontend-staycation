import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import DetailPages from "pages/DetailPages";
import ComingSoon from "pages/ComingSoon";
import Checkout from "pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailPages}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/soon" component={ComingSoon}></Route>
      </Router>
    </div>
  );
}

export default App;
