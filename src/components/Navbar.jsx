import { NavLink } from "react-router";

import MyLink from "./MyLink";

import { useContext } from "react";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, setUser, signOutFunc, loading } = useContext(AuthContext);
  // console.log(user);

  const handleSignOut = () => {
    signOutFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  // console.log(loading)
  return (
    <div className="bg-slate-100f py-1 border-b border-b-slate-300 ">
      <div className="flex items-center justify-between">
        <figure>
          <img src="" className="w-14" />
        </figure>
        <ul className="flex items-center gap-4">
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/allGames"}>App</MyLink>
          </li>
          {user ? (
              <li>
                <MyLink to={"/profile"}>Profile</MyLink>
              </li>
          ) : (
            ""
          )}
        </ul>

        {loading ? (
          <ClockLoader color="#e74c3c" />
        ) : user ? (
          <div className="text-center space-y-3">
            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
            {/* For TSX uncomment the commented types below */}
            <button
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
            >
              <img
                src={user?.photoURL || "https://via.placeholder.com/100"}
                alt="user"
                className="w-12 h-12 rounded-full object-cover border"
              />
            </button>

            <div
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
              }
            >
              <h2 className="text-xl font-semibold mt-2">
                {user?.displayName}
              </h2>
              <p className=" mt-2">{user?.email}</p>
              <button onClick={handleSignOut} className="my-btn mt-2">
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
            <NavLink to={"/login"}>Sign in</NavLink>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
