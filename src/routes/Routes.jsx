import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home.jsx";
import AddProduct from "../Pages/AddProduct/AddProduct.jsx";
import MyCart from "../Pages/MyCart/MyCart.jsx";
import Products from "../Pages/Products/Products.jsx";
import ProductDetails from "../Pages/ProductDetails/ProductDetails.jsx";
import Update from "../Pages/Update/Update.jsx";
import Register from "../Pages/Register/Register.jsx";
import NoFound from "../Pages/NoFound/NoFound.jsx";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NoFound />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch('https://brand-shop-server-21ibh08re-muhammadnazmul02-gmailcom.vercel.app/products')
        },
        {
          path: "add-product",
          element: <PrivateRoute><AddProduct /></PrivateRoute>
        },
        {
          path: "my-cart",
          element: <PrivateRoute><MyCart /></PrivateRoute>,
          loader: () => fetch("https://brand-shop-server-21ibh08re-muhammadnazmul02-gmailcom.vercel.app/my-cart"),
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
            fetch(`https://brand-shop-server-21ibh08re-muhammadnazmul02-gmailcom.vercel.app/products/${params.brand}`),
        },
        {
          path: "product-details/:id",
          element: <PrivateRoute><ProductDetails /></PrivateRoute> ,
          loader: ({ params }) =>
            fetch(`https://brand-shop-server-21ibh08re-muhammadnazmul02-gmailcom.vercel.app/product-details/${params.id}`),
        },
        {
          path: "/update/:id",
          element: <PrivateRoute><Update /></PrivateRoute>,
          loader: ({ params }) =>
            fetch(`https://brand-shop-server-21ibh08re-muhammadnazmul02-gmailcom.vercel.app/update/${params.id}`),
        },
      ],
    },
  ]);

  export default router