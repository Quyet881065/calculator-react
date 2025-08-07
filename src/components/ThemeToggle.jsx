import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"


export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return (
       <button
      className="cursor-pointer  p-2 rounded-xl transition-all duration-300"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <Sun className=" bg-yellow-500 border rounded-full p-2 w-10 h-10" />
      ) : (
        <Moon className="border rounded-full p-2 w-10 h-10" />
      )}
    </button>
    )
}