import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const singleCoffeeData = useLoaderData();
  const { details, name, photo, price, quantity, supplier, taste } =
    singleCoffeeData;
  return (
    <div className="border-4 border-gray-400 space-y-2 my-20 w-3/10 mx-auto rounded-2xl px-12 py-6 text-center bg-slate-50">
      <img className="border-2 rounded-4xl mx-auto shadow-2xl" src={photo} alt="" />
      <h1 className="text-2xl font-semibold underline">{name}</h1>
      <div className="text-xl space-y-2">
        <p>Details: {details}</p>
        <p>Price: {price} TK</p>
        <p>Total: {quantity}</p>
        <p>Supplier: {supplier}</p>
        <p>taste: {taste}</p>
      </div>
    </div>
  );
};

export default CoffeeDetails;
