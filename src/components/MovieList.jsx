import { useState } from 'react';
import { toast } from 'react-toastify';
import { useCart } from '../contexts/CartContext';
import MovieCard from './MovieCard';
import MovieDetailsModal from './MovieDetailsModal';

const MovieList = ({ movies }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { cart, dispatch } = useCart();

  const handleAddToCart = (e, movie) => {
    e.stopPropagation();
    const isExist = cart.find((item) => item.id === movie.id);
    if (isExist) {
      toast.error(`${movie.title} has been already on the cart`);
    } else {
      dispatch({
        type: 'ADD_TO_CART',
        payload: movie,
      });

      toast.success(`${movie.title} is added to the cart`);
    }
  };

  const handleShowModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          onHideModal={handleHideModal}
          movie={selectedMovie}
          onAddToCart={handleAddToCart}
        />
      )}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onShowModal={handleShowModal}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
};

export default MovieList;
