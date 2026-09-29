import React from "react";

const MovieStatistics = () => {
  const statistics = [
    {
      number: "10K+",
      title: "Movies & Shows",
      description: "Explore a huge collection",
    },
    {
      number: "50+",
      title: "Genres",
      description: "Different genres to explore",
    },
    {
      number: "20+",
      title: "Languages",
      description: "Shows from around the world",
    },
    { number: "9.5", title: "Top Rating", description: "Highly rated shows" },
  ];
  return (
    <div>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          {/* Heading */}{" "}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Movie <span className="text-secondary">Statistics</span>
            </h2>
            <p className="mt-3 text-base-content/70">
              Explore some interesting numbers from our movie collection.
            </p>
          </div>
          {/* Statistics */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl border border-base-300 bg-base-100 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-4xl font-bold text-secondary">
                  {stat.number}
                </h3>
                <p className="mt-2 text-lg font-semibold">{stat.title}</p>
                <p className="mt-1 text-sm text-base-content/60">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieStatistics;
