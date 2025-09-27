import {THEME, useTheme} from './context/ThemeProvider';
import clsx from 'clsx';

export default function ThemeToggleButton() {
    const {theme, toggleTheme} = useTheme();

    const isLightmode = theme === THEME.LIGHT;

    return (
        <button
            onClick={toggleTheme}
            className={clsx('px-4 py-2 rounded-md transition-all',{
                'bg-black text-white': !isLightmode,
                'bg-white text-black': isLightmode,
            })}
        >
            {isLightmode ? 'Dark Mode ~~' : 'Light Mode ~~~~~'}
        </button>
    );

            }