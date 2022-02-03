import React from "react";
import Results from "./Results";
import { useState } from "react";

const Form = (props) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [formsubmit, setformsubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (confirmpassword !== password) {
      window.alert("Vos deux mots de passe ne sont pas identiques");
    } else {
      document.getElementById("form").style.display = "none";
      setformsubmit(true);
    }
  };
  return (
    <div className="form" id="form" onSubmit={handleSubmit}>
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
        <input
          type="password"
          value={password}
          placeholder="lErEacCtEuR2020"
          onChange={(event) => {
            setpassword(event.target.value);
          }}
        />
        <label>Confirm your password</label>
        <input
          type="password"
          value={confirmpassword}
          placeholder="lErEacCtEuR2020"
          onChange={(event) => {
            setconfirmpassword(event.target.value);
          }}
        />
        <input type="submit" value="Register" className="btn-submit" />
      </form>
    </div>
  );
};

export default Form;
