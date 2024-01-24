import { createContext, useContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';

const ThemeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <div className={dark ? 'dark' : ''}>
        {children}{' '}
        <ToastContainer
          position="bottom-right"
          theme={dark ? 'dark' : 'light'}
        />
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
