// import * as React from 'react';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import Table from '@mui/joy/Table';
// import Typography from '@mui/joy/Typography';
// import Sheet from '@mui/joy/Sheet';
// import DeleteBtn from '../../buttons/delete';
// import EditIcon from '@mui/icons-material/Edit';
// import ImgModal from '../../modal/imgmodal';
// import { Campcar } from '../../data/mokdata';
// import { BaseCaravanURL } from '../config/config';
// import { errConsole } from '../config/config';
// import axios from 'axios';
// import { useState } from 'react';
// import { useEffect } from 'react';




// export default function TableColumnPinning() {
//   // const [open, setOpen] = useState(false);
//   const [dataList, setDataList] = useState([]); // 상태에 데이터 저장
//   const [editingIndex, setEditingIndex] = useState(null); // 수정 중인 항목의 인덱스

//   const [brand, setNewBrand] = useState("");
//   const [cost, setNewCost] = useState("");
//   const [company, setNewCompany] = useState("");
//   const [license, setNewLicense] = useState("");
//   const [location, setNewLocation] = useState("");
//   const [people, setNewPeople] = useState("");
//   const [type, setNewType] = useState("");
//   const [date, setNewDate] = useState("");

//   // 데이터 가져오기 함수
//   const fetchData = async () => {
//       try {
//           const response = await axios.get(BaseCaravanURL); // 서버에서 데이터 가져오기 (URL은 서버 설정에 맞게 변경)
//           setDataList(response.data); // 가져온 데이터를 상태에 저장
//       } catch (error) {
//           console.error(errConsole, error);
//       }
//   };

//   useEffect(() => {
//       fetchData(); // 컴포넌트가 마운트될 때 데이터 가져오기
//   }, []);

//   // 수정
//   const handleEdit = async (oldBrand) => {
//       try {
//           const response = await axios.put(`${BaseCaravanURL}/${oldBrand}`, {
//               brand,
//               cost,
//               company,
//               license,
//               location,
//               people,
//               type,
//               date,
//           });
//           console.log(response.data);
//           fetchData();
//           // 입력 필드를 초기화합니다.
//           setNewBrand("");
//           setNewCost("");
//           setNewCompany("");
//           setNewLicense("");
//           setNewLocation("");
//           setNewPeople("");
//           setNewType("");
//           setNewDate("");

//           setEditingIndex(null); // 수정 모드 종료
//       } catch (error) {
//           console.log(errConsole, error);
//       }
//   };

//   // 삭제
//   const handleDelete = async (brand) => {
//       try {
//           const response = await axios.delete(`${BaseCaravanURL}/${brand}`);
//           console.log(response.data);
//           fetchData();
//       } catch (error) {
//           console.error(errConsole, error);
//       }
//   };

//   return (
//     <>
    
//           {/* {data.map((value,index, key) => { */}
//             {/* return( */}
          
//     <Box sx={{ width: '100%' }} >
//       <Typography level="body-sm" textAlign="center" sx={{ pb: 2 }}>
    
//       </Typography>
//       <Sheet
//         variant="outlined"
//         sx={{
//           '--TableCell-height': '40px',
//           // the number is the amount of the header rows.
//           '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
//           '--Table-firstColumnWidth': '80px',
//           '--Table-lastColumnWidth': '144px',
//           // background needs to have transparency to show the scrolling shadows
//           '--TableRow-stripeBackground': 'rgba(0 0 0 / 0.04)',
//           '--TableRow-hoverBackground': 'rgba(0 0 0 / 0.08)',
//           overflow: 'auto',
//           background: (theme) =>
//             `linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
//             linear-gradient(to right, rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
//             radial-gradient(
//               farthest-side at 0 50%,
//               rgba(0, 0, 0, 0.12),
//               rgba(0, 0, 0, 0)
//             ),
//             radial-gradient(
//                 farthest-side at 100% 50%,
//                 rgba(0, 0, 0, 0.12),
//                 rgba(0, 0, 0, 0)
//               )
//               0 100%`,
//           backgroundSize:
//             '40px calc(100% - var(--TableCell-height)), 40px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height))',
//           backgroundRepeat: 'no-repeat',
//           backgroundAttachment: 'local, local, scroll, scroll',
//           backgroundPosition:
//             'var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height), var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height)',
//           backgroundColor: 'background.surface',
//         }}
//       >
//         <Table
//           borderAxis="bothBetween"
//           stripe="odd"
//           hoverRow
//           sx={{
//             '& tr > *:first-child': {
//               position: 'sticky',
//               left: 0,
//               boxShadow: '1px 0 var(--TableCell-borderColor)',
//               bgcolor: 'background.surface',
//             },
//             '& tr > *:last-child': {
//               position: 'sticky',
//               right: 0,
//               bgcolor: 'var(--TableCell-headBackground)',
//             },
//           }}
//         >
//           <thead>
//             <tr>
              
//               <th style={{ width: '30px' }}>Num</th>
//               <th style={{ width: 50 }}>Photo</th>
//               <th style={{ width: 150 }}>Name</th>
//               <th style={{ width: 100 }}>Company</th>
//               <th style={{ width: 100 }}>Location</th>
//               <th style={{ width: 100 }}>Cost</th>
//               <th style={{ width: 100 }}>Type</th>
//               <th style={{ width: 100 }}>Date</th>
//               <th style={{ width: 50 }}>People</th>

//               <th
//                 aria-label="last"
//                 style={{ width: 'var(--Table-lastColumnWidth)' }}
//               />
//             </tr>
//           </thead>

//           <tbody>
//           {dataList.map((value, index, key) => {
//                   return(
                    
                           
//               <tr key={key}>
//                 <td style={{color: 'blue'}}>{index + 1}</td>
//                 <td><ImgModal/></td>
//                 <td style={{
//                   color:' var(--600, #2C2669)',

//                   /* Bold/14px -> 16px */
//                   fontFamily: "Public Sans",
//                   fontSize: '14px',
//                   fontStyle: 'normal',
//                   fontWeight: '700',
//                   lineHeight: '16px', /* 114.286% */
//                 }}>{value.car.name}</td>
//                 <td>{value.car.company}</td>
//                 <td>{value.car.location}</td>
//                 <td>{value.car.cost}</td>
//                 <td>{value.car.type}</td>
//                 <td>{value.car.date}</td>
//                 <td>{value.car.people}</td>
//                 <td>
//                   <Box sx={{ display: 'flex', gap: 1 }}>
//                     <Button size="sm" variant="plain" color="neutral">
//                       Edit<EditIcon/>
//                     </Button>
                    
//                      <DeleteBtn/>
                    
//                   </Box>
//                 </td>
//               </tr>
//             )
//           })} 
//           </tbody>
//         </Table>
//       </Sheet>
//     </Box>
//     {/* // )})} */}
//     </>
 
//   )
// }
