import "./App.css";
import Form from "./Components/Form";
import Results from "./Components/Results";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  // const [formsubmit, setformsubmit] = useState(false);

  return (
    <div className="app">
      <Form />
      <Footer techno="React" author="Emlych" />
      {/* {formsubmit && <Results />} */}
    </div>
  );
}

export default App;
