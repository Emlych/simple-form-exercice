import React from "react";

const Results = ({ surname, email, password, editInfo }) => {
  return (
    <div className="result">
      <h1>Results</h1>
      <div className="result-form">
        <p>Name: {surname}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
      <button className="btn result-btn" onClick={editInfo}>
        Edit your information
      </button>
    </div>
  );
};

export default Results;
