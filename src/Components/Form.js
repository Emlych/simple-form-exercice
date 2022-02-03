import React from "react";
// import Results from "./Results";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Form = (props) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const showpassword = () => {
    let pwd = document.getElementById("password");

    pwd.type === "password" ? (pwd.type = "text") : (pwd.type = "password");
  };
  const showconfirmpassword = () => {
    let confirmpwd = document.getElementById("password-confirm");
    confirmpwd.type === "password"
      ? (confirmpwd.type = "text")
      : (confirmpwd.type = "password");
  };
  return (
    <div className="form" id="form" onSubmit={props.handleSubmit}>
      <h1>Create Account</h1>
      <form>
        <label>Name</label>
        <input
          type="text"
          value={name}
          placeholder="Jean Dupont"
          onChange={(event) => {
            setname(event.target.value);
          }}
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          placeholder="jeandupont@lereacteur.io"
          onChange={(event) => {
            setemail(event.target.value);
          }}
        />
        <label>Password</label>
        <div className="password-input">
          <input
            type="password"
            value={props.password}
            placeholder="lErEacCtEuR2020"
            onChange={(event) => {
              props.setpassword(event.target.value);
            }}
            id="password"
          />
          <FontAwesomeIcon icon={faEye} onClick={showpassword} />
        </div>

        <label>Confirm your password</label>
        <div className="password-input">
          <input
            type="password"
            value={props.confirmpassword}
            placeholder="lErEacCtEuR2020"
            onChange={(event) => {
              props.setconfirmpassword(event.target.value);
            }}
            id="password-confirm"
          />
          <FontAwesomeIcon icon={faEye} onClick={showconfirmpassword} />
        </div>

        <input type="submit" value="Register" className="btn-submit" />
      </form>
    </div>
  );
};

export default Form;
