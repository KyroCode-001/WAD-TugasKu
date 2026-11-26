import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import { TugasProvider } from "./context/TugasContext.jsx";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TugasProvider>
        <App />
      </TugasProvider>
    </BrowserRouter>
  </React.StrictMode>
);