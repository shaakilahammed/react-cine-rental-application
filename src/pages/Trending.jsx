import Layout from '../Layout/Layout';
import MovieList from '../components/MovieList';
import { getTrendingMovies } from '../data/bulk-movies';

const Trending = () => {
  const movies = getTrendingMovies();

  return (
    <Layout>
      <MovieList movies={movies} />
    </Layout>
  );
};

export default Trending;
