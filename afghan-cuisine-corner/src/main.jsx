import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main from './layout/Main.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Recipes from './components/Recipes.jsx'
import Blog from './components/Blog.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import AuthProviders from './providers/AuthProviders.jsx'


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
	},
	{
		path:"/blog",
		element: <Blog></Blog>
	},
	{
		path:"/login",
		element: <Login></Login>
	},
	{
		path:"/register",
		element: <Register></Register>
	},
	{
		path:"/recipes/:id",
		element: <PrivateRoute>  <Recipes></Recipes> </PrivateRoute> ,
		loader: ()=>fetch('https://afghan-cuisine-corner-server-gwynbleiddrivia.vercel.app/chefs')
	},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  	<AuthProviders>

        	<RouterProvider router={router} />

	</AuthProviders>
  </React.StrictMode>,
)
