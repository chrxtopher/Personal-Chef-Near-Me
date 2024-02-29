import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import PrivateEvents from "./pages/PrivateEvents";
import Faq from "./pages/Faq";

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/privateevents",
        element: <PrivateEvents />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
