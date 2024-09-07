import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.tsx";
import MoreShops from "./pages/MoreShops.tsx";
import Contact from "./pages/Contact.tsx";
import LastEvents from "./pages/LastEvents.tsx";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/shops",
    element: <MoreShops />,
  },
  {
    path: "/contactus",
    element: <Contact />,
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
