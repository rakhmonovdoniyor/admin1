// MotorCom.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import DeleteBtn from '../../buttons/delete';
import EditIcon from '@mui/icons-material/Edit';
import ImgModal from '../../modal/imgmodal';
import { MotoTable } from '../../style';
import { BaseTuningURL, errConsole } from "../config/config";
import { BaseURL } from '../config/config1';
import { AddingContainer, Input } from '../motor/newstyle';
import TuningModal from './tuningmodal';

export default function TuningCom() {
  const [open, setOpen] = useState(false);
  const [data, setDataList] = useState([]);  
  const [editingIndex, setEditingIndex] =  useState(Array(data.length).fill(false)); 
  const [name, setName] = useState("");
  // const [Newname, setNewName] = useState();
  const [brand, setBrand] = useState("");
  const [cost, setCost] = useState("");
  const [company, setCompany] = useState("");
  const [license, setLicense] = useState("");
  const [location, setLocation] = useState("");
  const [people, setPeople] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  // const [update,setUpdate] =  useState(Array(data.length).fill(false));

  const [newName, setNewName] = useState();
  const [newBrand, setNewBrand] = useState();
  const [newCompany, setNewCompany] = useState();
  const [newLicense, setNewLicense] = useState();
  const [newPeople, setNewPeople] = useState();
  const [newCost, setNewCost] = useState();
  const [newType, setNewType] = useState();
  const [newDate, setNewDate] = useState();
  const [newLocation, setNewLocation] = useState();

  const handleSubmit = async (event)=>{
    event.preventDefault();
    if(name !== ''){
      try {
        const response = await axios.post("http://localhost:5052/api/tuning", {
            name,
             
            brand,
            cost,
            company,
            license,
            location,
            people,
            type,
            date,
        });
        console.log(response.data)
        fetchData();
        setName('');
        setBrand('');
        setCompany('');
        setLocation('');
        setCost('');      
        setType('');
        setDate('');
        setPeople('');
        setLicense('');

    } catch (error) {
        console.error('failure', error)
    }  
    } 
}
 
  const fetchData = async () => {
    try {
      const response = await axios.get(BaseTuningURL);  
      setDataList(response.data);  
    } catch (error) {
      console.error(errConsole, error);
    }
  };

  useEffect(() => {
    fetchData();  
  }, );

  
  const handleEdit = async (oldName) => {
    try {
      const response = await axios.put(`${BaseTuningURL}/${oldName}`, {
        newName,newBrand, newCost, newCompany, newLicense, newLocation, newPeople, newType, newDate
      });
      console.log(response.data);
      fetchData(); 
      setNewName("");
      setNewBrand("");
      setNewCost("");
      setNewCompany("");
      setNewLicense("");
      setNewLocation("");
      setNewPeople("");
      setNewType("");
      setNewDate("");

      // setEditingIndex( ); 
    } catch (error) {
      console.log(errConsole, error);
    }
  };

  const handleClick = (index) =>{
    const newEditMode = [...editingIndex];
    newEditMode[index] = !newEditMode[index];
    setEditingIndex(newEditMode);
  }

  const handleChange = (e) => {
    setName(e.target.value)
    console.log("name is clicked")
};
const handleBrandChange = (e) => {
  setBrand(e.target.value)
  console.log("brand is clicked")
};
const handleCompanyChange = (e) => {
  setCompany(e.target.value)
  console.log("company is clicked")
};
const handleLocationChange = (e) => {
setLocation(e.target.value)
console.log("brand is clicked")
};
const handleCostChange = (e) => {
  setCost(e.target.value)
  console.log("name is clicked")
};
const handleTypeChange = (e) => {
setType(e.target.value)
console.log("brand is clicked")
};
const handleDateChange = (e) => {
  setDate(e.target.value)
  console.log("name is clicked")
};
const handlePeopleChange = (e) => {
setPeople(e.target.value)
console.log("brand is clicked")
};


const DeleteAllMotors = async () => {
  try {
    const response = await axios.delete(`http://localhost:5052/api/tuning`);
    console.log(response.data);
    // fetchData();
  } catch (error) {
    console.log(errConsole, error);
  }
};


  return (
    <MotoTable>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Tuning Page</h1>
        <button  className="button-40" role="button" onClick={() => setOpen(true)}>
              {" "}
             
              Add New Tuning
            </button>
      </div>

      <Box sx={{ width: '100%' }}>
        <Typography level="body-sm" textAlign="center" sx={{ pb: 2 }}>
         <h1>Data table</h1>
        </Typography>
        <Sheet
          variant="outlined"
          sx={{
            '--TableCell-height': '40px',
            '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
            '--Table-firstColumnWidth': '80px',
            '--Table-lastColumnWidth': '144px',
            '--TableRow-stripeBackground': 'rgba(0 0 0 / 0.04)',
            '--TableRow-hoverBackground': 'rgba(0 0 0 / 0.08)',
            overflow: 'auto',
            background: (theme) => `linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0))`,
          }}
        >
          <Table borderAxis="bothBetween" stripe="odd" hoverRow sx={{ '& tr > *:first-child': { position: 'sticky', left: 0, bgcolor: 'background.surface' }, '& tr > *:last-child': { position: 'sticky', right: 0, bgcolor: 'var(--TableCell-headBackground)' } }}>
            <thead>
              <tr>
                <th style={{ width: '30px' }}>Num</th>
                <th style={{ width: 50 }}>Photo</th>
                <th style={{ width: 130 }}>Name</th>
                <th style={{ width: 100 }}>Brand</th>
                <th style={{ width: 100 }}>Company</th>
                <th style={{ width: 100 }}>Location</th>
                <th style={{ width: 100 }}>Cost</th>
                <th style={{ width: 100 }}>Type</th>
                <th style={{ width: 50 }}>Date</th>
                <th style={{ width: 50 }}>People</th>
                <th style={{ width: 80 }} >Buttons</th>
              </tr>
            </thead>
            <tbody>
 
              {data.map((value,index) =>{
                return(
                  <tr key={index}>
                    {editingIndex[index] ?
                    <> 
                  <td>{index + 1}</td>
                  <td></td>
                  <td><Input type="text" name='name' onChange={(e) =>setNewName(e.target.value)} /></td>  
                  <td><Input type="text" name='brand' onChange={(e) =>setNewBrand(e.target.value)} /></td>  
                  <td><Input type="text" name='company' onChange={(e) =>setNewCompany(e.target.value)} /></td>  
                  <td><Input type="text" name='location' onChange={(e) =>setNewLocation(e.target.value)} /></td>  
                  <td><Input type="number" name='cost' onChange={(e) =>setNewCost(e.target.value)} /></td>  
                  <td><Input type="text" name='type' onChange={(e) =>setNewType(e.target.value)} /></td>  
                  <td><Input type="number" name='date' onChange={(e) =>setNewDate(e.target.value)} /></td>  
                  <td><Input type="number" name='people' onChange={(e) =>setNewPeople(e.target.value)} /></td>  
                  <td style={{display:'flex',gap:'7px'}}><button onClick={(e) => {handleEdit(value.name); handleClick(index);}} className="button-68">Save</button>
                  <button  className="button-45"  onClick={DeleteAllMotors} >Delete</button>
                  </td>
                  </>:<>
                  <td>{index + 1}</td>
                  <td></td>
                  <td>{value.name}</td>
                  <td>{value.brand}</td>
                  <td>{value.company}</td>
                  <td>{value.location}</td>
                  <td>{value.cost}</td>
                  <td>{value.type}</td>
                  <td>{value.date}</td>
                  <td>{value.people}</td>
                  <td  style={{display:'flex',gap:'7px'}}><button className="button-70"  onClick={(e) => handleClick(index)}>Edit</button>
                  <button className="button-45" onClick={DeleteAllMotors} >Delete</button></td>
                  </>
                  }

                  </tr>
                )
              })}
              
            </tbody>
          </Table>
        </Sheet>
        <TuningModal open={open} setOpen={setOpen} 
        nameCaravan={name} brandCaravan={brand} companyCaravan={company}
         locationCaravan={location} costCaravan={cost} typeCaravan={type}
          peopleCaravan={people} dateCaravan={date} handleSubmit={handleSubmit}
           onCaravanName={handleChange} onCaravanBrand={handleBrandChange}
           onCaravanCompany={handleCompanyChange} onCaravanCost={handleCostChange}
           onCaravanLocation={handleLocationChange} onCaravanType={handleTypeChange}
           onCaravanDate={handleDateChange} onCaravanPeople={handlePeopleChange}
           />
      </Box>
    </MotoTable>
  );
}
