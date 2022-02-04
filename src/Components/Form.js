import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Form = ({
  handleSubmit,
  surname,
  setsurname,
  email,
  setemail,
  password,
  setpassword,
  confirmpassword,
  setconfirmpassword,
  validpassword,
}) => {
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
    <div className="form" id="form" onSubmit={handleSubmit}>
      <h1>Create Account</h1>
      <form>
        <label>Name</label>
        <input
          type="text"
          value={surname}
          placeholder="Jean Dupont"
          onChange={(event) => {
            setsurname(event.target.value);
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
            value={password}
            placeholder="lErEacCtEuR2020"
            onChange={(event) => {
              setpassword(event.target.value);
            }}
            id="password"
            className={validpassword ? "" : "false"}
          />
          <FontAwesomeIcon icon={faEye} onClick={showpassword} />
        </div>

        <label>Confirm your password</label>
        <div className="password-input">
          <input
            type="password"
            value={confirmpassword}
            placeholder="lErEacCtEuR2020"
            onChange={(event) => {
              setconfirmpassword(event.target.value);
            }}
            id="password-confirm"
            className={validpassword ? "" : "false"}
          />
          <FontAwesomeIcon icon={faEye} onClick={showconfirmpassword} />
        </div>

        <p className="error" id="error">
          Les mots de passe ne sont pas identiques
        </p>

        <input type="submit" value="Register" className="btn" />
      </form>
    </div>
  );
};

export default Form;
