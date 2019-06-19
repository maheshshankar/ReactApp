import React from "react";

const Rainbow = WrappedComponent => {
  const btClass = ["primary", "success", "danger", "warning", "muted", "dark"];
  const selectedClass = btClass[Math.floor(Math.random() * 5)];
  const className = "text-" + selectedClass;

  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
