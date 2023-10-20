import { BiLogoGoogle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-info">Login</button>
                </div>
              </form>

              <div className="px-8 pb-8">
                <p className="text-center mb-5">
                  If you are new, Please {" "}
                  <Link
                    className="text-blue-500 font-bold underline"
                    to="/register"
                  >
                    Register
                  </Link>
                </p>
                <div className="flex justify-center">
                  <button className="btn btn-outline btn-info">
                    <BiLogoGoogle className="text-2xl" />
                    Login With Google
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
