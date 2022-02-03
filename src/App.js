import "./App.css";
import Form from "./Components/Form";
import Results from "./Components/Results";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [surname, setsurname] = useState("");
  const [email, setemail] = useState("");
  const [formsubmit, setformsubmit] = useState(false);
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (confirmpassword !== password) {
      document.getElementById("password").style.border = "solid 1px red";
      document.getElementById("password-confirm").style.border =
        "solid 1px red";
      document.getElementById("error").style.display = "block";
      //window.alert("Vos deux mots de passe ne sont pas identiques");
    } else {
      document.getElementById("form").style.display = "none";
      setformsubmit(true);
    }
  };

  return (
    <div className="app">
      <Form
        surname={surname}
        setsurname={setsurname}
        email={email}
        setemail={setemail}
        handleSubmit={handleSubmit}
        password={password}
        setpassword={setpassword}
        confirmpassword={confirmpassword}
        setconfirmpassword={setconfirmpassword}
      />
      {formsubmit && (
        <Results surname={surname} email={email} password={password} />
      )}
      <Footer techno="React" author="Emlych" />
    </div>
  );
}

export default App;
