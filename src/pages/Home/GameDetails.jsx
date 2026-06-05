import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";

const GameDetails = () => {

  // dynamic Title
  useEffect(() => {
    document.title = "Game Details - GamePit";
  }, []);

    const data = useLoaderData();
    const {id} = useParams();
    
  
    // console.log(data)
    const game = data.find((item)=>item.id === Number(id));
    if (!game) {
      return <h1>Game not found</h1>;
    }
    
    const handleInstall = () =>{
      
      const installedGames = JSON.parse(localStorage.getItem("installedGames")) || [];
      
      if(!installedGames.some((g)=>g.id === game.id)){
        installedGames.push(game);
        localStorage.setItem("installedGames", JSON.stringify(installedGames));
        toast.success("Game installed successfully!");
      }else{
        toast.error("Game is already installed.");
      }
    }
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-xl">
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="w-full h-96 object-cover rounded-lg mb-4"
          />

          <h1 className="text-3xl font-bold mb-2">{game.title}</h1>

          <p className="text-gray-400 mb-4">
            {game.description || "No description available"}
          </p>

          <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-lg">⭐</span>
                <span className="text-white font-semibold">{game.ratings}</span>
                <span className="text-gray-400 text-sm">
                  {game.totalReviews} reviews
                </span>
              </div>

              
              <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span className="text-white text-sm font-medium">
                  {game.installs}
                </span>
              </div>
            </div>

          <div className="flex justify-between text-sm text-gray-300 mb-4">
            <span>Category: {game.category}</span>
            <span>Size: {game.appSize}</span>
          </div>

          <button 
          
          onClick={handleInstall} 
          className="bg-green-600 px-5 py-2 rounded">
            Download Now
          </button>
        </div>
      </div>
    );
};

export default GameDetails;