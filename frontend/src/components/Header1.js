import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';


const Header1 = () => {
  const [selectedItem, setSelectedItem] = useState('ADMIN');

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const circleStyle = {
    width: '58px',
    height: '58px',
    backgroundColor: 'blue',
    borderRadius: '50%',
    marginLeft: '10px', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
  
    
  };

  return (
    <Box display="flex" justifyContent="flex-end" height="100px" width="95%">
      <div className="" style={containerStyle}>
        <div className="">
          <Select
            style={{ fontFamily: "Satoshi, sans-serif",fontWeight: 'bold', border:'none' }}
            label="Select an Item"
            value={selectedItem}
            onChange={handleChange}
            MenuProps={{
              MenuListProps: {
                autoFocus: false,
              },
            }}
          >
            <MenuItem value="ADMIN">ADMIN</MenuItem>
            <MenuItem value="USER">USER</MenuItem>
          </Select>
        </div>

        <div style={circleStyle}>
          {/* Content inside the circle goes here */}
        </div>
      </div>
    </Box>
  );
};

export default Header1;
