import * as React from 'react';
import { ThemeContextType } from '../@types/theme.d';

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

type ThemeProviderProps = {
    children: JSX.Element;
  }
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<string>('default');

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;