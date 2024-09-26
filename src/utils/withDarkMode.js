import React from "react";

///////////////////////supply Component
const withDarkMode = (Component) => {
  const styles = {
    background: "black",
    color: "white",
    height: "100vh",
  };

  return function (props) {
    //add enhancement

    return (
      <div style={styles}>
        <Component {...props} />
      </div>
    );
  };
};

export default withDarkMode;
