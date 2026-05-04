import { Link } from "react-router";

const Register = () => {
 
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">

          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Create Account
          </h2>

          <form className="space-y-4">

            {/* Name */}
            <div>
              <label className="text-white text-sm">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>
            {/* photoUrl */}
            <div>
              <label className="text-white text-sm">Photo</label>
              <input
                type="text"
                placeholder="Enter your Photo"
                className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-white text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-white text-sm">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
              
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-white text-sm">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            {/* Button */}
            <button className="w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:scale-105 transition">
              Register
            </button>

            {/* Login link */}
            <p className="text-center text-sm text-white mt-4">
              Already have an account?{" "}
              <Link to={"/login"} className="font-semibold underline">
                Login
              </Link>
            </p>

          </form>

        </div>
      </div>
  
  );
};

export default Register;