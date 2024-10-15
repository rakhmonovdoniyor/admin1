import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import BasicModalDialog from './modal/addmodal';

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      
      

      {/* <Button variant="contained" href="#contained-buttons">
       <BasicModalDialog/>
       <AddIcon/>
      </Button> */}
      <BasicModalDialog/>

    </Stack>
  );
}
