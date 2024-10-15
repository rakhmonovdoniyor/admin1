// import React, { useState, useEffect } from'react';
// import Modal from'@mui/joy/Modal';
// import ModalDialog from'@mui/joy/ModalDialog';
// import Stack from'@mui/joy/Stack';
// import Button from'@mui/joy/Button';
// import TextField from'@mui/joy/TextField';

// export default function BasicModalDialog({ open, setOpen, item, handleSave }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     brand: '',
//     company: '',
//     location: '',
//     cost: '',
//     type: '',
//     date: '',
//     people: '',
//   });

//   useEffect(() => {
//     if (item) {
//       setFormData(item);
//     }
//   }, [item]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSave(formData);
//   };

//   return (
//     <Modal open={open}onClose={() => setOpen(false)}>
//       <ModalDialog>
//         <form onSubmit={handleSubmit}>
//           <Stack spacing={2}>
//             <TextField label="Name" name="name" value={formData.name} onChange={handleChange} />
//             <TextField label="Brand" name="brand" value={formData.brand} onChange={handleChange} />
//             <TextField label="Company" name="company" value={formData.company} onChange={handleChange} />
//             <TextField label="Location" name="location" value={formData.location} onChange={handleChange} />
//             <TextField label="Cost" name="cost" value={formData.cost} onChange={handleChange} type="number" />
//             <TextField label="Type" name="type" value={formData.type} onChange={handleChange} />
//             <TextField label="Date" name="date" value={formData.date} onChange={handleChange} type="number" />
//             <TextField label="People" name="people" value={formData.people} onChange={handleChange} type="number" />
//             <Button type="submit">Save</Button>
//             </Stack>
//             </form>
//             </ModalDialog>
//             </Modal>
//   );
// }
