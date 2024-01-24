import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import MovieCard from './MovieCard';
import MovieDetailsModal from './MovieDetailsModal';

const MovieList = ({ movies }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (e, movie) => {
    e.stopPropagation();
    const isExist = cart.find((item) => item.id === movie.id);
    if (isExist) {
      console.error(`${movie.title} is already added on the cart`);
    } else {
      const nextCart = [...cart, { ...movie }];
      setCart(nextCart);
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
