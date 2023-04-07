import React, { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validar que el nombre completo tenga una longitud mayor a 5
    if (fullName.length <= 5) {
      setError("Please, verify your info again");
      return;
    }

    // Validar que el email tenga un formato correcto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please, verify your info again");
      return;
    }

    // Enviar el formulario
    setSuccess(true);
    setFullName("");
    setEmail("");
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Full Name"
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <br />
        <input
          placeholder="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
      {success && (
        <p>
          Thank you {fullName}, we will contact yo as soon as posible via email
        </p>
      )}
    </div>
  );
};

export default Form;
