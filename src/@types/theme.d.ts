export type Themes = string[];

export type ThemeContextType = {
  theme: string;
  setTheme: (value: string) => void;
};