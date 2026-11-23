import  moon from "../assets/moon.svg"

export function Header({ theme, toggleTheme}){
    return (
        <header className="flex justify-between items-center p-6 shadow-sm">
            <div className="text-xl font-bold text-muted">
                <img src={moon} alt="Moon" />
            </div>
            <nav>
                {
                 
                }
            </nav>

            <p className="mb-8 text-content">
                O tema atual é: <span className="text-accent font-bold">{theme}</span>
            </p>

            <button
                onClick = {toggleTheme}
                className="px-6 py-2 bg-surface text-content rounded-lg shadow-md border border-accent hover:opacity-80 transition-opacity"
            >
                Trocar Tema
            </button>
        </header>
    )
}