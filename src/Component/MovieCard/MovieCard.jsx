const MovieCard = ({ movieData, setModalData }) => {
  return (
    <article className="card h-full bg-base-100 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Poster */}
      <figure className="h-64 bg-base-200 sm:h-72">
        {movieData.image?.medium ? (
          <img
            src={movieData.image.medium}
            alt={`${movieData.name} poster`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-base-content/60">
            No poster available
          </div>
        )}
      </figure>

      {/* Content */}
      <div className="card-body gap-3 p-4 sm:p-5">
        <h2 className="card-title line-clamp-1">{movieData.name}</h2>

        {/* Rating + Year */}
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="badge badge-warning">
            ⭐ {movieData.rating?.average ?? "N/A"}
          </span>

          <span className="badge badge-outline">
            {movieData.premiered
              ? new Date(movieData.premiered).getFullYear()
              : "Year N/A"}
          </span>
        </div>

        {/* Language */}
        <p className="text-sm text-base-content/70">
          {movieData.language || "Language N/A"}
        </p>

        {/* Details Button */}
        <div className="card-actions mt-auto">
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={() => setModalData(movieData)}
          >
            See Details
          </button>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
