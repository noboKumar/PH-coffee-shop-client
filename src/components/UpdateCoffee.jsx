import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffeeData = useLoaderData();
  const { photo, name, quantity, supplier, price, taste, details, _id } =
    coffeeData;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Your Coffee has been Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="text-center my-5 space-y-2 px-48">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Update Coffee Details
        </h1>
      </div>
      <div className="px-44">
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-2 gap-6">
            <fieldset>
              <legend className="fieldset-legend text-xl">Name:</legend>
              <input
                type="text"
                className="input border-2 rounded w-full"
                placeholder="Enter Coffee name"
                name="name"
                defaultValue={name}
              />
            </fieldset>
            <fieldset>
              <legend className="fieldset-legend text-xl">Quantity:</legend>
              <input
                type="number"
                className="input border-2 rounded w-full"
                placeholder="Enter quantity amount"
                name="quantity"
                defaultValue={quantity}
              />
            </fieldset>
            <fieldset>
              <legend className="fieldset-legend text-xl">Supplier:</legend>
              <input
                type="text"
                className="input border-2 rounded w-full"
                placeholder="Enter supplier name"
                name="supplier"
                defaultValue={supplier}
              />
            </fieldset>
            <fieldset>
              <legend className="fieldset-legend text-xl">Taste:</legend>
              <input
                type="text"
                className="input border-2 rounded w-full"
                placeholder="Enter Coffee Taste"
                name="taste"
                defaultValue={taste}
              />
            </fieldset>
            <fieldset>
              <legend className="fieldset-legend text-xl">Price:</legend>
              <input
                type="number"
                className="input border-2 rounded w-full"
                placeholder="Enter Coffee price"
                name="price"
                defaultValue={price}
              />
            </fieldset>
            <fieldset>
              <legend className="fieldset-legend text-xl">Details:</legend>
              <input
                type="text"
                className="input border-2 rounded w-full"
                placeholder="Enter Coffee Details"
                name="details"
                defaultValue={details}
              />
            </fieldset>
          </div>
          <fieldset>
            <legend className="fieldset-legend text-xl">Photo:</legend>
            <input
              type="text"
              className="input border-2 rounded w-full"
              placeholder="Enter Photo URL"
              name="photo"
              defaultValue={photo}
            />
          </fieldset>
          <input
            className="btn rounded bg-[#D2B48C] border-[#331A15] w-full my-6"
            type="submit"
            value="update Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
