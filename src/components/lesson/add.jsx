import React from "react";
import { useState } from "react";
import { BaseURL } from "../config/config";

const AddMotor = ({ onAddData }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  console.log("Line-42 addmodal.jsx", token);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!token) {
      console.log("No token found!");
    }
    try {
      const response = await fetch(BaseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          age,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(`Data added successfully: ${data}`);
      }
      setName("");
      setAge("");

      onAddData(data.NewMotor);
    } catch (error) {
      console.error("Submit the data is NOT successful", error);
    }
  };
  return (
    <div>
      <h3>Add motor</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">age</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">add new</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default AddMotor;
