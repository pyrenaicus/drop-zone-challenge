import logo from "./logo.svg";
import { Router, Route, Switch } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

import LoginLogout from "./components/LoginLogout";

// styles
import "./App.css";

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();

  const dropZone = (
    <div class="drop-zone-area">
      <div
        class="drop-zone-target"
        ondrop="dropHandler(event)"
        ondragover="dragOverHandler(event);"
      >
        <p>arrastra tus archivos aquí</p>
      </div>
      <button class="upload-btn" onclick="upload()">
        Subir archivos
      </button>
    </div>
  );

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <h1>LOading...</h1>;
  }

  return (
    <div className="container">
      {isAuthenticated ? dropZone : null}
      <LoginLogout />
    </div>
  );
}

export default App;
