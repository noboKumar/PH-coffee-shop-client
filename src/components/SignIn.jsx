import React from "react";

const SignIn = () => {

  return (
    <div className="my-20">
      <form
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
