import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import AdminDashboard from "./Components/AdminDashboard";

function App() {
  const [loginHidden, setLoginHidden] = useState(false);
  const [addUserFormHidden, setAddUserFormHidden] = useState(true);
  const [custManageHidden, setCustManageHidden] = useState(true);

  const handleLogin = () => {
    setLoginHidden(!loginHidden);
  };

  const handleAddUserForm = () => {
    setAddUserFormHidden(!addUserFormHidden);
    setCustManageHidden(true);
  };

  const handleCustManage = () => {
    setCustManageHidden(!custManageHidden);
    setAddUserFormHidden(true);
  };

  return (
    <>
      <LandingPage handleLogin={handleLogin} loginHidden={loginHidden} />
      <AdminDashboard
        handleAddUserForm={handleAddUserForm}
        addUserFormHidden={addUserFormHidden}
        custManageHidden={custManageHidden}
        handleCustManage={handleCustManage}
      />
    </>
  );
}

export default App;
