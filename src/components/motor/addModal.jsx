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
  onRate,
  onPeople,
  onDate,
  brand,
  cost,
  company,
  location,
  people,
  rate,
  date,
  onFileChange
}) {
  const token = localStorage.getItem("token");
  console.log("Line-41 addmodal.jsx", token);

   


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
          <form onSubmit={handleSubmit} action="/upload" method="post" enctype="multipart/form-data">
            <Stack spacing={1}>
            <FormControl>
                <FormLabel>Image</FormLabel>
                <Input
                  type="file"
                  name="file"
                  onChange={onFileChange}
                />
              </FormControl>
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
                <FormLabel>Rate</FormLabel>
                <Input
                type="number"
                  placeholder="Rate"
                  value={rate}
                  onChange={onRate}
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
