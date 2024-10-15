import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import { useState } from "react";
import { useEffect } from "react";
import { BaseURL } from "../config/config";
import { errConsole } from "../config/config";
const axios = require("axios");

export default function Addmodal({
  // onAddData,
  open,
  setOpen,
  name,
  handleSubmit,
  onBrand,
  onChange,
  onCompany,
  onLocation,
  onCost,
  onType,
  onPeople,
  onDate,
  brand,
  cost,
  company,
  location,
  people,
  type,
  date,
}) {
  const token = localStorage.getItem("token");
  console.log("Line-41 addmodal.jsx", token);

  /////////  Data ///////////
  // const [name, setName] = React.useState("");
  // const [cost, setCost] = React.useState("");
  // const [type, setType] = React.useState("");
  // const [people, setPeople] = React.useState("");
  // const [date, setDate] = React.useState("");
  // const [company, setCompany] = React.useState("");
  // const [location, setLocation] = React.useState("");
  // const [rate, setRate] = React.useState("");

  // const handleDemoData = () => {
  //   setName(`Caravan ${Math.floor(Math.random() * 50)}`);
  //   setCost(`${Math.floor(Math.random() * 10000)}`);
  //   setType("Family Camp");
  //   setPeople("5");
  //   setDate("01112003");
  //   setCompany("Camping-Car");
  //   setLocation("Seoul");
  //   setRate("5.6");
  // };

  return (
    <React.Fragment>
      {/* <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        New Motor
      </Button> */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <div>{/* <button onClick={handleDemoData}>Demo</button> */}</div>
          <form onSubmit={handleSubmit}>
            <Stack spacing={1}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Brand</FormLabel>
                <Input
                  type="text"
                  placeholder="Brand"
                  value={brand}
                  onChange={onBrand}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Company</FormLabel>
                <Input
                  type="text"
                  placeholder="Company"
                  value={company}
                  onChange={onCompany}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={onLocation}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Cost</FormLabel>
                <Input
                  type="number"
                  placeholder="Cost"
                  value={cost}
                  onChange={onCost}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Type</FormLabel>
                <Input
                  type="text"
                  placeholder="Type"
                  value={type}
                  onChange={onType}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input
                  type="number"
                  placeholder="Date"
                  value={date}
                  onChange={onDate}
                />
              </FormControl>
              <FormControl>
                <FormLabel>People</FormLabel>
                <Input
                  type="number"
                  placeholder="People"
                  value={people}
                  onChange={onPeople}
                />
              </FormControl>

              <Button type="submit">Add Motor</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
