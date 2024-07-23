import { Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import {auth} from '../../services/firebaseConection'
import { toast } from 'react-toastify';
export function Header(){

    function signOutLogin(){
     auth.signOut()
     .then(() => {
        toast.warn("Saiu da conta")
     })
     .catch((error)=>{
        console.log(error)
     })
    }

    return (
        <div className='w-full flex justify-center'>                
            <div className="flex justify-around items-center bg-white w-full h-20 rounded p-3 m-5 ">
                <button onClick={signOutLogin}>
                    <FiLogOut className='w-10 h-8 text-red-500 rotate-180' />
                </button>
                <Link className='font-bold text-sm md:text-xl duration-150 hover:scale-125' to='/'>Home</Link>
                <Link className='font-bold text-sm md:text-xl duration-150 hover:scale-125' to='/network'>Links</Link>      
                <Link className='font-bold text-sm md:text-xl duration-150 hover:scale-125' to='http://instagram.com.br' target='_blank'>Redes sociais</Link>
            </div>
        </div>
    )
}