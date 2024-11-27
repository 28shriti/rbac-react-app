// // src/pages/UserManagement.js
// import React, { useState } from 'react';
// import { Button, Grid, Paper, Typography, TextField, MenuItem, Select, InputLabel, FormControl, Dialog, DialogActions, DialogContent, DialogTitle, Switch } from '@mui/material';

// const UserManagement = () => {
//   // Mock data for users and roles
//   const [users, setUsers] = useState([
//     { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'Admin', status: true },
//     { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', role: 'Editor', status: true },
//     { id: 3, name: 'Samuel Green', email: 'samuelgreen@example.com', role: 'Viewer', status: false },
//   ]);

//   const [roles, setRoles] = useState(['Admin', 'Editor', 'Viewer']);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [newUserName, setNewUserName] = useState('');
//   const [newUserEmail, setNewUserEmail] = useState('');
//   const [newUserRole, setNewUserRole] = useState('');
//   const [newUserStatus, setNewUserStatus] = useState(true);

//   const handleOpenDialog = (user = null) => {
//     setCurrentUser(user);
//     setNewUserName(user ? user.name : '');
//     setNewUserEmail(user ? user.email : '');
//     setNewUserRole(user ? user.role : '');
//     setNewUserStatus(user ? user.status : true);
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//     setCurrentUser(null);
//   };

//   const handleSaveUser = () => {
//     if (currentUser) {
//       // Edit existing user
//       setUsers(users.map(user => (user.id === currentUser.id ? { ...user, name: newUserName, email: newUserEmail, role: newUserRole, status: newUserStatus } : user)));
//     } else {
//       // Add new user
//       setUsers([
//         ...users,
//         { id: users.length + 1, name: newUserName, email: newUserEmail, role: newUserRole, status: newUserStatus },
//       ]);
//     }
//     handleCloseDialog();
//   };

//   const handleDeleteUser = (id) => {
//     const confirmation = window.confirm('Are you sure you want to delete this user?');
//     if (confirmation) {
//       setUsers(users.filter(user => user.id !== id));
//     }
//   };

//   const handleStatusChange = (event) => {
//     setNewUserStatus(event.target.checked);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h4" gutterBottom>
//         User Management
//       </Typography>

//       <Grid container spacing={3}>
//         {/* List of Users */}
//         {users.map(user => (
//           <Grid item xs={12} sm={6} md={4} key={user.id}>
//             <Paper elevation={3} style={{ padding: '20px' }}>
//               <Typography variant="h6">{user.name}</Typography>
//               <Typography variant="body2">Email: {user.email}</Typography>
//               <Typography variant="body2">Role: {user.role}</Typography>
//               <Typography variant="body2">Status: {user.status ? 'Active' : 'Inactive'}</Typography>

//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => handleOpenDialog(user)}
//                 style={{ marginTop: '10px', width: '100%' }}
//               >
//                 Edit
//               </Button>

//               <Button
//                 variant="contained"
//                 color="secondary"
//                 onClick={() => handleDeleteUser(user.id)}
//                 style={{ marginTop: '10px', width: '100%' }}
//               >
//                 Delete
//               </Button>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Button to Add New User */}
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={() => handleOpenDialog()}
//         style={{ marginTop: '20px' }}
//       >
//         Add New User
//       </Button>

//       {/* Dialog for Adding/Editing User */}
//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle>{currentUser ? 'Edit User' : 'Add New User'}</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Name"
//             fullWidth
//             value={newUserName}
//             onChange={(e) => setNewUserName(e.target.value)}
//             style={{ marginBottom: '20px' }}
//           />

//           <TextField
//             label="Email"
//             type="email"
//             fullWidth
//             value={newUserEmail}
//             onChange={(e) => setNewUserEmail(e.target.value)}
//             style={{ marginBottom: '20px' }}
//           />

//           <FormControl fullWidth style={{ marginBottom: '20px' }}>
//             <InputLabel>Role</InputLabel>
//             <Select
//               value={newUserRole}
//               onChange={(e) => setNewUserRole(e.target.value)}
//               label="Role"
//             >
//               {roles.map(role => (
//                 <MenuItem key={role} value={role}>
//                   {role}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <FormControl fullWidth style={{ marginBottom: '20px' }}>
//             <InputLabel>Status</InputLabel>
//             <Switch
//               checked={newUserStatus}
//               onChange={handleStatusChange}
//               name="status"
//               color="primary"
//             />
//           </FormControl>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="secondary">
//             Cancel
//           </Button>
//           <Button onClick={handleSaveUser} color="primary">
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default UserManagement;


// src/pages/UserManagement.js
import React from 'react';
import { Container, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const UserManagement = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
  ];

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        User Management
      </Typography>
      <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
        Add User
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="secondary" style={{ marginRight: '10px' }}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UserManagement;
