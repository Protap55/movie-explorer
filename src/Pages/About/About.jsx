import React from "react";
const About = () => {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="mb-6 text-center text-3xl font-bold sm:text-4xl">
        About <span className="text-secondary">Us</span>
      </h1>

      <div className="rounded-2xl bg-base-200 p-6 sm:p-8">
        <p className="mb-4 leading-7 text-base-content/80">
          Welcome to our show explorer. Browse shows, search by title, and view
          show details in one place.
        </p>

        <p className="leading-7 text-base-content/80">
          This project is built with React, React Router, and the TVMaze API.
        </p>
      </div>
    </section>
  );
};

export default About;
