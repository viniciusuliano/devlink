import { Header } from "../../components/header"
import { Input } from "../../components/input"
import { useState } from "react"
export function Admin(){
    
    const [nameLink, setNameLink] = useState("")
    const [urlLink, setUrlLink] = useState("")
    const [colorText, setTextColor] = useState("#000")
    const [bgColor, setBgColor] = useState("#FFF")

    return(

        <div className="w-full h-screen flex flex-col">
            <Header/>
                <form className="flex flex-col items-center">
                    <label className="text-white font-medium">Nome do Link</label>
                    <Input value={nameLink} placeholder="Nome do seu link" onChange={(element) => setNameLink(element.target.value)}/>
                    <label className="text-white font-medium mt-4">URL do link</label>
                    <Input value={urlLink} placeholder="URL do seu link" onChange={(element) => setUrlLink(element.target.value)}/>
                </form>
                <section className="flex items-center justify-center">
                    <div className="flex items-center gap-5 text-white font-medium max-sm:flex-col mt-5">
                        <label>Cor do texto</label>
                        <input value={colorText} type="color" className="w-32 h-11 rounded" onChange={(element) => setTextColor(element.target.value)} />
                        <label>Cor do fundo</label>
                        <input type="color" className="w-32 h-11 rounded" onChange={(element) => setBgColor(element.target.value)} />
                    </div>
                </section>

                <div className="flex items-center justify-center mt-8 flex-col w-full">
                    <h2 className="text-white font-medium">Veja como está ficando seu Link</h2>
                    <article className=" flex w-96 items-center justify-center h-12 rounded max-sm:w-72" style={{marginBottom: 8, marginTop: 8, backgroundColor:bgColor}}>
                        <p className="font-medium text-xl" style={{color: colorText}}>Canal do Youtube</p>
                    </article>
                </div>
        </div>    

    )
}