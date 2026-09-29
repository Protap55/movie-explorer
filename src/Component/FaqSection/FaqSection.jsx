const FaqSection = () => {
  const faqs = [
    {
      question: "What is Movie Explorer?",
      answer:
        "Movie Explorer is a web application where you can explore movies and TV shows, check their ratings, genres, release dates, and other details.",
    },
    {
      question: "Where does the movie information come from?",
      answer:
        "Movie Explorer uses the TVMaze API to fetch movie and TV show information.",
    },
    {
      question: "Can I search for a specific movie?",
      answer:
        "Yes. You can use the search box to quickly find your favorite movies or TV shows.",
    },
    {
      question: "Can I see movie details?",
      answer:
        "Yes. You can open a movie to see additional information such as rating, language, genres, status, and release date.",
    },
    {
      question: "Is Movie Explorer free to use?",
      answer: "Yes. Movie Explorer is completely free to use.",
    },
  ];
  return (
    <div>
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          {/* Section Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Frequently Asked
              <span className="text-secondary"> Questions</span>
            </h2>
            <p className="mt-3 text-base-content/70">
              Find answers to some common questions about Movie Explorer.
            </p>
          </div>
          {/* FAQ */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-arrow border border-base-300 bg-base-100"
              >
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-semibold">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/70">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
