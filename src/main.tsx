import ReactDOM from 'react-dom/client'
import { router } from './App'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <>    
        <RouterProvider router={router}/>
        <ToastContainer autoClose={3000}/>
    </>
)
