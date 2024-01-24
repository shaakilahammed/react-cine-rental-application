import commingSoonImage from '../assets/icons/commingSoon.svg';
import favouriteImage from '../assets/icons/favourite.svg';
import newReleaseImage from '../assets/icons/newRelease.svg';
import trendingImage from '../assets/icons/trending.svg';
import watchLaterImage from '../assets/icons/watchLater.svg';
const Sidebar = () => {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <img src={trendingImage} width="24" height="24" alt="Trending" />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={newReleaseImage} width="24" height="24" alt="" />
            <span>New Releases</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={commingSoonImage} width="24" height="24" alt="" />
            <span>Coming Soon</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={favouriteImage} width="24" height="24" alt="" />
            <span>Favourites</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img src={watchLaterImage} width="24" height="24" alt="" />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
