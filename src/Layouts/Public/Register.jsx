import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import RegisterForm from "../../components/RegisterForm";

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  return (
    <section className="bg-white ">
      <div className="container mx-auto sm:py-6 h-screen flex items-center">
        <div className="border p-10 lg:p-20 flex flex-col h-full justify-center items-center gap-6 border-gray-100 w-full sm:w-4/5 md:w-3/5 mx-auto shadow-md sm:p-8">
          <h1 className="font-bold text-3xl sm:text-4xl text-blue-600 text-center">
            Register
          </h1>
          <RegisterForm/>

       
          <div className="flex flex-col sm:flex-row gap-2 text-center w-full sm:w-full lg:w-full justify-center">
            <span>Already have an account? </span>
            <Link to="/login" className="text-cyan-600 hover:underline">
              Login
            </Link>
          </div>

          {/* Signup Benefits */}
          <div className="bg-gray-100 p-4 text-xs rounded-sm sm:w-3/4 lg:w-3/5">
            <p>
              <span className="font-semibold text-green-600">
                Signup Benefits:{" "}
              </span>
              Join Saylani Microfinance to access features like loan applications, tracking your loan status, managing repayments, and accessing financial advisory services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupPage;
