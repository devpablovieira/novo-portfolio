
import './App.css'
import { useState, useEffect } from 'react'
import { Header } from './components/Header'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    if (theme == 'dark'){
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark': 'light')
  }

  return (
    <div className="min-h-screen bg-main text-content transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main>
        {}
      </main>

    </div>
  )
}
export default App
