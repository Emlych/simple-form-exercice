import "./App.css";
import Form from "./Components/Form";
import Results from "./Components/Results";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [surname, setsurname] = useState("");
  const [email, setemail] = useState("");
  const [formsubmit, setformsubmit] = useState(false); //équivalent au isValid de la correction
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [validpassword, setvalidpassword] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (confirmpassword !== password) {
      setvalidpassword(false);
      //window.alert("Vos deux mots de passe ne sont pas identiques");
    } else {
      setformsubmit(true);
    }
  };

  const editInfo = () => {
    setformsubmit(false);
  };

  return (
    <div className="app">
      {!formsubmit ? (
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
          validpassword={validpassword}
        />
      ) : (
        <Results
          surname={surname}
          email={email}
          password={password}
          editInfo={editInfo}
        />
      )}

      <Footer techno="React" author="Emlych" />
    </div>
  );
}

export default App;
