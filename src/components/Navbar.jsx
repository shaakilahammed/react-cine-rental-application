import { useState } from 'react';
import moonImage from '../assets/icons/moon.svg';
import sunImage from '../assets/icons/sun.svg';
import logoImage from '../assets/logo.svg';
import ringImage from '../assets/ring.svg';
import cartImage from '../assets/shopping-cart.svg';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';
import CartModal from './CartModal';
const Navbar = () => {
  const [showCart, setShowCart] = useState(false);

  const { cart } = useCart();
  const { dark, setDark } = useTheme();

  const handleThemeSwitch = () => {
    setDark((prev) => !prev);
  };

  const handleShowCartModal = () => {
    if (cart.length > 0) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  };
  const handleHideCartModal = () => {
    setShowCart(false);
  };
  return (
    <header>
      {showCart && <CartModal onHideCartModal={handleHideCartModal} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="#">
          <img src={logoImage} width="139" height="26" alt="Cine Rental" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <button className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
              <img src={ringImage} width="24" height="24" alt="Ring" />
            </button>
          </li>
          <li>
            <button
              onClick={handleThemeSwitch}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            >
              {dark ? (
                <img src={sunImage} width="24" height="24" alt="Moon" />
              ) : (
                <img src={moonImage} width="24" height="24" alt="Sun" />
              )}
            </button>
          </li>
          <li>
            <button
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={handleShowCartModal}
            >
              <img src={cartImage} width="24" height="24" alt="Cart" />
              {cart.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[22px] w-6 h-6 bg-primary text-white text-center">
                  {cart.length}
                </span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
