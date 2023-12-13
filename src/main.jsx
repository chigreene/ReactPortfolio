import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importing bootstrap for styling
import "bootstrap/dist/css/bootstrap.min.css";
// create and import ./index.css if needed

// brings in the necessary pages for the router to conditionally show the appropriate views
import App from "./App.jsx";
import ErrorP from "./pages/error/ErrorP.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import ResumePage from "./pages/resume/ResumePage.jsx";
import ContactPage from "./pages/contact/ContactPage.jsx";
import PortfolioPage from "./pages/portfolio/PortfolioPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorP />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: "Resume",
        element: <ResumePage />,
      },
      {
        path: "Contact",
        element: <ContactPage />,
      },
      {
        path: "Portfolio",
        element: <PortfolioPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
