import { IoIosHeart } from 'react-icons/io';
import { LuClock2 } from 'react-icons/lu';
import tagImage from '../assets/tag.svg';
import { useCart } from '../contexts/CartContext';
import Rating from './Rating';
import Tag from './Tag';

const MovieCard = ({
  movie,
  onShowModal,
  onAddToCart,
  onFavourite,
  onWatchLater,
}) => {
  const { cart } = useCart();
  const isExistToTheCart = cart.find((item) => item.id === movie.id);
  return (
    <figure
      onClick={() => onShowModal(movie)}
      className="flex flex-col justify-between p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl cursor-pointer"
    >
      <img
        className="h-[360px] w-full object-cover"
        src={movie.posterUrl}
        alt={movie.title}
      />
      <figcaption className="pt-4">
        <Tag tags={movie.tags} />

        <h3 className="text-xl mb-1">{movie.title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">{movie.genres.toString()}</p>
        <Rating value={movie.rating} />
        <div className="flex gap-1">
          <button
            onClick={(e) => onAddToCart(e, movie)}
            className="grow bg-primary rounded-lg py-2 px-3 flex items-center justify-center gap-2 text-[#171923] font-semibold text-xs"
          >
            <img src={tagImage} alt="tag" />
            <span>
              ${movie.price} | {isExistToTheCart ? 'Added' : 'Add to Cart'}
            </span>
          </button>
          <button
            onClick={(e) => onFavourite(e, movie)}
            className="grow-0 bg-primary rounded-lg py-2 px-3 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          >
            <IoIosHeart size={20} />
          </button>
          <button
            onClick={(e) => onWatchLater(e, movie)}
            className="grow-0 bg-primary rounded-lg py-2 px-3 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          >
            <LuClock2 size={20} />
          </button>
        </div>
      </figcaption>
    </figure>
  );
};

export default MovieCard;
