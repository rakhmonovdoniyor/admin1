import React, { useState, useEffect } from'react';
import axios from'axios';
import Box from'@mui/joy/Box';
import Button from'@mui/joy/Button';
import Table from'@mui/joy/Table';
import Typography from'@mui/joy/Typography';
import Sheet from'@mui/joy/Sheet';
import DeleteBtn from'../../buttons/delete';
import EditIcon from'@mui/icons-material/Edit';
import ImgModal from'../../modal/imgmodal';
import { MotoTable } from'../../style';
import { BaseCampingPlaceURL, errConsole } from"../config/config";
import { AddingContainer, Input } from'../motor/newstyle';
import Modal from'@mui/joy/Modal';
import ModalDialog from'@mui/joy/ModalDialog';
import FormControl from'@mui/joy/FormControl';
import FormLabel from'@mui/joy/FormLabel';
import CampingModal from './campmodal';

export default function CampPlaceCom () {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const [dataList, setDataList] = useState([]);  
  const [editingIndex, setEditingIndex] =  useState(-1); 
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [cost, setCost] = useState("");
  const [company, setCompany] = useState("");
  const [license, setLicense] = useState("");
  const [location, setLocation] = useState("");
  const [people, setPeople] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");

  const [newName, setNewName] = useState();
  const [newBrand, setNewBrand] = useState();
  const [newCompany, setNewCompany] = useState();
  const [newLicense, setNewLicense] = useState();
  const [newPeople, setNewPeople] = useState();
  const [newCost, setNewCost] = useState();
  const [newType, setNewType] = useState();
  const [newDate, setNewDate] = useState();
  const [newLocation, setNewLocation] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name !== '') {
      try {
        const response = await axios.post("http://localhost:5052/api/caravan", {
          name, brand, cost, company, license, location, people, type, date,
        });
        console.log(response.data);
        fetchData();
        setName(''); setBrand(''); setCompany('');
        setLocation(''); setCost(''); setType('');
        setDate(''); setPeople(''); setLicense('');
      } catch (error) {
        console.error('failure', error);
      }
    } 
  }
 
  const fetchData = async () => {
    try {
      const response = await axios.get(BaseCampingPlaceURL);  
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
      const response = await axios.put(`${BaseCampingPlaceURL}/${oldName}`, {
        newName, newBrand, newCost, newCompany, newLicense, newLocation, newPeople, newType, newDate
      });
      console.log(response.data);
      fetchData(); 
      setNewName(""); setNewBrand(""); setNewCost("");
      setNewCompany(""); setNewLicense(""); setNewLocation("");
      setNewPeople(""); setNewType(""); setNewDate("");
      setOpen1(false); setEditingIndex(-1); 
    } catch (error) {
      console.log(errConsole, error);
    }
  };

  const handleClick = (index) => {
    setOpen(true);
    setEditingIndex(index);
    const currentData = dataList[index];
    setNewName(currentData.name);
    setNewBrand(currentData.brand);
    setNewCompany(currentData.company);
    setNewLocation(currentData.location);
    setNewCost(currentData.cost);
    setNewType(currentData.type);
    setNewDate(currentData.date);
    setNewPeople(currentData.people);
  };

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

  const DeleteMotor = async (name) => {
    try {
      const response = await axios.delete(`${BaseCampingPlaceURL}/${name}`);
      console.log(response.data);
    } catch (error) {
      console.log(errConsole, error);
    }
  };

  return (
    <MotoTable>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Camping Place Page</h1>
    <button className="button-40" role="button"
     onClick={() => setOpen1(true)}>
          {" "}Add New Camping Place
        </button>
        </div><Box sx={{ width: '100%' }}><Typography level="body-sm" textAlign="center" sx={{ pb: 2 }}>
          <h1> Data Table</h1>
        </Typography><Sheet variant="outlined"
         sx={{
            '--TableCell-height': '40px',
            '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
            '--Table-firstColumnWidth': '80px',
            '--Table-lastColumnWidth': '144px',
            '--TableRow-stripeBackground': 'rgba(0 0 0 / 0.04)',
            '--TableRow-hoverBackground': 'rgba(0 0 0 / 0.08)',
            overflow: 'auto',
            background: (theme) => `linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0))`,
          }}>
          <Table borderAxis="bothBetween" stripe="odd" hoverRowsx={{ '& tr > *:first-child': { position: 'sticky', left: 0, bgcolor: 'background.surface' }, '& tr > *:last-child': { position: 'sticky', right: 0, bgcolor: 'var(--TableCell-headBackground)' } }}>
            <thead>
              <tr>
                <th style={{ width: '30px' }}>Num</th>
                <th style={{ width: 50 }}>Photo</th>
                <th style={{ width: 130 }}>Place Name</th>
                <th style={{ width: 100 }}>Website link</th>
               
                
                <th style={{ width: 100 }}>Location</th>
                <th style={{ width: 100 }}>Phone Number</th>
                {/* <th style={{ width: 100 }}>Type</th> */}
                {/* <th style={{ width: 50 }}>Date</th> */}
                {/* <th style={{ width: 50 }}>People</th> */}
                <th style={{ width: 80 }}>Buttons</th>
                </tr>
                </thead>
                <tbody>
              {dataList.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                  <td> </td>
                  <td>{value.name}</td>
                  <td>{value.brand}</td>
                  {/* <td>{value.company}</td> */}
                  <td>{value.location}</td>
                  <td>{value.cost}</td>
                  {/* <td>{value.type}</td> */}
                  {/* <td>{value.date}</td> */}
                  {/* <td>{value.people}</td> */}
                  <td style={{ display: 'flex', gap: '7px' }}>
                    <button className="button-70" onClick={(e) => handleClick(index)}>Edit</button>
                    <button className="button-45" onClick={() =>DeleteMotor(value.name)}>Delete</button>
                    </td>
                    </tr>
                );
              })}
            </tbody></Table></Sheet>

        {/* Modal for Editing */}
        <Modal open={open}onClose={() => setOpen(false)}>
          <ModalDialog>
            <Typography variant="h6">Edit Camping Information</Typography><FormControl><FormLabel>Name</FormLabel><Input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
            </FormControl><FormControl><FormLabel>Brand</FormLabel><Input type="text" value={newBrand} onChange={(e) => setNewBrand(e.target.value)} />
            </FormControl><FormControl><FormLabel>Company</FormLabel><Input type="text" value={newCompany} onChange={(e) => setNewCompany(e.target.value)} />
            </FormControl><FormControl><FormLabel>Location</FormLabel><Input type="text" value={newLocation} onChange={(e) => setNewLocation(e.target.value)} />
            </FormControl><FormControl><FormLabel>Cost</FormLabel><Input type="number" value={newCost} onChange={(e) => setNewCost(e.target.value)} />
            </FormControl><FormControl><FormLabel>Type</FormLabel><Input type="text" value={newType} onChange={(e) => setNewType(e.target.value)} />
            </FormControl><FormControl><FormLabel>Date</FormLabel><Input type="number" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
            </FormControl><FormControl><FormLabel>People</FormLabel><Input type="number" value={newPeople} onChange={(e) => setNewPeople(e.target.value)} />
            </FormControl><Button onClick={() => handleEdit(dataList[editingIndex]?.name)}>Save</Button>
            </ModalDialog>
            </Modal>
            <CampingModal open={open1} setOpen={setOpen1} 
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
