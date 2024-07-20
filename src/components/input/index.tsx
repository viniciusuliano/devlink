import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input(props: InputProps){
    return(
        <input className="w-2/6 h-11 min-w-72 rounded-lg m-1" {...props}/>
    )
}