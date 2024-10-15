
import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import { useState } from 'react';
import { useEffect } from 'react';
import { BaseURL } from '../config/config';
import { errConsole } from '../config/config';
const axios = require("axios")

  export default function CaravanModal ( {open,setOpen ,
    nameCaravan ,
      handleSubmit,   onCaravanBrand,   onCaravanName,   onCaravanCompany, onCaravanLocation, onCaravanCost, onCaravanType, onCaravanPeople, onCaravanDate,
     brandCaravan,   costCaravan,   companyCaravan,
    locationCaravan,
    peopleCaravan,
    typeCaravan,
    dateCaravan  } ) {
 
 const onClik = ()=>{
  setOpen(false);
 }
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
      <Modal  open={open}
        onClose={() => setOpen(false)}>
        <ModalDialog>
          
          <form
            onSubmit={handleSubmit}
          >
            <Stack spacing={1}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                      type="text"
                      placeholder="Name"
                      value={nameCaravan}
                      onChange={ onCaravanName}
                    />

              </FormControl>
              <FormControl>
                <FormLabel>Brand</FormLabel>
                <Input 
                 type="text"
                 placeholder="Brand"
                 value={brandCaravan}
                 onChange={ onCaravanBrand} />
              </FormControl>
              <FormControl>
                <FormLabel>Company</FormLabel>
                <Input 
                 type="text"
                 placeholder="Company"
                 value={companyCaravan}
                 onChange={ onCaravanCompany} />
              </FormControl>
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input 
                 type="text"
                 placeholder="Location"
                 value={locationCaravan}
                 onChange={ onCaravanLocation} />
              </FormControl>
              <FormControl>
                <FormLabel>Cost</FormLabel>
                <Input 
                 type="number"
                 placeholder="Cost"
                 value={costCaravan}
                 onChange={ onCaravanCost} />
              </FormControl>
              <FormControl>
                <FormLabel>Type</FormLabel>
                <Input 
                 type="text"
                 placeholder="Type"
                 value={typeCaravan}
                 onChange={ onCaravanType} />
              </FormControl>
              <FormControl>
              <FormLabel>Date</FormLabel>
                <Input 
                 type="number"
                 placeholder="Date"
               value={dateCaravan}
                 onChange={ onCaravanDate} />
              </FormControl>
              <FormControl>
              <FormLabel>People</FormLabel>
                <Input 
                 type="number"
                 placeholder="People"
                 value={peopleCaravan}
                 onChange={ onCaravanPeople} />
              </FormControl>
         

              <Button   type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
