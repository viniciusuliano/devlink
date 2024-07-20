import { ReactNode, useEffect, useState } from "react"
import { auth } from "../services/firebaseConection"
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom"
import { FaSpinner } from 'react-icons/fa';


interface PrivateProps{
    children: ReactNode;
}


export function Private({children} : PrivateProps){
    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)

    useEffect(()=>{
        const login = onAuthStateChanged(auth,(user) =>{
        if(user){
            const data = {
                uid: user?.uid,
                email: user?.email
            }
            localStorage.setItem("@userData", JSON.stringify(data))
            setLoading(false)
            setSigned(true)
        }
        else{
            setLoading(false)
            setSigned(false)
        }
        })

        return () =>{
            login()
        }

    }, [])

    if(loading){
        
       return <div className="w-full h-screen flex justify-center items-center flex-col gap-4">
            <h1 className="text-4xl font-bold">Loading...</h1>
            <FaSpinner className="animate-spin w-80"></FaSpinner>
           </div>
    }

    if(!signed){
       return <Navigate to='/login'/>
    }

    return children
}