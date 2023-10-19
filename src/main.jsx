import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'
import Home from './Pages/Home/Home.jsx'
import AddProduct from './Pages/AddProduct/AddProduct.jsx'
import MyCart from './Pages/MyCart/MyCart.jsx'
import Products from './Pages/Products/Products.jsx'
import ProductDetails from './Pages/ProductDetails/ProductDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "add-product",
        element: <AddProduct />
      },
      {
        path: "my-cart",
        element: <MyCart />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "products/:brand",
        element: <Products />,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}`)
      },
      {
        path: "product-details/:id",
        element: <ProductDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/product-details/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
