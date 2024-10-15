
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

  export default function BasicModalDialog ({onSubmit, onClick, name, company, onCompany, cost, license, passanger, type, date,rating, location, funLicense, funPassanger, funCost, funDate,funType, funRating, funLocation}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        New Motor
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Add new info</DialogTitle>
          <DialogContent>Fill in the information of the project.</DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <input  type="text" placeholder='Car name' name='name' onChange={onClick} value={name}/>
              </FormControl>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input  />
              </FormControl>
              <FormControl>
                <FormLabel>Company</FormLabel>
                <Input  />
              </FormControl>
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input  />
              </FormControl>
              <FormControl>
                <FormLabel>Cost</FormLabel>
                <Input  />
              </FormControl>
              <FormControl>
                <FormLabel>Type</FormLabel>
                <Input  />
              </FormControl>
         

              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
