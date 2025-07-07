import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const { logIn, googleLogIn } = useContext(AuthContext);

  const handleGoogleLogIn = () => {
    googleLogIn()
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
        className="mx-auto fieldset bg-base-200 border-base-300 max-w-xl border px-12 py-6 shadow space-y-2 rounded-2xl"
      >
        <h1 className="text-4xl font-semibold">Sign In Now!</h1>

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
        <p className="text-lg">
          Don't have an account?{" "}
          <Link to={"/signUp"} className="text-blue-500">
            Sign Up
          </Link>
        </p>

        <button className="btn rounded-2xl bg-slate-500 text-white btn-neutral mt-4">
          Sign in
        </button>
      </form>
      <div className="divider max-w-xl mx-auto">OR</div>
      <div className="mx-auto max-w-xl text-center">
        <button
          onClick={handleGoogleLogIn}
          className="btn btn-outline btn-primary"
        >
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
