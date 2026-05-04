import { useLoaderData } from "react-router";
import Banner from "./Banner";
import Card from "./Card";

const Home = () => {

  const data = useLoaderData();

    return (
      <div>
        <Banner></Banner>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {data.slice(0, 3).map((item) => (
            <Card key={item.id} item={item}></Card>
          ))}
        </div>
      </div>
    );
};

export default Home;