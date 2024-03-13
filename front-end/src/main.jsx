import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/index";
import SignIn from "./pages/sign-in";
import PrivateRoutes from "./components/privateRoutes";
import User from "./pages/user";
import "./styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<Index />} path="/" exact />
          <Route element={<SignIn />} path="/sign-in" exact />
          <Route element={<PrivateRoutes />}>
            <Route element={<User />} path="/user" exact />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
