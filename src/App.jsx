
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    (theme == 'dark') ? document.documentElement.classList = 'dark' : document.documentElement.classList = 'light' 
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark': 'light')
  }
  
  return (
    <div className="min-h-screen bg-main text-content transition-colors duration-300 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">
        Meu Portfólio
      </h1>

      <p className="mb-8 text-muted">
        O tema atual é: <span className="text-accent font-bold">{theme}</span>
      </p>

      <button
        onClick = {toggleTheme}
        className="px-6 py-2 bg-surface text-main rounded-lg shadow-md border border-accent hover:opacity-80 transition-opacity"
      >
        Trocar Tema
      </button>

    </div>
  )
}
export default App
