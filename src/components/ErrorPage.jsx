import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-2">Page Not Found</p>

      <Link to="/" className="mt-5 text-blue-500 underline">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
