import React from "react";

const Login = (props) => {
    const {handleLogin} = props;
  return (
    <div className="flex justify-center items-center h-full">
      <form
        action=""
        className="flex flex-col justify-evenly items-center w-1/2 h-1/2 bg-slate-700 rounded-xl"
      >
        <h1 className="text-4xl text-white">LogIn</h1>
        <input
          type="text"
          placeholder="Email"
          className="my-4 p-2 w-[90%] rounded-xl"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 p-2 w-[90%] rounded-xl"
        />
        <button type="submit" className="px-2 py-1 bg-slate-100 rounded-xl">
          LogIn
        </button>
        <h5 className="text-white">
          Not Registered?
          <a onClick={handleLogin}> SignUp</a>
        </h5>
      </form>
    </div>
  );
};

export default Login;
