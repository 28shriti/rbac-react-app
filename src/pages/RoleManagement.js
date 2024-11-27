// src/pages/RoleManagement.js
import React, { useState } from 'react';
import { Button, Grid, Paper, Typography, TextField, MenuItem, Select, InputLabel, FormControl, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Link } from 'react-router-dom';

const RoleManagement = () => {
  // Mock data for roles and permissions
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
    { id: 3, name: 'Viewer', permissions: ['Read'] },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);
  const [newRoleName, setNewRoleName] = useState('');
  const [newRolePermissions, setNewRolePermissions] = useState([]);

  const handleOpenDialog = (role = null) => {
    setCurrentRole(role);
    setNewRoleName(role ? role.name : '');
    setNewRolePermissions(role ? role.permissions : []);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentRole(null);
  };

  const handleSaveRole = () => {
    if (currentRole) {
      // Edit existing role
      setRoles(roles.map(role => (role.id === currentRole.id ? { ...role, name: newRoleName, permissions: newRolePermissions } : role)));
    } else {
      // Add new role
      setRoles([
        ...roles,
        { id: roles.length + 1, name: newRoleName, permissions: newRolePermissions },
      ]);
    }
    handleCloseDialog();
  };

  const handleDeleteRole = (id) => {
    const confirmation = window.confirm('Are you sure you want to delete this role?');
    if (confirmation) {
      setRoles(roles.filter(role => role.id !== id));
    }
  };

  const handlePermissionChange = (event) => {
    const { value } = event.target;
    setNewRolePermissions(value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Manage Roles
      </Typography>

      <Grid container spacing={3}>
        {/* List of Roles */}
        {roles.map(role => (
          <Grid item xs={12} sm={6} md={4} key={role.id}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h6">{role.name}</Typography>
              <Typography variant="body2">Permissions: {role.permissions.join(', ')}</Typography>

              <Button
                variant="contained"
                color="primary"
                onClick={() => handleOpenDialog(role)}
                style={{ marginTop: '10px', width: '100%' }}
              >
                Edit
              </Button>

              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDeleteRole(role.id)}
                style={{ marginTop: '10px', width: '100%' }}
              >
                Delete
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Button to Add New Role */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenDialog()}
        style={{ marginTop: '20px' }}
      >
        Add New Role
      </Button>

      {/* Dialog for Adding/Editing Role */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{currentRole ? 'Edit Role' : 'Add New Role'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Role Name"
            fullWidth
            value={newRoleName}
            onChange={(e) => setNewRoleName(e.target.value)}
            style={{ marginBottom: '20px' }}
          />

          <FormControl fullWidth style={{ marginBottom: '20px' }}>
            <InputLabel>Permissions</InputLabel>
            <Select
              multiple
              value={newRolePermissions}
              onChange={handlePermissionChange}
              label="Permissions"
            >
              <MenuItem value="Read">Read</MenuItem>
              <MenuItem value="Write">Write</MenuItem>
              <MenuItem value="Delete">Delete</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveRole} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RoleManagement;
