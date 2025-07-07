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
        className="mx-auto fieldset bg-base-200 border-base-300 max-w-2xl border p-12 py-6 shadow space-y-2 rounded-2xl"
      >
        <h1 className="text-4xl font-semibold">Sign Up Now!</h1>
        <label className="label text-xl">Name:</label>
        <input
          type="text"
          className="input border-2 rounded w-full"
          placeholder="Enter Your name"
          name="name"
        />
        <label className="label text-xl">Address:</label>
        <input
          type="text"
          className="input border-2 rounded w-full"
          placeholder="Enter Your Address"
          name="address"
        />
        <label className="label text-xl">Phone:</label>
        <input
          type="tel"
          className="input border-2 rounded w-full"
          placeholder="Enter phone Number"
          name="phone"
        />
        <label className="label text-xl">Photo URL</label>
        <input
          type="text"
          className="input border-2 rounded w-full"
          placeholder="Enter your photo URL"
          name="photo"
        />

        <label className="label text-xl">Email</label>
        <input
          type="email"
          className="input border-2 rounded w-full"
          placeholder="Email"
          name="email"
        />

        <label className="label text-xl">Password</label>
        <input
          type="password"
          className="input  border-2 rounded w-full"
          placeholder="Password"
          name="password"
        />

        <button className="btn rounded-2xl bg-slate-500 text-white btn-neutral mt-4">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignUp;
