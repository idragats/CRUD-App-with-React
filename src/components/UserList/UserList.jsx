import React, { useState } from 'react';
import { Button, Box, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function DataTable({ users, onDeleteUsers }) {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleCheckboxChange = (userId) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(userId)
        ? prevSelectedIds.filter((id) => id !== userId)
        : [...prevSelectedIds, userId]
    );
  };

  const handleDelete = () => {
    onDeleteUsers(selectedIds);
    setSelectedIds([]);
  };

  return (
    <Box>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleDelete}
        disabled={selectedIds.length === 0}
        style={{ marginBottom: '10px' }}
      >
        Delete Selected
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Select</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedIds.includes(user.id)}
                    onChange={() => handleCheckboxChange(user.id)}
                  />
                </TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}