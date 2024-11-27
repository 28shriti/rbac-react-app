// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import UserManagement from './pages/UserManagement';
// import RoleManagement from './pages/RoleManagement';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/users" element={<UserManagement />} />
//         <Route path="/roles" element={<RoleManagement />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';

import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import RoleManagement from './pages/RoleManagement';

function App() {
  return (
    <Router>
      <div>
        {/* Header with navigation */ }
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              RBAC Dashboard
            </Typography>
            <Button color="inherit" href="/">Dashboard</Button>
            <Button color="inherit" href="/Users">User Management</Button>
            <Button color="inherit" href="/Roles">Role Management</Button>
          
          </Toolbar>
        </AppBar>

        {/* Main content */}
        <Container style={{ marginTop: '20px' }}>
          <Routes>
            {/* Define routes for each page */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/Users" element={<UserManagement />} />
            <Route path="/Roles" element={<RoleManagement />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;

