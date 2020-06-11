import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "./config/routes";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {routes.map((route, idx) => (
          <Route
            exact={true}
            path={route.path}
            component={route.component}
            key={idx}
          />
        ))}
      </BrowserRouter>
    </Provider>
  );
}
