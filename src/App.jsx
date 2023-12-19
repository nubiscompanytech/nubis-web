import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "../pages/Home";
import NubisGo from "../pages/NubisGo";
import NubisCorp from "../pages/NubisCorp";
import NubisRider from "../pages/NubisRider";
import About from "../pages/AboutUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/NubisGo", element: <NubisGo /> },
  { path: "/NubisCorp", element: <NubisCorp /> },
  { path: "/NubisRider", element: <NubisRider /> },
  { path: "/About", element: <About /> },
  { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
  { path: "/Terms", element: <Terms /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
