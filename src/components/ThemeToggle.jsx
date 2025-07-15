import { Sun,Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect (() => {
        const savedTheme = localStorage.getItem("theme");
        if(savedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);
    const toggleTheme = () => {
        if(isDarkMode) {
           setIsDarkMode(false);
           localStorage.setItem("theme", "light");
           document.documentElement.classList.remove("dark");
        } else {
           setIsDarkMode(true);
           localStorage.setItem("theme", "dark");
           document.documentElement.classList.add("dark");
        }
    };



    return <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300", "focus:outline-hidden")}>{isDarkMode ? (<Sun className="h-6 w-6 text-yellow-300" />) : (<Moon className="h-6 w-6 text-blue-900" />)}</button>
}