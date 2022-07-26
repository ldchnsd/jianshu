import React, { PureComponent } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import store from "./store";

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/detail" exact component={Detail} />
        </BrowserRouter>
      </Provider>
    );
  }
}
