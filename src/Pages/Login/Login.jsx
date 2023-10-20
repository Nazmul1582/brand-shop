import { useContext } from "react";
import { BiLogoGoogle } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { login, loginWithGoogle } = useContext(AuthContext);

    const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      if(password.length < 6){
        Swal.fire(
            "Oops...",
            "Your password must be 6 characters or longer!",
            "error"
        )
        return;
      }
  
      login(email, password)
        .then(() => {
          Swal.fire("Good job!", "Logged-in successfully!", "success");
          form.reset();
        })
        .catch((error) => {
          Swal.fire(
              'Oops...',
              `${error}!`,
              'error'
            )
        });
    };

    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(() => {
            Swal.fire("Good job!", "Logged-in successfully!", "success");
          })
        .catch((error) => {
            Swal.fire(
                'Oops...',
                `${error}!`,
                'error'
              )
          });
    }

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Welcome to our Brand Shop. If you are already register our website, you can now sign in or log in with your email and password which you have provided to register.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name='email'
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
                    name="password"
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
                  <button onClick={handleGoogleLogin} className="btn btn-outline btn-info">
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
