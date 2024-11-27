// src/services/api.js
const mockUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
  ];
  
  export const getUsers = () => Promise.resolve({ data: mockUsers });
  