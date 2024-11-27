// src/components/Roles/AddRole.js
import React, { useState } from 'react';
import { Button, TextField, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

const AddRole = ({ addRole }) => {
  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState({
    Read: false,
    Write: false,
    Delete: false,
  });

  // Handle changes in the role name input
  const handleRoleNameChange = (e) => {
    setRoleName(e.target.value);
  };

  // Handle changes in the permissions checkboxes
  const handlePermissionChange = (e) => {
    const { name, checked } = e.target;
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [name]: checked,
    }));
  };

  // Handle form submission to add the role
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the new role object
    const newRole = {
      name: roleName,
      permissions: Object.keys(permissions).filter((perm) => permissions[perm]),
    };

    // Call the addRole function passed as a prop
    addRole(newRole);

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
        Add New Role
      </Typography>

      <form onSubmit={handleSubmit}>
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
        <Button variant="contained" color="primary" type="submit">
          Add Role
        </Button>
      </form>
    </div>
  );
};

export default AddRole;
