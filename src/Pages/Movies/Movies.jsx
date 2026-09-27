import useMoviesData from "../../hooks/useMoviesData";
import MovieCard from "../../Component/MovieCard/MovieCard";
import Loader from "../../Component/Loader/Loader";
import Modal from "../../Component/Modal/Modal";
import { useState } from "react";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [modalData, setModalData] = useState(null);
  const { moviesData, isLoading } = useMoviesData();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchItem = moviesData.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-center text-3xl font-bold sm:text-4xl">
        Explore <span className="text-secondary">Shows</span>
      </h1>

      <label className="input mx-auto flex w-full max-w-md items-center">
        <input
          type="search"
          value={search}
          onChange={handleSearch}
          placeholder="🔍 Search for a show..."
          aria-label="Search shows"
        />
      </label>

      {isLoading ? (
        <Loader />
      ) : searchItem.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 py-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {searchItem.map((movieData) => (
            <MovieCard
              key={movieData.id}
              movieData={movieData}
              setModalData={setModalData}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-60 flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 text-6xl">🎬</div>

          <h2 className="text-2xl font-bold">No Movies Found</h2>

          <p className="mt-2 max-w-md text-base-content/60">
            We couldn't find any shows matching your search.
          </p>
        </div>
      )}

      {modalData && <Modal modalData={modalData} setModalData={setModalData} />}
    </section>
  );
};

export default Movies;
