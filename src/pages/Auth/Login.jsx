import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const [show, setShow] = useState(false);

  const {
    signinWithEmailPasswordFunc,
    setUser,
    signinWithGoogleFunc,
    signinWithGithubFunc,
    setLoading,
    signOutFunc,
    sendPassResetEmailFunc,
  } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log("login function entered", {
    //   email,
    //   password,
    // });
    signinWithEmailPasswordFunc(email, password)
      .then((res) => {
        if (!res.user.emailVerified) {
          signOutFunc().then(() => {
            setLoading(false);
            toast.error("your email is not verified.");
          });
          return;
        }
        setUser(res.user);
        toast.success("Login successful");
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
        toast.error(err.message);
      });
    e.target.reset();
  };
  //  google signin function
  const handleGoogleSignin = () => {
    signinWithGoogleFunc()
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        toast.success("Google login successful");
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
        toast.error(err.message);
      });
  };

  // github signin function
  const handleGithubSignIn = () => {
    signinWithGithubFunc()
      .then((res) => {
        setUser(res.user);
        setLoading(false);
        toast.success("Github login successful");
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
        toast.error(err.message);
      });
  };

  // reset password
  const handlePassReset = (email) => {
    sendPassResetEmailFunc(email)
      .then((res) => {
        console.log(res);
        setLoading(false);
        toast.success("check your email to reset password");
      })
      .catch((e) => {
        toast.error(e.message);
      });
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
              ref={emailRef}
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-white text-sm">Password</label>
            <input
              name="password"
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-purple-400"
              required
            />

            <span
              onClick={() => setShow(!show)}
              className="absolute right-3 top-10 cursor-pointer z-50"
            >
              {show ? <VscEyeClosed /> : <VscEye />}
            </span>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm text-white">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-pink-500" />
              Remember me
            </label>
            <Link onClick={() => handlePassReset(emailRef.current.value)}>
              Forgot?
            </Link>
          </div>

          {/* Button */}
          <button className="w-full py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:scale-105 transition">
            Login
          </button>

          {/* Divider */}
          <div className="text-center text-white text-sm">or</div>

          {/* Social Login */}
          <button
            onClick={handleGoogleSignin}
            type="button"
            className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          {/* Github Signin */}
          <button
            onClick={handleGithubSignIn}
            type="button"
            className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <img
              src="https://img.icons8.com/fluency/48/github.png"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Github
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
