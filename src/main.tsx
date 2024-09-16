import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoreShops from "./pages/MoreShops.tsx";
import LastEvents from "./pages/LastEvents.tsx";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/shops",
    element: <MoreShops />,
  },

  {
    path: "/pastevents",
    element: <LastEvents />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/moreshops",
    element: <MoreShops />,
  },
  {
    path: "/lastevents",
    element: <LastEvents />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
