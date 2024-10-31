import React, { useState } from "react";
import axios from "axios";
import "../index.css";
import {
  Container,
  Form,
  Input,
  Button,
  Title,
  ErrorMessage,
  Welcome,
  DemoAc,
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
 

const LoginPage = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("error");
    try {
      const response = await fetch("http://localhost:5052/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      // .then((response) => {
      //   if (response.ok) {
      //     throw new Error("Network response was not ok" + response.statusText);
      //   }
      // });
      const data = await response.json();
      if (response.ok) {
        alert(`Welcome ${data.name}`);
        localStorage.setItem("token", data.token);
        console.log(data.token);
        navigate("/motor");
        console.log("Working navigate");
      }
    } catch (error) {
      alert("Password or email wrong!");
      setError("Invalid username or password");
      console.log("Password or email wrong");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // alert(`Copied to clipboard: ${text}`);
  };
  

  return (
    <Container>
      <Welcome>
        <div>
          <h1>Welcome to Camping Car websites admin dashboard</h1>
          <DemoAc>
          <h5>Demo account:</h5>   
            <div style={{display:"flex", alignItems:"center",gap:"6px"}}>
              <h4>email:</h4> <h3 onClick={() => copyToClipboard('test@gmail.com')}> test@gmail.com</h3> 
              <IconButton onClick={() => copyToClipboard('test@gmail.com')}>
          <ContentCopyIcon />
        </IconButton>
            </div>
            <div style={{display:"flex", alignItems:"center",gap:"6px"}}>
              <h4>password:</h4> <h3 >test</h3>  
              <IconButton onClick={() => copyToClipboard('test')}>
          <ContentCopyIcon />
        </IconButton>
            </div>
          </DemoAc>
        </div>
      </Welcome>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
        {/* <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}
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

        <Button type="submit">Login</Button>
        <div>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <button class="button-22" role="button">
              Create account
            </button>
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default LoginPage;
