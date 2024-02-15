import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Statistics from './Statistics/Statistics';
import Clients from './Clients/Clients';
import Orders from './Orders/Orders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/clients',
        element:<Clients></Clients>
      },
      {
        path:"/orders",
        element:<Orders></Orders>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
