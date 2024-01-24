import movieImage from '../assets/movie-1.png';
import tagImage from '../assets/tag.svg';
import Rating from './Rating';
const MovieCard = () => {
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <img className="w-full object-cover" src={movieImage} alt="Movie Image" />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">Iron Man</h3>
        <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
        <Rating />
        <a
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href="#"
        >
          <img src={tagImage} alt="" />
          <span>$100 | Add to Cart</span>
        </a>
      </figcaption>
    </figure>
  );
};

export default MovieCard;
