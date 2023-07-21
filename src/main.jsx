import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { theme } from "./styles/index";

import Auth from "./views/Auth/Auth";
import App from "./App";

import { store } from "./redux/store";
import { Provider } from "react-redux";

import Search from "./components/Search/Search";
import Content from "./components/Content";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/dashboard",
    element: <App />,
    children: [
      {
        path: "main",
        element: <Content />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
);
