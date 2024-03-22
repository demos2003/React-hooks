import React, {useState} from 'react'
import { ThemeContext } from './components/context'
import CentralPage from './components/CentralPage';

const UseContext = () => {

    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <CentralPage/>
    </ThemeContext.Provider>
  )
}

export default UseContext