import "./App.css";
import Form from "./Components/Form";
import Results from "./Components/Results";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [formsubmit, setformsubmit] = useState(false);
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

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
    <div className="app">
      <Form
        handleSubmit={handleSubmit}
        password={password}
        setpassword={setpassword}
        confirmpassword={confirmpassword}
        setconfirmpassword={setconfirmpassword}
      />
      <Footer techno="React" author="Emlych" />
      {formsubmit && <Results />}
    </div>
  );
}

export default App;
