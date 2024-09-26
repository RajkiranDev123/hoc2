import React from "react";

const withAuth = (Component) => {//hoc

  const isAuthenticated = false;

  return function (props) {
    //add enhancement
   let dec={color:"red"}
    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      return <div style={dec} >plz login</div>;
    }
  };
};

export default withAuth;
