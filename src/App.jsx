import { useState } from 'react';
import { CartContext } from './contexts/CartContext';
import ThemeContext from './contexts/ThemeContext';
import Trending from './pages/Trending';

function App() {
  const [cart, setCart] = useState([]);
  const [dark, setDark] = useState(true);
  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <div className={dark ? 'dark' : ''}>
          <Trending />
        </div>
      </CartContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
