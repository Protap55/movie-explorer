const MovieCard = ({ show, onDetails }) => {
  return (
    <article className="card h-full bg-base-100 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <figure className="h-64 bg-base-200 sm:h-72">
        {show.image?.medium ? (
          <img
            src={show.image.medium}
            alt={`${show.name} poster`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-base-content/60">
            No poster available
          </div>
        )}
      </figure>

      <div className="card-body gap-3 p-4 sm:p-5">
        <h2 className="card-title line-clamp-1">{show.name}</h2>

        <div className="flex flex-wrap gap-2 text-sm">
          <span className="badge badge-warning">
            ⭐ {show.rating?.average ?? "N/A"}
          </span>

          <span className="badge badge-outline">
            {show.premiered
              ? new Date(show.premiered).getFullYear()
              : "Year N/A"}
          </span>
        </div>

        <p className="text-sm text-base-content/70">
          {show.language || "Language N/A"}
        </p>

        <div className="card-actions mt-auto">
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={() => onDetails(show)}
          >
            See Details
          </button>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
