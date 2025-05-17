import React from "react";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
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
        Swal.fire({
          title: "Deleted!",
          text: "Your Coffee has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 border-2 rounded-2xl px-12 py-6 justify-between items-center shadow">
      <figure>
        <img src={photo} alt="coffee-photo" />
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
        <div className="join join-vertical space-y-2">
          <button className="btn join-item rounded">View</button>
          <button className="btn join-item rounded">Edit</button>
          <button onClick={()=>handleDelete(_id)} className="btn join-item rounded">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
