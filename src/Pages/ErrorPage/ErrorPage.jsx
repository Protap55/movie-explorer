import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-center">
      <p className="text-8xl font-extrabold text-secondary sm:text-9xl">404</p>

      <h1 className="mt-4 text-2xl font-bold sm:text-3xl">Page Not Found</h1>

      <Link to="/" className="btn btn-primary mt-6">
        Back to Home
      </Link>
    </main>
  );
};

export default ErrorPage;
