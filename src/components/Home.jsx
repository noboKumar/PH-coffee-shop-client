import React from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const coffeeData = useLoaderData();
  console.log(coffeeData);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-20">
        {coffeeData.map((coffee) => (
          <CoffeeCard coffee={coffee} key={coffee._id}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
