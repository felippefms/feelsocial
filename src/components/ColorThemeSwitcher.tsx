'use client'

const ColorThemeSwitcher= () => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light'; // Define o tema como 'light' no localStorage
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark'; // Define o tema como 'dark' no localStorage
    }
}

export default ColorThemeSwitcher;