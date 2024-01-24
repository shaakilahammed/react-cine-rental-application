import Footer from '../components/Footer';
import MovieList from '../components/MovieList';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Trending = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <div className="content">
            <MovieList />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Trending;
