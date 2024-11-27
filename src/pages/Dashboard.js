// src/pages/Dashboard.js
import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = ({ users, roles }) => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Users Overview */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6">Users Overview</Typography>
            <Typography variant="h4">{users.length}</Typography>
            <Button
              component={Link}
              to="/users"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '10px' }}
            >
              Manage Users
            </Button>
          </Paper>
        </Grid>

        {/* Roles Overview */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6">Roles Overview</Typography>
            <Typography variant="h4">{roles.length}</Typography>
            <Button
              component={Link}
              to="/roles"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '10px' }}
            >
              Manage Roles
            </Button>
          </Paper>
        </Grid>

        {/* Other Features (Optional) */}
        {/* You can add more grid items here for additional stats or alerts */}

      </Grid>

      {/* Quick Access Links */}
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            component={Link}
            to="/users"
            variant="contained"
            color="secondary"
            fullWidth
          >
            View All Users
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            component={Link}
            to="/roles"
            variant="contained"
            color="secondary"
            fullWidth
          >
            View All Roles
          </Button>
        </Grid>
        {/* Add more quick action buttons here */}
      </Grid>
    </div>
  );
};

export default Dashboard;
