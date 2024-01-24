import CartProvider from './contexts/CartContext';
import { useRoute } from './contexts/RouteContext';
import ThemeProvider from './contexts/ThemeContext';
import ComingSoon from './pages/ComingSoon';
import NewRelease from './pages/NewRelease';
import Trending from './pages/Trending';

function App() {
  const { route } = useRoute();
  let page;
  switch (route) {
    case 'coming-soon': {
      page = <ComingSoon />;
      break;
    }
    case 'new-releases': {
      page = <NewRelease />;
      break;
    }
    case 'favourites': {
      page = <Trending />;
      break;
    }
    case 'watch-later': {
      page = <Trending />;
      break;
    }
    default: {
      page = <Trending />;
    }
  }

  return (
    <ThemeProvider>
      <CartProvider>{page}</CartProvider>
    </ThemeProvider>
  );
}

export default App;
