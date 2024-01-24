import commingSoonImage from '../assets/icons/commingSoon.svg';
import favouriteImage from '../assets/icons/favourite.svg';
import newReleaseImage from '../assets/icons/newRelease.svg';
import trendingImage from '../assets/icons/trending.svg';
import watchLaterImage from '../assets/icons/watchLater.svg';
import { useRoute } from '../contexts/RouteContext';
const Sidebar = () => {
  const { route, setRoute } = useRoute();

  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <button
            className={`flex w-full items-center space-x-2 px-5 py-3.5 rounded-lg ${
              route === 'trending' && 'bg-primary text-black'
            }`}
            onClick={() => setRoute('trending')}
          >
            <img src={trendingImage} width="24" height="24" alt="Trending" />
            <span>Trending</span>
          </button>
        </li>
        <li>
          <button
            className={`flex w-full items-center space-x-2 px-5 py-3.5 rounded-lg ${
              route === 'new-releases' && 'bg-primary text-black'
            }`}
            onClick={() => setRoute('new-releases')}
          >
            <img
              src={newReleaseImage}
              width="24"
              height="24"
              alt="New Release"
            />
            <span>New Releases</span>
          </button>
        </li>
        <li>
          <button
            className={`flex w-full items-center space-x-2 px-5 py-3.5 rounded-lg ${
              route === 'coming-soon' && 'bg-primary text-black'
            }`}
            onClick={() => setRoute('coming-soon')}
          >
            <img
              src={commingSoonImage}
              width="24"
              height="24"
              alt="Coming Soon"
            />
            <span>Coming Soon</span>
          </button>
        </li>
        <li>
          <button
            className={`flex w-full items-center space-x-2 px-5 py-3.5 rounded-lg ${
              route === 'favourites' && 'bg-primary text-black'
            }`}
            onClick={() => setRoute('favourites')}
          >
            <img src={favouriteImage} width="24" height="24" alt="Favourites" />
            <span>Favourites</span>
          </button>
        </li>
        <li>
          <button
            className={`flex w-full items-center space-x-2 px-5 py-3.5 rounded-lg ${
              route === 'watch-later' && 'bg-primary text-black'
            }`}
            onClick={() => setRoute('watch-later')}
          >
            <img
              src={watchLaterImage}
              width="24"
              height="24"
              alt="Watch Later"
            />
            <span>Watch Later</span>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
