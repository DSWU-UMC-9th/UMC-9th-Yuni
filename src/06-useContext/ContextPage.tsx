import { useTheme, THEME } from './context/ThemeProvider';
import Navbar from './Navbar';
import ThemeContent from './ThemeContent';
import clsx from 'clsx';

export default function ContextPage() {
  const { theme } = useTheme();
  const isLightmode = theme === THEME.LIGHT;

  return (
    <div className={clsx('flex flex-col items-center justify-center min-h-screen w-full transition-colors', {
      'bg-white text-black': isLightmode,
      'bg-gray-900 text-white': !isLightmode
    })}>
      <Navbar />
      <main className="flex-1 w-full">
        <ThemeContent />
      </main>
    </div>
  );
}

