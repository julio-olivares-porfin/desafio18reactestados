import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Formulario = ({ handleAlert }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      handleAlert("Todos los campos son necesarios", "danger");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      handleAlert("Ingrese un email válido", "danger");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,-_])[A-Za-z\d@$!%*?&.,-_]{8,}$/;
    if (!passwordRegex.test(password)) {
      handleAlert(
        "La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula, un número y al menos un símbolo",
        "secondary"
      );
      return;
    }

    if (password !== confirmPassword) {
      handleAlert("Las contraseñas deben ser idénticas", "danger");
      return;
    }

    handleAlert("Registrado con éxito", "success");
  };

  return (
    <Form className="bg-secondary p-5" onSubmit={handleSubmit} noValidate>
      <Form.Group className="mb-3">
        <Form.Label className="text-white">Nombre</Form.Label>
        <Form.Control
          placeholder="Ingresa tu nombre"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="text-white">Email</Form.Label>
        <Form.Control
          placeholder="Ingresa tu email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="text-white">Contraseña</Form.Label>
        <Form.Control
          placeholder="Ingresa tu contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="text-white">Confirmar Contraseña</Form.Label>
        <Form.Control
          placeholder="Confirma tu contraseña"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>
      <div className="d-grid pt-2">
        <Button variant="dark" type="submit">
          Registrarse
        </Button>
      </div>
    </Form>
  );
};

export default Formulario;
