import React from "react";

const Results = (props) => {
  return (
    <div className="result">
      <h1>Results</h1>
      <div className="result-form">
        <p>Name: {props.surname}</p>
        <p>Email: {props.email}</p>
        <p>Password: {props.password}</p>
      </div>
      <button className="btn result-btn">Edit your information</button>
    </div>
  );
};

export default Results;
