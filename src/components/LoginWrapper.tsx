'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import feelsociallogo from "../media/imgs/feelsociallogo.png";

function Login() {

    const [toggle,setToggle] = useState(true)

    const handleClick = () =>{
        setToggle(!toggle)
    }

    return(
        <div className='max-w-[550px] my-2 mx-2 py-2 px-3 bg-[#746D88] rounded-[30px] border-2 border-black animate-fadein'>
            {toggle ?
                <div className="flex flex-col items-center justify-center">
                    <Image src={feelsociallogo} alt="Feelsolcial Logo" className="w-[300px] h-[300px] border-4 border-black rounded-[30px] animate-fadein"></Image>
                    <p className="text-white text-2xl text-center mb-16 animate-fadein">Conecte-se e nos ajude a aumentar cada vez mais essa incrível rede social !</p>
                    <input type="text" placeholder='Usuário' className="h-[40px] w-10/12 border-black rounded-[25px] pl-5 mb-2 animate-fadein"></input>
                    <input type="password" placeholder='Senha' className="h-[40px] w-10/12 border-black rounded-[25px] pl-5 mb-4 animate-fadein"></input>
                    <p onClick={handleClick} className="text-[#0000EE] cursor-pointer mb-4 hover:underline animate-fadein">Não possui conta? Cadastre-se</p>
                    <Link href="/feed" className="bg-[#F0F0F0] rounded-[5px] py-2 px-5 hover:bg-[#bab9bd] animate-fadein">Entrar</Link>
                </div>
                :
                <div className="flex flex-col items-center justify-center animate-fadein">
                    <Image src={feelsociallogo} alt="Feelsolcial Logo" className="w-[300px] h-[300px] border-4 border-black rounded-[30px]"></Image>
                    <p className="text-white text-2xl text-center mb-12">Crie sua conta, faça novos amigos, junte-se a nós e participe do FeelSocial !</p>
                    <input type="text" placeholder='Usuário' className="h-[40px] w-10/12 border-black rounded-[25px] pl-5 mb-2"></input>
                    <input type="password" placeholder='Senha' className="h-[40px] w-10/12 border-black rounded-[25px] pl-5 mb-2"></input>
                    <input type="password" placeholder='Confirme a senha' className="h-[40px] w-10/12 border-black rounded-[25px] pl-5 mb-2"></input>
                    <p onClick={handleClick} className="text-[#0000EE] cursor-pointer mb-2 hover:underline">Já possui uma conta? Entrar</p>
                    <Link href="/feed" className="bg-[#F0F0F0] rounded-[5px] py-2 px-5 hover:bg-[#bab9bd]">Criar Conta</Link>
                </div>
            }
        </div>
    );
}
export default Login;