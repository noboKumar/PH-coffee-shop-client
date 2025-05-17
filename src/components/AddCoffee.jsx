import React from "react";

const AddCoffee = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;

    // get form data
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    // send form data to db
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <div className="text-center my-5 space-y-2 px-48">
        <h1 className="text-2xl md:text-4xl font-semibold">Add New Coffee</h1>
        <p className="text-xl">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <div className="px-44">
        <form onSubmit={handleSubmitForm}>
          <div className="grid grid-cols-2 gap-6">
            <fieldset>
              <legend className="fieldset-legend text-xl">Name:</legend>
              <input
                type="text"
                className="input border-2 rounded w-full"
                placeholder="Enter Coffee name"
                name="name"
              />
            </fieldset>
            <fieldset>
              <legend className="fieldset-legend text-xl">Quantity:</legend>
              <input
                type="number"
                className="input border-2 rounded w-full"
                placeholder="Enter quantity amount"
                name="quantity"
              />
            </fieldset>
            <fieldset>
              <legend className="fieldset-legend text-xl">Supplier:</legend>
              <input
                type="text"
                className="input border-2 rounded w-full"
                placeholder="Enter supplier name"
                name="supplier"
              />
            </fieldset>
            <fieldset>
              <legend className="fieldset-legend text-xl">Taste:</legend>
              <input
                type="text"
                className="input border-2 rounded w-full"
                placeholder="Enter Coffee Taste"
                name="taste"
              />
            </fieldset>
            <fieldset>
              <legend className="fieldset-legend text-xl">Price:</legend>
              <input
                type="number"
                className="input border-2 rounded w-full"
                placeholder="Enter Coffee price"
                name="price"
              />
            </fieldset>
            <fieldset>
              <legend className="fieldset-legend text-xl">Details:</legend>
              <input
                type="text"
                className="input border-2 rounded w-full"
                placeholder="Enter Coffee Details"
                name="details"
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
            />
          </fieldset>
          <input
            className="btn rounded bg-[#D2B48C] border-[#331A15] w-full my-6"
            type="submit"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
