import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Statistics from './Statistics/Statistics';
import Clients from './Clients/Clients';
import Orders from './Orders/Orders';
import Finance from './Finance/Finance';
import ClientsHome from './Clients/ClientsHome';
import AllOrders from './Clients/AllOrders';
import PendingOrders from './Clients/PendingOrders';
import DeliveredOrders from './Clients/DeliveredOrders';
import BookedOrders from './Clients/BookedOrders';
import CancelledOrders from './Clients/CancelledOrders';
import FinanceHome from './Finance/FinanceHome';
import Dashboard from './Dashboard/Dashboard';
import FAQ from './FAQ/FAQ';
import Support from './Support/Support';
import LogOut from './LogOut/LogOut';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        index: true, 
        element: <Navigate to="/statistics" replace={true} />,
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
       path:'/dashboard',
       element:<Dashboard></Dashboard>
      },
      {
        path:'/faq',
        element:<FAQ></FAQ>
      },
      {
        path:'/support',
        element:<Support></Support>
      },
      {
        path:'/logout',
        element:<LogOut></LogOut>
      },
      {
        path:'clients',
        element:<ClientsHome></ClientsHome>,
        children:[
          {
            path:'allorders',
            element:<AllOrders></AllOrders>

          },
          {
            path:'pending-orders',
            element:<PendingOrders></PendingOrders>

          },
          {
            path:'delivered-orders',
            element:<DeliveredOrders></DeliveredOrders>

          },
          {
            path:'booked-orders',
            element:<BookedOrders></BookedOrders>
          },
          {
            path:'cancelled-orders',
            element:<CancelledOrders></CancelledOrders>
          }
        ]
      },
      {
        path:"/orders",
        element:<Orders></Orders>
      },
      {
        path:'finance',
        element:<FinanceHome></FinanceHome>,
        children:[
          {
            path:'allorders',
            element:<AllOrders></AllOrders>

          },
          {
            path:'pending-orders',
            element:<PendingOrders></PendingOrders>

          },
          {
            path:'delivered-orders',
            element:<DeliveredOrders></DeliveredOrders>

          },
          {
            path:'booked-orders',
            element:<BookedOrders></BookedOrders>
          },
          {
            path:'cancelled-orders',
            element:<CancelledOrders></CancelledOrders>
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
