import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";

const SignUp = () => {
  const { createUser } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...userProfile } = Object.fromEntries(
      formData.entries()
    );

    console.log(userProfile);

    // create User in Firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        // send data to db
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("after profile save", data);
              alert("Successfully created Account");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="my-20">
      <form
        onSubmit={handleSignUp}
        className="mx-auto fieldset bg-base-200 border-base-300 w-xs border p-12 py-6 shadow space-y-2 rounded-2xl"
      >
        <h1 className="text-4xl font-semibold">Sign Up Now!</h1>
        <div>
          <label className="label text-xl">Name:</label>
          <input
            type="text"
            className="input border-2 rounded"
            placeholder="Enter Your name"
            name="name"
          />
        </div>
        <div>
          <label className="label text-xl">Address:</label>
          <input
            type="text"
            className="input border-2 rounded"
            placeholder="Enter Your Address"
            name="address"
          />
        </div>
        <div>
          <label className="label text-xl">Phone:</label>
          <input
            type="tel"
            className="input border-2 rounded"
            placeholder="Enter phone Number"
            name="phone"
          />
        </div>
        <div>
          <label className="label text-xl">Photo URL</label>
          <input
            type="text"
            className="input border-2 rounded"
            placeholder="Enter your photo URL"
            name="photo"
          />
        </div>

        <div>
          <label className="label text-xl">Email</label>
          <input
            type="email"
            className="input border-2 rounded"
            placeholder="Email"
            name="email"
          />
        </div>

        <div>
          <label className="label text-xl">Password</label>
          <input
            type="password"
            className="input  border-2 rounded"
            placeholder="Password"
            name="password"
          />
        </div>

        <button className="btn rounded-2xl bg-slate-500 text-white btn-neutral mt-4">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignUp;
