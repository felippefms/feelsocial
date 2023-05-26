'use client'

import Image from "next/image";
import Link from "next/link";

import menuico from '../media/imgs/menuico.png'
import closeico from '../media/imgs/closeico.png';
import homeico from '../media/imgs/homelogo.png';
import profileico from '../media/imgs/profilelogo.png';
import messagesico from '../media/imgs/messageslogo.png';
import friendsico from '../media/imgs/friendslogo.png';
import configico from '../media/imgs/configlogo.png';
import helpico from '../media/imgs/helplogo.png';
import logoutico from '../media/imgs/logoutlogo.png';

function Menu(){
    
    function openMenu(){
        document.getElementById("menu")!.classList.remove("hidden");
        document.getElementById("menu")!.classList.remove("animate-slideout");
        document.getElementById("menu")!.classList.add("animate-slidein");
    };

    const closeMenu = () => {
        document.getElementById("menu")!.classList.remove("animate-slidein");
        document.getElementById("menu")!.classList.add("animate-slideout");
      };

    return(
        <>
        <button className="w-[60px] h-[60px]" onClick={openMenu}>
            <Image src={menuico} alt="Menu" className="w-[60px] ml-3"></Image>
        </button>
        <div id="menu" className="h-screen w-screen md:w-[25%] absolute top-0  bg-[#f0f2f5] translate-x-[-100%]">
            <div className="flex flex-row-reverse pr-3 pt-3">
                <button onClick={closeMenu}>
                    <Image src={closeico} alt="Fechar" className="w-[60px]"></Image>
                </button>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href='/feed' className="w-72 flex items-center hover:bg-[#d6d6d6]">
                            <Image src={homeico} alt="Página Inicial" className="w-[60px] mx-3"></Image>
                            Página Inicial
                        </Link>
                    </li>
                    <li>
                        <Link href='/profile' className="w-72 flex items-center hover:bg-[#d6d6d6]">
                            <Image src={profileico} alt="Perfil" className="w-[60px] mx-3"></Image>
                            Perfil
                        </Link>
                    </li>
                    <li>
                        <Link href='/feed' className="w-72 flex items-center hover:bg-[#d6d6d6]">
                            <Image src={messagesico} alt="Mensagens" className="w-[60px] mx-3"></Image>
                            Mensagens
                        </Link>
                    </li>
                    <li>
                        <Link href='/feed' className="w-72 flex items-center hover:bg-[#d6d6d6]">
                            <Image src={friendsico} alt="Amigos" className="w-[60px] mx-3"></Image>
                            Amigos
                        </Link>
                    </li>
                    <li>
                        <Link href='/settings' className="w-72 flex items-center hover:bg-[#d6d6d6]">
                            <Image src={configico} alt="Configurações" className="w-[60px] mx-3"></Image>
                            Configurações
                        </Link>
                    </li>
                    <li>
                        <Link href='/feed' className="w-72 flex items-center hover:bg-[#d6d6d6]">
                            <Image src={helpico} alt="Ajuda" className="w-[60px] mx-3"></Image>
                            Ajuda e Suporte
                        </Link>
                    </li>
                    <li>
                        <Link href='/' className="w-72 flex items-center hover:bg-[#d6d6d6]">
                            <Image src={logoutico} alt="Sair" className="w-[60px] mx-3"></Image>
                            Sair
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Menu;