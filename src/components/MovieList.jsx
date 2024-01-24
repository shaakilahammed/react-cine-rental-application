import MovieCard from './MovieCard';

const MovieList = () => {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
      <MovieCard />
    </div>
  );
};

export default MovieList;
