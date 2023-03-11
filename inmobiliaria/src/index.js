import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Registrer/RegistrationForm";
import ErrorPage from "./Error-page";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AuthProvider } from "./authProvider";
import AddForm from "./components/Add/AddForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <>
        <Header />
        <ErrorPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/admin",
    element: (
      <>
        <Header />
        <AddForm />
        <Footer />
      </>
    ),
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
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
