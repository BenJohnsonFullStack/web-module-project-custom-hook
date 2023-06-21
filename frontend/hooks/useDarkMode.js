import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (bool) => {
    const [darkMode, setDarkMode] = useLocalStorage("dark mode", bool);
    return [darkMode, setDarkMode];
};