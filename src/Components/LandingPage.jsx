import React from 'react'
import Login from "./Login";
import SignUp from "./SignUp";

const LandingPage = (props) => {

    const { handleLogin, loginHidden } = props;

  return (
    <div className="flex">
      <div
        id="signup"
        className={`h-screen w-1/2 bg-slate-100 ${
          loginHidden ? "block" : "hidden"
        }`}
      >
        <SignUp handleLogin={handleLogin} />
      </div>
      <div
        id="login"
        className={`h-screen w-1/2 bg-slate-100 ${
          loginHidden ? "hidden" : "block"
        }`}
      >
        <Login handleLogin={handleLogin} />
      </div>
      <div
        id="gradient"
        className="h-screen w-1/2 bg-slate-400 flex justify-center items-center"
      >
        <div className="bg-blue-500 h-[300px] w-[300px] rounded-[50%]"></div>
      </div>
    </div>
  )
}

export default LandingPage