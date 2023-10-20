import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/.test(password)){
        Swal.fire(
            "Oops...",
            "Password must be contains a uppercase and a special character and must be 6 characters or longer!",
            "error"
        )
        return;
      }

    createUser(email, password, name)
      .then(() => {
        Swal.fire("Good job!", "User created successfully!", "success");
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
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <p className="py-6">
                Welcome to our website. If you want to explore more, you can
                register. And If you want to buy any product from here, you have
                to register first.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
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
                  <button className="btn btn-info">Register</button>
                </div>
              </form>

              <div className="px-8 pb-8">
                <p className="text-center mb-5">
                  If you already have an account, Please{" "}
                  <Link
                    className="text-blue-500 font-bold underline"
                    to="/login"
                  >
                    login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
