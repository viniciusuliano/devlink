import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Admin } from "./pages/admin";
import { Login } from "./pages/login";
import { Network } from "./pages/network";
import { Error } from "./pages/error";
import {Private} from "./routes/Private"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path:'/admin',
    element: <Private><Admin/></Private>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/network',
    element: <Private><Network/></Private>
  },
  {
    path: '*',
    element: <Error/>
  }
])


export {router}