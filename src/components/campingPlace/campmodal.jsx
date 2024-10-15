
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
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
const axios = require("axios")

  export default function CampingModal ( {open,setOpen ,
    nameCaravan ,
      handleSubmit,   onCaravanBrand,   onCaravanName,   onCaravanCompany, onCaravanLocation, onCaravanCost, onCaravanType, onCaravanPeople, onCaravanDate,
     brandCaravan,   costCaravan,   companyCaravan,
    locationCaravan,
    peopleCaravan,
    typeCaravan,
    dateCaravan  } ) {
        const [open3, setOpen3] = useState(true);
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
                <FormLabel>Place Photo</FormLabel>
                  <AddPhotoAlternateIcon/>

              </FormControl>
               
              <FormControl>
                <FormLabel>Place Name</FormLabel>
                <Input
                      type="text"
                      placeholder="Name"
                      value={nameCaravan}
                      onChange={ onCaravanName}
                    />

              </FormControl>
              <FormControl>
                <FormLabel>WebsiteLink</FormLabel>
                <Input 
                 type="text"
                 placeholder="website link"
                 value={brandCaravan}
                 onChange={ onCaravanBrand} />
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
                <FormLabel>Phone number</FormLabel>
                <Input 
                 type="number"
                 placeholder="number"
                 value={costCaravan}
                 onChange={ onCaravanCost} />
              </FormControl>
             
         

              <Button  onClick={() => setOpen3(true)}  type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
