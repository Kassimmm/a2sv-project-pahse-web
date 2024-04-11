import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";

import EditContact, {
  action as editAction,
} from "./routes/edit";

import Root, { 
  loader as rootLoader,
  action as rootAction
 } from "./routes/root";
import ErrorPage from "./error-page";

import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contacts";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    action: rootAction,
    errorElement: <ErrorPage />,
    children: [
      {
      children: [
        { index: true, element: <Index /> },
        {
          path: "contacts/:contactId",
          element: <Contact />,
          loader: contactLoader,
          action: contactAction,
        },
        {
          path: "contacts/:contactId/edit",
          element: <EditContact />,
          loader: contactLoader,
          action: editAction,
        },
        {
          path: "contacts/:contactId/destroy",
          action: destroyAction,
          errorElement: <div>Oops! There was an error.</div>,
        },
      ],
  }]
  },
]); 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);