import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Register = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const {
     createUser,
     updateProfileFunc,
     sendEmailVerificationFunc,
     signOutFunc,
     setUser,
      setLoading,
    } = useContext(AuthContext);


  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const displayName = form.name.value;
    const photoURL = form.photoUrl.value;
    const confirmPassword = form.confirmPassword.value;
    console.log("signup function entered", {
      email,
      password,
    });

    // password validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
    if (!passwordPattern.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and include uppercase, lowercase, and a special character.",
      );
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        //update profile
        updateProfileFunc(displayName, photoURL)
          .then((res) => {
            console.log(res);
            sendEmailVerificationFunc()
              .then((res) => {
                console.log(res);
                setLoading(false);
                //signout user
                signOutFunc().then(() => {
                  toast.success(
                    "Signup successful.Check our email to active your account",
                  );
                  setUser(null);
                  form.reset();
                  navigate("/login");
                });
              })
              .catch((e) => {
                //  console.log(e);
                setLoading(false);
                toast.error(e.message);
              });
            // console.log(res);
          })
          .catch((e) => {
            // console.log(e)
            setLoading(false);
            toast.error(e.message);
          });

        e.target.reset();
      })
      .catch((err) => {
        setLoading(false);
        if (err.code == "auth/email-already-in-use") {
          toast.error("User Already EXist in this site");
        } else if (err.code === "auth/invalid-email") {
          toast.error("Invalid email address");
        } else if (err.code === "auth/weak-password") {
          toast.error("Password must be at least 6 characters");
        } else if (err.code === "auth/network-request-failed") {
          toast.error("Check your internet connection");
        } else if (err.code === "auth/operation-not-allowed") {
          toast.error("Email/password signup is disabled");
        } else {
          toast.error("Signup failed. Try again!");
        }
        return;
      });
  };

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-white text-sm">Name</label>
            <input
              name="name"
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
              name="photoUrl"
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
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-white text-sm">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-3 top-10 cursor-pointer z-50"
            >
              {show ? <VscEyeClosed /> : <VscEye />}
            </span>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-white text-sm">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
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