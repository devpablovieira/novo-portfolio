
import './App.css'
import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

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
    <div className="min-h-screen font-primary bg-main text-content transition-colors duration-200">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero/>
        <Projects/>
      </main>

    </div>
  )
}
export default App
