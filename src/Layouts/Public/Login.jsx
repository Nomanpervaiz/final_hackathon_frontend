import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";


function Login() {
  return (
    <section className="bg-white h-screen ">
      <div className="container mx-auto sm:py-6 h-screen flex items-center">
        <div className="sm:border px-4 flex flex-col justify-center items-center gap-6 border-gray-100 h-full w-full sm:w-4/5 md:w-4/5 lg:w-3/5 mx-auto shadow-md sm:px-0">
          <h1 className="font-bold text-3xl sm:text-2xl md:text-4xl text-blue-500 text-center">
            Login
          </h1>
          <LoginForm />

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-2 text-center w-full sm:w-full lg:w-full justify-center">
            <span>Don't Have an account ? </span>
            <Link to="/register" className="text-cyan-600 hover:underline">
              Register here
            </Link>
          </div>

          {/* Account Benefits */}
          <div className="bg-gray-100 p-4 text-xs rounded-sm sm:w-3/4 lg:w-3/5">
            <p>
              <span className="font-semibold text-blue-600">
                Account Benefits:{" "}
              </span>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nisi illo. Laborum at atque assumenda aliquid voluptas non velit. Architecto?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
