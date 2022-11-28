import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { SetContextProvider } from "./context/setContext/SetContext";
import { CardContextProvider } from "./context/cardContext/CardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SetContextProvider>
        <CardContextProvider>
          <App/>
        </CardContextProvider>
      </SetContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
