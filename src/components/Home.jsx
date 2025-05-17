import React from "react";
import { useLoaderData } from "react-router";

const Home = () => {
  const coffeeData = useLoaderData();
  console.log(coffeeData);
  return <div></div>;
};

export default Home;
