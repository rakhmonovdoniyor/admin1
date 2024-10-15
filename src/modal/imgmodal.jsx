import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Buttons, ImageBtn } from '../style';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import { Campcar } from '../data/mokdata';
import img from "../assets/img-10.png"
import { useParams } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'lightblue',
  // border: 'px solid #000000',
  boxShadow: 54,
  borderRadius: 10,
  p: 4,
};

export default function ImgModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const data = Campcar.maindata;
  // const dataLength = data.length;
  // console.log("data:", data.length);

  const { id } = useParams() ;
  const resultdata = Campcar.maindata.find(
  (value) => value.id === parseInt(id));
  console.log(resultdata);

  return (

    <div>
        <Button onClick={handleOpen}><ImageBtn><PhotoOutlinedIcon/></ImageBtn></Button>
      
          
          <Modal 
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
          
        >
        
          <Fade in={open} >
            
            <Box sx={style} >
              <div style={{display:'flex',justifyContent:'flex-end'}}> 
            <button style={{border: '1px solid',borderRadius:'80px 80px 80px 80px',cursor:'pointer', padding:'5px', backgroundColor:'transparent'}}  onClick={handleClose}>x</button>
            </div>
              <Typography  >
                <img src={img} alt="ss" style={{width: '300px'}}/>
                </Typography>
            </Box>
          </Fade>
        </Modal>
      
     
    </div>
  );
}
