import moonImage from '../assets/icons/moon.svg';
import logoImage from '../assets/logo.svg';
import ringImage from '../assets/ring.svg';
import cartImage from '../assets/shopping-cart.svg';
const Navbar = () => {
  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logoImage} width="139" height="26" alt="Cine Rental" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ringImage} width="24" height="24" alt="Ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={moonImage} width="24" height="24" alt="Moon" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={cartImage} width="24" height="24" alt="Cart" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
