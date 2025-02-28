import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserContextProvider } from "./context/UserContext";

const clientId = import.meta.env.VITE_CLIENT_ID;
console.log("client id: ", clientId);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={clientId}>
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </UserContextProvider>
  </StrictMode>
);
