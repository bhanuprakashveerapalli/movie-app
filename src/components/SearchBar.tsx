// src/components/SearchBar.tsx
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface SearchBarProps {
  onSearch: (title: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [title, setTitle] = useState('');

  const handleSearch = () => {
    onSearch(title);
  };

  return (
    <Box display="flex" justifyContent="center" mb={4}>
      <TextField
        label="Search Movies"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch} style={{ marginLeft: 8 }}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
