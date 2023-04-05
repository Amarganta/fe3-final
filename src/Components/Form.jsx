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
        setError("Por favor verifique su información nuevamente");
        return;
    }

    // Validar que el email tenga un formato correcto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    setError("Por favor verifique su información nuevamente");
    return;
    }

    // Enviar el formulario 
    setSuccess(true);
    setFullName("");
    setEmail("");
};

return (
    <div>
    <h1>Formulario de Contacto</h1>
    <form onSubmit={handleSubmit}>
        <input
            placeholder="Nombre completo"
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
        <button type="submit">Enviar</button>
    </form>
    {error && <p>{error}</p>}
    {success && (
        <p>
        Gracias {fullName}, te contactaremos lo antes posible vía email
        </p>
    )}
    </div>
    );
};


export default Form;
