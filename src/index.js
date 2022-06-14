import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth0-provider-with-history";

import "./style/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>
);
