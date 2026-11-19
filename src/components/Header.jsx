export function Header({ theme, toggleTheme}){
    return (
        <header className="flex justify-between items-center p-6 bg-surface shadow-sm">
            <div className="text-xl font-bold text-accent">
                { }
                &lt;PabloVieira /&gt;
            </div>
            <nav>
                {

                }
            </nav>

            <p className="mb-8 text-muted">
                O tema atual é: <span className="text-accent font-bold">{theme}</span>
            </p>

            <button
                onClick = {toggleTheme}
                className="px-6 py-2 bg-surface text-main rounded-lg shadow-md border border-accent hover:opacity-80 transition-opacity"
            >
                Trocar Tema
            </button>
        </header>
    )
}