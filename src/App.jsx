import CartProvider from './contexts/CartContext';
import ThemeProvider from './contexts/ThemeContext';
import Trending from './pages/Trending';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Trending />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
