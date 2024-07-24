import React from "react";
import CustManageSys from "./CustManageSys";
import AddUser from "./AddUser";

const AdminDashboard = (props) => {
  const {
    handleAddUserForm,
    addUserFormHidden,
    handleCustManage,
    custManageHidden,
  } = props;

  return (
    <div className="h-screen w-full bg-zinc-300 text-white flex">
      <div className="h-full w-[30%] bg-blue-900">
        <div
          id="dashboard"
          className="h-[10%] text-4xl flex justify-center items-center"
        >
          <h1>Admin Dashboard</h1>
        </div>

        <hr />

        <div
          id="menu-list"
          className="h-[70%] text-xl flex justify-center items-start py-16"
        >
          <ul className="flex flex-col ">
            <div className="m-2 hover:scale-[1.2]" onClick={handleCustManage}>
              Customer Management System
            </div>
          </ul>
        </div>

        <div id="addUser" className="h-[20%] flex justify-center items-center">
          <div
            className="bg-blue-200 text-black text-2xl py-2 px-4 rounded-xl"
            onClick={handleAddUserForm}
          >
            Add User
          </div>
        </div>
      </div>

      <div
        className={`h-full w-[70%] text-black ${
          addUserFormHidden ? "hidden" : "block"
        }`}
      >
        <AddUser />
      </div>

      <div
        className={`h-full w-[70%] text-black ${
          custManageHidden ? "hidden" : "block"
        }`}
      >
        <CustManageSys />
      </div>
    </div>
  );
};

export default AdminDashboard;
