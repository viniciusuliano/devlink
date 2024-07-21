import { Link } from "react-router-dom"
import { Input } from "../../components/input"
import { FormEvent, useState } from "react"
import {auth} from '../../services/firebaseConection'
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

export function Login(){

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()


    function handleLogin(element:FormEvent){
        element.preventDefault();
       if(user === '' || password === ''){
        return;
       }

       signInWithEmailAndPassword(auth, user, password)
       .then(() =>{
        navigate('/admin', {replace: true})    
        toast.success("Seja bem-vindo!")    
        })
       .catch((error) => {
        if(error.code === 'auth/invalid-credential'){
            toast.error('Erro! Senha inválida');
        }
        if(error.code === 'auth/invalid-email'){
            toast.error('Erro! Email inválido');
        }
       })
    }

    return(
        <div className="flex w-full h-screen justify-center items-center flex-col" >
            <Link to="/">
                    <h1 className="mt-11 text-white mb-7 font-bold text-5xl">Dev
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">Link</span>
                    </h1>
            </Link>
                    <form onSubmit={handleLogin} className="w-full flex items-center justify-center flex-col">
                        <Input value={user} placeholder="Digite o seu email..." onChange={(element) => setUser(element.target.value)}/>
                        <Input value={password} placeholder="**********" onChange={(element)=> setPassword(element.target.value)}/>
                        <button type="submit" className="w-2/6 h-11 min-w-72 rounded-lg bg-blue-500 mt-2">Acessar</button>
                    </form>
        </div>
    )
}