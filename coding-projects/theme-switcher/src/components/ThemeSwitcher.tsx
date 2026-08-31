import { useTheme } from "../context/ThemeContext";

export function ThemeSwitcher() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div>
            <button onClick={toggleTheme}>
                {theme === 'light' ? '☀️ Light mode' : '🌙 Dark mode'}
            </button>
        </div>
    )
}