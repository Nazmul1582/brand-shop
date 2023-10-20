import { Link, useRouteError } from "react-router-dom";

const NoFound = () => {
  const error = useRouteError();

  return (
    <section className="min-h-screen container mx-auto grid place-items-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Oops!</h2>
        <p className="italic text-gray-400 my-5">
          {error.status} {error.statusText}
        </p>
        <Link to="/">
          <button className="btn btn-info">Go Home</button>
        </Link>
      </div>
    </section>
  );
};

export default NoFound;
