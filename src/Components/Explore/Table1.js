import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

import logo from "../../Assets/2.png";
function createData(name, Marketcap, Balance, Price, Day7,Day30,Year1,Today) {
  return { name, Marketcap, Balance, Price, Day7,Day30,Year1,Today};

}

const rows = [
  createData("Tesla", "20B", "$5,777", 0.000038, "+5.1%", "-27.4%", "+1M%", "+7.7%"),
  createData("Tesla", "20B", "$5,777", 0.000038, "+5.1%", "-27.4%", "+1M%", "+7.7%"),
  createData("Tesla", "20B", "$5,777", 0.000038, "+5.1%", "-27.4%", "+1M%", "+7.7%"),
  createData("Tesla", "20B", "$5,777", 0.000038, "+5.1%", "-27.4%", "+1M%", "+7.7%"),
  createData("Tesla", "20B", "$5,777", 0.000038, "+5.1%", "-27.4%", "+1M%", "+7.7%"),
  createData("Tesla", "20B", "$5,777", 0.000038, "+5.1%", "-27.4%", "+1M%", "+7.7%"),
  createData("Tesla", "20B", "$5,777", 0.000038, "+5.1%", "-27.4%", "+1M%", "+7.7%"),

];

export default function Table1() {

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        style={{ maxHeight: "100px"}}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              style={{
                color: "grey",
                padding: "18px",
                fontSize: "18px",
                fontWeight: "500px",
              }}
            >

              Name

            </TableCell>
            <TableCell
              align="left"
              style={{
                color: "grey",
                padding: "18px",
                fontSize: "18px",
                fontWeight: "500px",
              }}
            >
              Marketcap
            </TableCell>
            <TableCell
              align="left"
              style={{
                color: "grey",
                padding: "18px",
                fontSize: "18px",
                fontWeight: "500px",
              }}
            >
              Balance
            </TableCell>
            <TableCell
              align="left"
              style={{
                color: "grey",
                padding: "18px",
                fontSize: "18px",
                fontWeight: "500px",
              }}
            >
              Price
            </TableCell>
            <TableCell
              align="left"
              style={{
                color: "grey",
                padding: "18px",
                fontSize: "18px",
                fontWeight: "500px",
              }}
            >
              7D
            </TableCell>
            <TableCell
              align="left"
              style={{
                color: "grey",
                padding: "18px",
                fontSize: "18px",
                fontWeight: "500px",
              }}
            >
              30D
            </TableCell>
            <TableCell
              align="left"
              style={{
                color: "grey",
                padding: "18px",
                fontSize: "18px",
                fontWeight: "500px",
              }}
            >
              1Y
            </TableCell>
            <TableCell
              align="left"
              style={{
                color: "grey",
                padding: "18px",
                fontSize: "18px",
                fontWeight: "500px",
              }}
            >
              Today
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                align="left"
                style={{
                  padding: "18px",
                  fontSize: "18px",
                  fontWeight: "500px",
                  borderTop: "1px solid grey",
                  borderBottom: "1px solid grey",
                  color: "grey"

                }}
              >
                <Box style={{ display: "flex" }}>

                  <img style={{width : "90px"}}src={logo} alt="" />
                  <Box style={{ paddingTop: "7px" }}>{row.name}</Box>
                  </Box>

              </TableCell>
              <TableCell
                align="left"
                style={{
                  padding: "18px",
                  fontSize: "18px",
                  fontWeight: "500px",
                  borderTop: "1px solid grey",
                  borderBottom: "1px solid grey",
                  color: "grey",
                }}
              >
                {row.Marketcap}
              </TableCell>
              <TableCell
                align="left"
                style={{
                  padding: "18px",
                  fontSize: "18px",
                  fontWeight: "500px",
                  borderTop: "1px solid grey",
                  borderBottom: "1px solid grey",
                  color: "grey",
                }}
              >
                {row.Balance}
              </TableCell>
              <TableCell
                align="left"
                style={{
                  padding: "18px",
                  fontSize: "18px",
                  fontWeight: "500px",
                  borderTop: "1px solid grey",
                  borderBottom: "1px solid grey",
                  color: "grey",
                }}
              >
                {row.Price}
              </TableCell>
              <TableCell
                align="left"
                style={{
                  padding: "18px",
                  fontSize: "18px",
                  fontWeight: "500px",
                  borderTop: "1px solid grey",
                  borderBottom: "1px solid grey",
                  color: "grey",
                }}
              >
                {row.Day7}
              </TableCell>
              <TableCell
                align="left"
                style={{
                  padding: "18px",
                  fontSize: "18px",
                  fontWeight: "500px",
                  borderTop: "1px solid grey",
                  borderBottom: "1px solid grey",
                  color: "red",
                }}
              >
                {row.Day30}
              </TableCell>
              <TableCell
                align="left"
                style={{
                  padding: "18px",
                  fontSize: "18px",
                  fontWeight: "500px",
                  borderTop: "1px solid grey",
                  borderBottom: "1px solid grey",
                  color: "grey",
                }}
              >
                {row.Year1}
              </TableCell>
              <TableCell
                align="left"
                style={{
                  padding: "18px",
                  fontSize: "18px",
                  fontWeight: "500px",
                  borderTop: "1px solid grey",
                  borderBottom: "1px solid grey",
                  color: "grey",
                }}
              >
                {row.Today}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
