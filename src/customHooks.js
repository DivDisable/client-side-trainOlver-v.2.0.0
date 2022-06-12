import { useContext, useState } from 'react';

export const useThemeController = (defaultTheme) => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) || defaultTheme
  );

  return [theme, setTheme];
};

export const useThemeContext = (context) => useContext(context);
