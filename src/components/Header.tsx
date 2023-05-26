'use client'
import { useEffect } from "react";
import ColorThemeSwitcher from "./ColorThemeSwitcher";
import Menu from "./Menu";

const Header = () => {
    ColorThemeSwitcher;
    useEffect(() => {
        // Verifica o tema atualmente selecionado
        if (localStorage.theme === 'dark') {
          document.documentElement.classList.add('dark'); // Adiciona a classe 'dark' ao elemento raiz
        } else {
          document.documentElement.classList.remove('dark'); // Remove a classe 'dark' do elemento raiz
        }
      }, []);

    return(
        <header className="bg-gradient-to-tr from-[#051937] via-[#2d2a82] to-[#8f0bbc] w-full h-16">
            <div>
                <Menu></Menu>
            </div>
        </header>
    )
}

export default Header;