import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import{
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css'
import store from './store';
import { Home } from './Pages/Home';
import { Detail } from './Pages/Detail';
import { Blog } from './Pages/Blog';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/detail',
    element: <Detail/>
  },
  {
    path:'/blog',
    element: <Blog/>
  },
  {
    path:'/login',
    element: <LoginPage/>
  },
  {
    path:'/register',
    element: <RegisterPage/>
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
