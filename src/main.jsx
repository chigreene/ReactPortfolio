import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importing bootstrap for styling
import "bootstrap/dist/css/bootstrap.min.css";
// create and import ./index.css if needed

// brings in the nessissary pages for the router to conditionally show the appropriate views
import App from "./App.jsx";
import ErrorPage from "./pages/error/errorPage.jsx";
import AboutPage from "./pages/about/indexPage.jsx";
import ResumePage from "./pages/resume/resumePage.jsx";
import ContactPage from "./pages/contact/contactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: "resume",
        element: <ResumePage />,
      },
      {
        path: "Contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
