'use client'

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {}
})

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {

    const savedTheme = localStorage.getItem("darkMode")

    if (savedTheme === "true") {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }

  }, [])

  const toggleTheme = () => {

    const newValue = !darkMode

    setDarkMode(newValue)

    if (newValue) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("darkMode", "true")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("darkMode", "false")
    }

  }

  return (

    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme
      }}
    >

      {children}

    </ThemeContext.Provider>

  )

}

export const useTheme = () => useContext(ThemeContext)