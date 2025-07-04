import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const SignIn = () => {
  const { logIn } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then((result) => {
        Swal.fire({
          title: `welcome, My friend`,
          text: "Successfully Logged In",
          icon: "success",
        });
        console.log(result);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.code}`,
        });
      });
  };

  return (
    <div className="my-20">
      <form
        onSubmit={handleLogIn}
        className="mx-auto fieldset bg-base-200 border-base-300 w-xs border px-12 py-6 shadow space-y-2 rounded-2xl"
      >
        <h1 className="text-4xl font-semibold">Sign In Now!</h1>

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

export default SignIn;
