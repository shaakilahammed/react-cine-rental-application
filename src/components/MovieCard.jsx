import tagImage from '../assets/tag.svg';
import { getImageUrl } from '../utils/getImageUrl';
import Rating from './Rating';
const MovieCard = ({ movie, onShowModal, onAddToCart }) => {
  return (
    <figure
      onClick={() => onShowModal(movie)}
      className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl cursor-pointer"
    >
      <img
        className="h-[360px] w-full object-cover"
        src={getImageUrl(movie.cover)}
        alt={movie.title}
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{movie.title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
        <Rating value={movie.rating} />
        <button
          onClick={(e) => onAddToCart(e, movie)}
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
        >
          <img src={tagImage} alt="tag" />
          <span>${movie.price} | Add to Cart</span>
        </button>
      </figcaption>
    </figure>
  );
};

export default MovieCard;
