import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const { 
    signinWithEmailPasswordFunc,
    setUser,
  } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("login function entered", {
      email,
      password,
    });
    signinWithEmailPasswordFunc(email, password)
    .then((res) =>{
       setUser(res.user);
       toast.success("Login successful");
       navigate("/");
    })
    .catch((err) =>{
      toast.error(err.message);
      console.log(err);
    })
   
  
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-[350px] border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-white text-sm">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-white text-sm">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm text-white">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-pink-500" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Forgot?
            </a>
          </div>

          {/* Button */}
          <button className="w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:scale-105 transition">
            Login
          </button>

          {/* Divider */}
          <div className="text-center text-white text-sm">or</div>

          {/* Social Login */}
          <button className="w-full py-2 rounded-lg bg-white text-gray-700 font-semibold hover:bg-gray-200 transition">
            Continue with Google
          </button>

          {/* Signup */}
          <p className="text-center text-sm text-white mt-4">
            Don't have an account?{" "}
            <Link to={"/register"} className="font-semibold underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
