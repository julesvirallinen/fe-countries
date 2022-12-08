import React from 'react';
import { ThemeContextType, Themes } from '../@types/theme.d';
import { ThemeContext } from '../contexts/theme';
import Select from './select';

type ThemeWrapperProps = {
    children: JSX.Element;
}
const Theme: React.FC<ThemeWrapperProps> = ({ children }) => {
  const { theme, setTheme } = React.useContext(ThemeContext) as ThemeContextType;
  const themes: Themes = ['default', 'pink', 'orange', 'light'];

  const handleThemeChange = (selectedTheme:string) => {
    setTheme(selectedTheme);
  };

  return (
    <div className="theme-wrapper" data-theme={theme}>
      <Select className="theme-select" options={themes} handleChange={handleThemeChange} selected={theme}/>
      {children}
    </div>
  );
};

export default Theme;
