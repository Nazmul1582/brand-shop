import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import Home from "./Pages/Home/Home.jsx";
import AddProduct from "./Pages/AddProduct/AddProduct.jsx";
import MyCart from "./Pages/MyCart/MyCart.jsx";
import Products from "./Pages/Products/Products.jsx";
import ProductDetails from "./Pages/ProductDetails/ProductDetails.jsx";
import Update from "./Pages/Update/Update.jsx";
import Register from "./Pages/Register/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import NoFound from "./Pages/NoFound/NoFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "my-cart",
        element: <MyCart />,
        loader: () => fetch("http://localhost:5000/my-cart"),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "products/:brand",
        element: <Products />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.brand}`),
      },
      {
        path: "product-details/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product-details/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
