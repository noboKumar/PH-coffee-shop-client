import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import BlurText from "./UI/BlurText";
import Squares from "./UI/Squares";

const Home = () => {
  const initialCoffee = useLoaderData();
  const [coffeeData, setCoffeeData] = useState(initialCoffee);
  return (
    <div className="relative overflow-hidden">
      {/* Animated Squares Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>

      <div className="w-11/12 mx-auto">
        {/* Foreground Content */}
        <BlurText
          text="Welcome to Coffee Shop"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-7xl my-8 font-bold"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-20">
          {coffeeData.map((coffee) => (
            <CoffeeCard
              coffee={coffee}
              key={coffee._id}
              coffeeData={coffeeData}
              setCoffeeData={setCoffeeData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
