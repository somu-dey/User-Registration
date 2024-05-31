// import React, { useState, useEffect } from "react";
// import axios from "axios";
// function Home() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/users");
//         setUsers(response.data);
//         console.log(users);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);
//   const columns = [
//     {
//       name: "Name",
//       selector: (row) => row.name,
//       sortable: true,
//     },
//     {
//       name: "Email",
//       selector: (row) => row.email,
//       sortable: true,
//     },
//     {
//       name: "Date of Birth",
//       selector: (row) => new Date(row.dob).toLocaleDateString(),
//       sortable: true,
//     },
//   ];
//   return (
//     <div
//       className="container-fluid"
//       style={{
//         display: "flex",
//         backgroundColor: "blue",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         className="container"
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//           backgroundColor: "red",
//         }}
//       >
//         <h1>Users List</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>SNo.</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Date of Birth</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={index}>
//                 <td style={{ paddingRight: "1rem" }}>{index + 1}</td>
//                 <td style={{ paddingRight: "1rem" }}>{user.name}</td>
//                 <td style={{ paddingRight: "1rem" }}>{user.email}</td>
//                 <td style={{ paddingRight: "1rem" }}>
//                   {new Date(user.dob).toLocaleDateString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
// export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const columns = [
    { key: "sno", label: "SNo." },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "dob", label: "Date of Birth" },
    { key: "phoneno", label: "Phone Number" },
  ];

  const rows = users.map((user, index) => ({
    key: user._id,
    sno: index + 1,
    name: user.name,
    email: user.email,
    dob: new Date(user.dob).toLocaleDateString(),
    phoneno: user.phoneno,
  }));

  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "center",
        // alignContent: "center",
        flexDirection: "column",
        // textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>Users Database</h1>
      <Table aria-label="Example table with dynamic content">
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(row, columnKey)}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Home;
