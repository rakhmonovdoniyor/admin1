import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Input, Button, Title, ErrorMessage } from "./style";
import { Link, useNavigate } from "react-router-dom";

const OP = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("error");
    try {
      const response = await axios.post("http://localhost:5052/auth/sign-up", {
        name,         
        email,
        password,
      });
      console.log(response);
      navigate("/");

      console.log("Login successful", response.data);
      // Handle successful login
    } catch (error) {
      alert("Password or email wrong!");
      setError("Invalid username or password");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Sgn Up</Title>
        {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Sign up</Button>
      </Form>
    </Container>
  );
};

export default OP;
