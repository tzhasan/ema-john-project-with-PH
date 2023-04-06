import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Shop from './Components/Shop/Shop';
import HomeLayout from './Components/Home layout/HomeLayout';
import Orders from './Components/orders/Orders';
import Inventory from './Components/inventory/Inventory';
import Login from './Components/login/Login';
import CartProductsLoader from './Components/loader/CartProductsLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/orders",
        element: <Orders />,
        loader: CartProductsLoader
      },
      {
        path: "/invertory",
        element: <Inventory />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
