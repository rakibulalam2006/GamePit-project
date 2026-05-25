import { useLoaderData } from "react-router";
import Banner from "./Banner";
import Card from "./Card";

const Home = () => {

  const data = useLoaderData();

  const topRated = [...data].sort((a, b) => b.ratings - a.ratings).slice(0, 4);

    return (
      <div>
        <Banner></Banner>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {topRated.map((game) => (
            <Card key={game.id} item={game}></Card>
          ))}
        </div>
      </div>
    );
};

export default Home;