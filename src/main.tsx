import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Dashboard from './blocks/Dashboard/Dashboard';
import HomePage from './blocks/HomePage/HomePage';
import './index.css';
import 'tw-elements';
import Employees from './blocks/Employees/Employees';
import DashboardWelcome from './components/Others/DashboardWelcome';
import AllTransactions from './blocks/AllTransactions';
import AllCustomers from './blocks/AllCustomers';

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
  {
    path: "hompage",
    element: <HomePage />,
  },
  {
    path: "dashboard/*",
    element: <Dashboard />,
    // children: [
    //   {
    //     path: "employees",
    //     element: <Employees />,
    //   },
    //   {
    //     path: "welcome",
    //     element: <DashboardWelcome />,
    //   },
    // ]
  },
  {
    path: "dashboard/employees",
    element: <Employees />,
  },
  {
    path: "dashboard/welcome",
    element: <DashboardWelcome />,
  },
  {
    path: "dashboard/customers",
    element: <AllCustomers />
  },
  {
    path: "dashboard/transactions",
    element: <AllTransactions />
  },
  {
    path: "transactions",
    element: <AllTransactions />
  },
  {
    path: "customers",
    element: <AllCustomers />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
