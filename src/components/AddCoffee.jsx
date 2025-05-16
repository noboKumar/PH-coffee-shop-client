import React from "react";

const AddCoffee = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    console.log({ name, chef, supplier, taste, category, details, photo });
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
              <legend className="fieldset-legend text-xl">Chef:</legend>
              <input
                type="text"
                className="input border-2 rounded w-full"
                placeholder="Enter Chef name"
                name="chef"
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
              <legend className="fieldset-legend text-xl">Category:</legend>
              <input
                type="text"
                className="input border-2 rounded w-full"
                placeholder="Enter Coffee Category"
                name="category"
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
