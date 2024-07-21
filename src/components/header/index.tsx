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
            <div className="flex justify-start items-center m-9 ml-3 gap-10 bg-white h-14 w-96">
                <button onClick={signOutLogin}>
                    <FiLogOut className='w-10 h-8 mr-5 text-red-500 rotate-180'/>
                </button>
                <Link className='font-bold' to='/'>Home</Link>
                <Link className='font-bold' to='/network'>Links</Link>                
            </div>
        </div>
    )
}