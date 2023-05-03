import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main from '../layout/Main.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Home from '../components/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main> ,
    children: [
	{
		path:"/",
		element: <Home></Home>
	}
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />

  </React.StrictMode>,
)
