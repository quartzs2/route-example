import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { PATHS } from "@constants/paths";
import { AboutPage, ContactPage, ErrorPage, HomePage, Root } from "@routes";

let router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATHS.ABOUT,
        element: <AboutPage />,
      },
      {
        path: PATHS.CONTACT,
        element: <ContactPage />,
      },
      {
        path: PATHS.ALL,
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
