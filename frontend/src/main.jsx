import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

// UserPanel
import Userlayout from "./Userlayout.jsx";
import Home from "./Components/User/Home.jsx";
import Login from "./Components/User/Login.jsx";
import Register from "./Components/User/Register.jsx";
// AdminPanel
import Adminlayout from "./Adminlayout.jsx";
import Dashboard from "./Components/AdminPanel/Dashboard.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Userlayout />,
        children: [
          { path: "", element: <Home /> },
          
        ]
      },
      {
        path: "/admin",
        element: <Adminlayout />,
        children: [
          { path: "dashboard", element: <Dashboard /> }
        ]
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </StrictMode>
);
