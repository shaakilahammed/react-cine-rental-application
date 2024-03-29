import Layout from '../Layout/Layout';
import MovieList from '../components/MovieList';
import { getComingSoonMovies } from '../data/bulk-movies';

const ComingSoon = () => {
  const movies = getComingSoonMovies();

  return (
    <Layout>
      <MovieList movies={movies} />
    </Layout>
  );
};

export default ComingSoon;
