import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { BaseURL } from "../config/config";
import { useEffect } from "react";
import AddMotor from "./add";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function MotorTable() {
  const [motor, setMotors] = useState([]);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(token);
    const fetchData = async () => {
      try {
        const response = await fetch(BaseURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error(
            `Failed to fetch motor data. Status: ${response.status}`
          );
        }
        const data = await response.json();
        setMotors(data);
      } catch (error) {
        console.error("An error occurred while fetching motor data:", error);
      }
    };
    if (token) {
      fetchData();
    } else {
      console.warn("No token found in localStorage. Cannot fetch motor data.");
    }
  }, [token]);

  // console.log("Current data list:", motor);
  const handleDelete = async (name) => {
    try {
      const response = await fetch(`${BaseURL}/${name}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Error to delete data`);
      }
      setMotors(motor.filter((data) => data.name !== name));
    } catch (error) {
      console.error(`Error to delete`, error);
    }
  };

  const handleAddData = (NewMotor) => {
    setMotors([...motor, NewMotor]);
  };
  return (
    <div>
      <AddMotor onAddMotor={handleAddData} />
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Age</StyledTableCell>
              <StyledTableCell align="right">button</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {motor.map((value, index) => {
              return (
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="right">{value.name}</StyledTableCell>
                  <StyledTableCell align="right">{value.name}</StyledTableCell>
                  <StyledTableCell align="right">
                    <button onClick={() => handleDelete(value.name)}>
                      Delete
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
