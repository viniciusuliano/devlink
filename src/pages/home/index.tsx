import { Footer } from "../../components/footer"
import fotoPerfil from '../../assets/foto-perfil.jpg';
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa"
export function Home(){
    return(
        <div className="flex flex-col w-full py-4 items-center justify-center">
            <img className="w-48 h-48 rounded-full my-5 transition-transform hover:scale-105 cursor-pointer" src={fotoPerfil}/>
            <h1 className="md:text-4xl text-3xl font-bold text-white mt-10">Vinicius Uliano</h1>
            <span className="text-gray-50 mb-5 mt-5">Veja meus links</span>
        
        <main className="flex flex-col w-11/12 h-8 max-w-xl text-center">
            <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
            <a>
                <p className="text-base md:text-lg">
                    [Inscrições Abertas] - Fábrica de Aplicativos
                </p>
            </a>

            </section>
            <footer className="flex justify-center gap-3 my-4">
                <Footer url="https://www.instagram.com/vinsiusuliano/">
                    <FaInstagram size={35} color="#FFF"/>
                </Footer>
                <Footer url="https://www.instagram.com/vinsiusuliano/">
                    <FaYoutube size={35} color="#FFF"/>
                </Footer>
                <Footer url="https://www.instagram.com/vinsiusuliano/">
                    <FaWhatsapp size={35} color="#FFF"/>
                </Footer>
            </footer>
        </main>
        </div>
    )
}