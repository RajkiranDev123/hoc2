import React from "react";
import withAuth from "./utils/withAuth";
import withDarkMode from "./utils/withDarkMode";

const Dashboard = () => {
  return <div>Dashboard</div>;
};

const AuthDash = withDarkMode(withAuth(Dashboard));
//its not good to exceed 3 levels
export default AuthDash;
//export auth version of dashboard
