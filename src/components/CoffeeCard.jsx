import React, { useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import SpotlightCard from "./UI/SpotlightCard";
import ShinyText from "./UI/ShinyText";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const CoffeeCard = ({ coffee, coffeeData, setCoffeeData }) => {
  const { photo, name, quantity, supplier, price, _id } = coffee;
  const [isOpen, setIsOpen] = useState(false);
  const [quantityValue, setQuantityValue] = useState(1);
  const totalBill = price * quantityValue;

  const handleIncrement = () => {
    if (quantityValue < quantity) {
      setQuantityValue((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantityValue > 1) {
      setQuantityValue((prev) => (prev -= 1));
    }
  };

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
                className=" border px-4 py-2 rounded text-xl"
              />
            </Link>
            <Link to={`/updateCoffee/${_id}`}>
              <ShinyText
                text="Edit"
                disabled={false}
                speed={3}
                className="border px-4 py-2 rounded text-xl"
              />
            </Link>
            <button
              className="bg-red-900 rounded"
              onClick={() => handleDelete(_id)}
            >
              <ShinyText
                text="Delete"
                disabled={false}
                speed={3}
                className="border px-4 py-2 rounded text-xl"
              />
            </button>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="cursor-pointer bg-gray-900"
        >
          <ShinyText
            text="Buy Now"
            disabled={false}
            speed={3}
            className="border px-4 py-2 rounded text-xl"
          />
        </button>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-base-300 rounded-2xl text-lg p-12 shadow-xl">
            <DialogTitle className="font-bold text-2xl">
              Confirm Your Purchase
            </DialogTitle>
            <Description>
              You're about to complete your "{name}" order
            </Description>
            <p>
              Please confirm your payment to proceed with the order. Once
              confirmed, your fresh coffee will be on its way!
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleDecrement}
                className="px-3 py-1 border rounded"
              >
                −
              </button>
              <input
                min={1}
                max={quantity}
                value={quantityValue}
                className="border rounded px-5 py-2"
                type="number"
                name="quantity"
                onChange={(e) => setQuantityValue(Number(e.target.value))}
              />
              <button
                type="button"
                onClick={handleIncrement}
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>
            <div className="flex gap-4 py-4">
              <button className="btn bg-green-800 px-10">
                Pay ${totalBill}
              </button>
              <button
                className="btn bg-red-800"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </SpotlightCard>
  );
};

export default CoffeeCard;
