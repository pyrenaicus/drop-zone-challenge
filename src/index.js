import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import AuthorizationProvider from "./components/AuthorizationProvider";
import { Auth0Provider } from "@auth0/auth0-react";

import "./style/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthorizationProvider>
      <App />
    </AuthorizationProvider>
  </Router>
);
