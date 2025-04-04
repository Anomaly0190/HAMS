import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";


import Dashboard from "./Components/AdminPanel/Dashboard.jsx";
import Userlayout from "./Userlayout.jsx";
import Adminlayout from "./Adminlayout.jsx";
import Home from "./Components/User/Home.jsx";
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
