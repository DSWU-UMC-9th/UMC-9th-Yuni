import clsx from 'clsx';
import{ THEME, useTheme } from './context/ThemeProvider';
export default function ThemeContent() {
    const {theme}=useTheme();

const isLightmode=theme===THEME.LIGHT;

    return (
        <div className={clsx('p-4 h-dvh w-full',
        isLightmode ? 'bg-white' : 'bg-gray-800'
        )}>
            <h1 className={clsx('text-wxl font-bold',
            isLightmode ? 'text-black' : 'text-white'
            )}
            >
                ThemeContent
            </h1>
            <p className={clsx('mt-2',
            isLightmode ? 'text-black' : 'text-white'
            )}>
                This is ThemeContent.
            </p>
        </div>
    );
}