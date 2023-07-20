import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Validation: Check if first name and last name are not empty
    if (firstName.trim() === "" || lastName.trim() === "") {
      setErrors(["First name and last name are required!"]);
    } else {
      // If both fields are filled, create form data object
      const formData = { firstName: firstName, lastName: lastName };

      // Add the form data to submittedData array
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);

      // Clear the form fields and errors
      setFirstName("");
      setLastName("");
      setErrors([]);
    }
  }

  const listOfSubmissions = submittedData.map((data, index) => (
    <div key={index}>
      {data.firstName} {data.lastName}
    </div>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleFirstNameChange}
          value={firstName}
          placeholder="First Name"
        />
        <input
          type="text"
          onChange={handleLastNameChange}
          value={lastName}
          placeholder="Last Name"
        />
        <button type="submit">Submit</button>
      </form>

      {/* Conditionally render error messages */}
      {errors.length > 0 &&
        errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))}

      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
