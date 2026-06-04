import { useState, useEffect, useContext } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";
import { MdModeEdit } from "react-icons/md";

const Profile = () => {
  const [games, setGames] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    const installedGames =
      JSON.parse(localStorage.getItem("installedGames")) || [];

    setGames(installedGames);
  }, []);

  const handleDelete = (id) => {
    const updatedGames = games.filter((game)=>game.id !== id);
    setGames(updatedGames);
    localStorage.setItem("installedGames",JSON.stringify(updatedGames));
  }

  
  return (
    <div className="p-6">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>

        <div className="border p-5 rounded-lg">
          <Link className="flex justify-end" to="/update-profile">
            <MdModeEdit size={30} />
          </Link>
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-28 h-28 rounded-full mx-auto"
          />
          <div>
            <h3 className="font-semibold">Name</h3>
            <p className="text-2xl mt-3"> {user?.displayName}</p>
          </div>
          <div className="border text-gray-500"></div>
          <div>
            <h3 className="font-semibold mt-2">Email</h3>
            <p>{user?.email}</p>
          </div>
          <div className="border text-gray-500"></div>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-6">Installed Games</h1>

      <div className="grid grid-cols-1 gap-5">
        {games.map((game) => (
          <div
            key={game.id}
            className=" flex justify-between items-center border p-4 rounded-lg"
          >
            <div className="flex items-center gap-5">
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-14 h-14 object-cover rounded"
              />
              <h2 className="text-xl font-semibold mt-3">{game.title}</h2>
            </div>
            <div className="flex justify-center items-center gap-5">
              <p>{game.category}</p>
              <p>⭐ {game.ratings}</p>
            </div>
            <div>
              <RiDeleteBinLine
                size={30}
                onClick={() => handleDelete(game.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
