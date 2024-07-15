import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Admin } from "./pages/admin";
import { Login } from "./pages/login";
import { Network } from "./pages/network";
import { Error } from "./pages/error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path:'/admin',
    element: <Admin/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/network',
    element: <Network/>
  },
  {
    path: '*',
    element: <Error/>
  }
])


export {router}