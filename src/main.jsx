import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { ClerkProvider } from "@clerk/clerk-react"



const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!clerkPubKey) {
  throw new Error("Missing Publishable Key")
}


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

    <BrowserRouter>

      <ClerkProvider publishableKey={clerkPubKey}>
        <App />
      </ClerkProvider>

    </BrowserRouter>
  /* </React.StrictMode> */
);
