import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import SpotlightCard from "./UI/SpotlightCard";
import ShinyText from "./UI/ShinyText";

const CoffeeCard = ({ coffee, coffeeData, setCoffeeData }) => {
  const { photo, name, quantity, supplier, price, _id } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete the coffee from db
        fetch(
          `https://coffee-shop-server-plum-theta.vercel.app/coffees/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("after delete data", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              // remove coffee from state /UI
              const remainingCoffees = coffeeData.filter(
                (coffee) => coffee._id !== id
              );
              setCoffeeData(remainingCoffees);
            }
          });
      }
    });
  };
  return (
    <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.25)">
      <div className="card rounded-2xl px-5 py-6 justify-between items-center">
        <figure>
          <img
            className="rounded-2xl w-full h-[200px] object-cover px-2"
            src={photo}
            alt="coffee-photo"
          />
        </figure>
        <div className="space-y-5">
          <h2 className="card-title text-2xl">Name: {name}</h2>
          <div className="text-xl space-y-2">
            <p>Supplier: {supplier}</p>
            <p>Quantity: {quantity}</p>
            <p>Price: {price} TK</p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <div className="space-x-2 py-5">
            <Link to={`/coffees/${_id}`}>
              <ShinyText
                text="view"
                disabled={false}
                speed={3}
                className="custom-class border px-4 py-2 rounded text-xl"
              />
            </Link>
            <Link to={`/updateCoffee/${_id}`}>
              <ShinyText
                text="Edit"
                disabled={false}
                speed={3}
                className="custom-class border px-4 py-2 rounded text-xl"
              />
            </Link>
            <button onClick={() => handleDelete(_id)}>
              <ShinyText
                text="Delete"
                disabled={false}
                speed={3}
                className="custom-class border px-4 py-2 rounded text-xl"
              />
            </button>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default CoffeeCard;
