import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './views/Home/Home';
import About from './views/About/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  }
])
root.render(
 
<>
<Toaster/>
<RouterProvider router={Router}/>
</>
  
);


