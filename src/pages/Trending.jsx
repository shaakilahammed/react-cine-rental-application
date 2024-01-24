import Footer from '../components/Footer';
import MovieList from '../components/MovieList';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { getTrendingMovies } from '../data/movies';

const Trending = () => {
  const movies = getTrendingMovies();

  return (
    <>
      <Navbar />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <div className="content">
            <MovieList movies={movies} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Trending;
