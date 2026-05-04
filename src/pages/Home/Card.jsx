import { NavLink } from "react-router";


const Card = ({item}) => {

  
    return (
      <div>
        <div
          key={item.id}
          className="max-w-sm bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:scale-105 transition-transform duration-300"
        >
          {/* Game Image */}
          <div className="relative">
            <img
              src={item.coverPhoto}
              alt="Game thumbnail"
              className="w-full max-h-64 object-cover"
            />
            {/* Optional: Badge or tag */}
            
          </div>
          {/* Card Content */}
          <div className="p-5">
            {/* Game Name */}
            <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>

            
            

            {/* Additional Info: Category / Size */}
            <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
              <span>{item.category}</span>
              <span>{item.appSize}</span>
            </div>

            {/* Button */}
            <NavLink to={`/game/${item.id}`}>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-2.5 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg ">
                View Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default Card;