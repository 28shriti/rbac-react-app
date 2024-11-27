// src/components/Roles/EditRole.js
import React, { useState, useEffect } from 'react';
import { Button, TextField, Checkbox, FormControlLabel, FormGroup, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const EditRole = ({ roles, updateRole }) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState({
    Read: false,
    Write: false,
    Delete: false,
  });

  // Initialize state with selected role details
  useEffect(() => {
    if (selectedRole) {
      const role = roles.find((role) => role.name === selectedRole);
      setRoleName(role.name);
      setPermissions((prevPermissions) => {
        const newPermissions = { ...prevPermissions };
        role.permissions.forEach((permission) => {
          if (newPermissions.hasOwnProperty(permission)) {
            newPermissions[permission] = true;
          }
        });
        return newPermissions;
      });
    }
  }, [selectedRole, roles]);

  // Handle selection of role to edit
  const handleRoleSelection = (e) => {
    setSelectedRole(e.target.value);
  };

  // Handle role name change
  const handleRoleNameChange = (e) => {
    setRoleName(e.target.value);
  };

  // Handle permission changes
  const handlePermissionChange = (e) => {
    const { name, checked } = e.target;
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [name]: checked,
    }));
  };

  // Handle form submission to update the role
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the updated role object
    const updatedRole = {
      name: roleName,
      permissions: Object.keys(permissions).filter((perm) => permissions[perm]),
    };

    // Call the updateRole function passed as a prop
    updateRole(selectedRole, updatedRole);

    // Reset form
    setRoleName('');
    setPermissions({
      Read: false,
      Write: false,
      Delete: false,
    });
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Edit Role
      </Typography>

      {/* Role Selection */}
      <FormControl fullWidth style={{ marginBottom: '20px' }}>
        <InputLabel>Select Role</InputLabel>
        <Select
          value={selectedRole}
          onChange={handleRoleSelection}
          label="Select Role"
          required
        >
          {roles.map((role) => (
            <MenuItem key={role.name} value={role.name}>
              {role.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Role Name Input */}
      <TextField
        label="Role Name"
        variant="outlined"
        fullWidth
        value={roleName}
        onChange={handleRoleNameChange}
        style={{ marginBottom: '20px' }}
        required
      />

      {/* Permissions Checkboxes */}
      <FormGroup style={{ marginBottom: '20px' }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={permissions.Read}
              onChange={handlePermissionChange}
              name="Read"
            />
          }
          label="Read"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={permissions.Write}
              onChange={handlePermissionChange}
              name="Write"
            />
          }
          label="Write"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={permissions.Delete}
              onChange={handlePermissionChange}
              name="Delete"
            />
          }
          label="Delete"
        />
      </FormGroup>

      {/* Submit Button */}
      <Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
        Save Changes
      </Button>
    </div>
  );
};

export default EditRole;
