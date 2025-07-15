import { Sun,Moon } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        if(isDarkMode) {
           setIsDarkMode(false);
           document.documentElement.classList.remove("dark");
        } else {
           setIsDarkMode(true);
           document.documentElement.classList.add("dark");
        }
    };



    return <button onClick={toggleTheme}>{isDarkMode ? (<Sun className="h-6 w-6 text-blue-900" />) : (<Moon className="h-6 w-6 text-yellow-300" />)}</button>
}