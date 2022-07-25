import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./style.js";
import { GlobalFontStyle } from "./statics/iconfont/iconfont";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Fragment>
      <GlobalStyle />
      <GlobalFontStyle />
      <App />
    </Fragment>
  </React.StrictMode>
);
