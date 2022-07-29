import React, { PureComponent } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
/* const Header = lazy(() => {
  import("./common/header");
});
const Home = lazy(() => {
  import("./pages/home");
});
const Detail = lazy(() => {
  import("./pages/detail");
});
const Write = lazy(() => {
  import("./pages/write");
});
const Login = lazy(() => {
  import("./pages/login");
}); */

import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Write from "./pages/write";
import Login from "./pages/login";

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/write" exact component={Write} />
            <Route path="/detail/:id" exact component={Detail} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
