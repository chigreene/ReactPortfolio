import { useState } from "react";
// import style sheet
import "./style.css";

// import helper function to validate email
import { validateEmail } from "../../utils/helpers";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // get values by name from the field text is being entered into
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // based on were the event is occurring we use the input type to set the state for the appropriate field
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }

    setErrorMessage("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !name || !message) {
      setErrorMessage("Enter a valid email, name, and message.");
      return;
    }
    alert(`Hello ${name} thank you for your interest in my portfolio`);

    setName("");
    setEmail("");
    setMessage("");
  };

  const handleMouseLeave = (event) => {
    if (event.target.value === "") {
      if (event.target.name === "name") {
        setErrorMessage("Name is a required field");
      } else if (event.target.name === "email") {
        setErrorMessage("Email is a required field");
      } else if (event.target.name === "message") {
        setErrorMessage("Message is a required field");
      }
      return;
    } else if (!validateEmail(email)) {
      setErrorMessage("A valid email is required");
      return;
    }
  };

  return (
    <div className="container text-center">
      <h1>Thanks {name} for your interest</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onMouseLeave={handleMouseLeave}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onMouseLeave={handleMouseLeave}
          type="text"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onMouseLeave={handleMouseLeave}
          type="text"
          placeholder="Message"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default ContactPage;
