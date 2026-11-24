import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export function Header({ theme, toggleTheme}){
    const icone = theme === 'dark' ? faMoon : faSun;
    return (
        <header className="flex justify-between items-center p-7 pl-10 pr-10 shadow-sm bg-surface sticky top-0 z-50">
            <FontAwesomeIcon icon={icone} alt={theme} id="toggle-icon" className="w-10 h-10 hover:opacity-80 cursor-pointer" onClick={toggleTheme}/>     

            <nav className="flex gap-5">
                <a href="/">Início</a>
                <a href="#projetos">Projetos</a>
                <a href="sobre.js">Sobre</a>
                <a href="contato.js">Contato</a>
            </nav>
        </header>
    )
}