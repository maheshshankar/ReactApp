import React from "react";

const Contact = props => {
  function redirect() {
    props.history.push("/");
  }
  return (
    <div>
      <h1>Contact Page</h1>
      <button className="btn btn-primary" onClick={redirect}>
        Redirect
      </button>
    </div>
  );
};

export default Contact;
