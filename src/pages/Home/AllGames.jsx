import { useLoaderData } from "react-router";
import Card from "./Card";

const AllGames = () => {
    const data = useLoaderData();
    console.log(data)
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 my-5 p-2">
        {data.map((item) => (
          <Card key={item.id} item={item}></Card>
        ))}
      </div>
    );
};

export default AllGames;