// src/components/Users/AddUser.js
import React, { useState } from 'react';
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, FormHelperText, Grid, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const AddUser = ({ roles, addUser }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    role: '',
    status: 'Active',
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!userData.name) newErrors.name = 'Name is required';
    if (!userData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(userData.email)) newErrors.email = 'Email is invalid';
    if (!userData.role) newErrors.role = 'Role is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Generate a unique ID for the user (this can be done server-side in real apps)
      const newUser = { id: uuidv4(), ...userData };
      addUser(newUser);
      setUserData({ name: '', email: '', role: '', status: 'Active' });
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Add New User
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* User Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={userData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          
          {/* User Email */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={userData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          
          {/* User Role */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth error={!!errors.role}>
              <InputLabel>Role</InputLabel>
              <Select
                label="Role"
                name="role"
                value={userData.role}
                onChange={handleChange}
              >
                {roles.map((role) => (
                  <MenuItem key={role.name} value={role.name}>
                    {role.name}
                  </MenuItem>
                ))}
              </Select>
              {errors.role && <FormHelperText>{errors.role}</FormHelperText>}
            </FormControl>
          </Grid>

          {/* User Status */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                label="Status"
                name="status"
                value={userData.status}
                onChange={handleChange}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add User
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddUser;
