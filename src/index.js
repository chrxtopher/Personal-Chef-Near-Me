import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import PrivateEvents from "./pages/PrivateEvents";
import MealPrep from "./pages/MealPrep";

const router = createBrowserRouter([
  {
    element: <Layout />,
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
        path: "/mealprep",
        element: <MealPrep />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
