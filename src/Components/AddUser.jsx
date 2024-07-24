import React from "react";

const AddUser = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <form action="" className="h-[50%] w-[40%] bg-blue-900 rounded-xl ">
        <div className="h-[15%] text-2xl text-white flex justify-center items-center">
          <h1>New User</h1>
        </div>
        <div className="h-[65%] flex flex-col justify-evenly items-center">
          <input
            type="text"
            placeholder="Name"
            className="py-2 px-3 m-2 rounded-md w-[90%]"
          />
          <input
            type="text"
            placeholder="Email"
            className="py-2 px-3 m-2 rounded-md w-[90%]"
          />
          <input
            type="text"
            placeholder="Password"
            className="py-2 px-3 m-2 rounded-md w-[90%]"
          />
        </div>
        <div className="h-[20%] flex justify-center items-center">
          <button
            type="submit"
            className="px-3 py-2 bg-blue-300 text-black rounded-md"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
