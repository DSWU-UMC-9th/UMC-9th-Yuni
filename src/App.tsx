import ContextPage from './06-useContext/ContextPage';
import { ThemeProvider } from './06-useContext/context/ThemeProvider';
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <ContextPage />
    </ThemeProvider>
  );
}
