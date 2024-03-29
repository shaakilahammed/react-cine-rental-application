import Layout from '../Layout/Layout';
import MovieList from '../components/MovieList';
import { getNewReleaseMovies } from '../data/bulk-movies';

const NewRelease = () => {
  const movies = getNewReleaseMovies();

  return (
    <Layout>
      <MovieList movies={movies} />
    </Layout>
  );
};

export default NewRelease;
