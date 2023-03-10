import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Registrer/RegistrationForm";
import Infoviviendas from "./components/Main/cuadradito/Info_viviendas/Infoviviendas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/buscar/:id",
    element: <Infoviviendas />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
