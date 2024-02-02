import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [change,setChange]=useState(null);

  const changeFont =(contentId)=>{
    setChange(contentId);
    setAnchorEl(null);
  }

  return (
    <div className='d-flex'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Fonts
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem id='arial'onClick={()=>changeFont('arial')} >Arial</MenuItem>
        <MenuItem id='tahoma' onClick={()=>changeFont('tahoma')}>Tahoma</MenuItem>
        <MenuItem id='georgia' onClick={()=>changeFont('georgia')}>Georgia</MenuItem>
        <MenuItem id='Garamond ' onClick={()=>changeFont('Garamond')}>Verdana</MenuItem>
        <MenuItem  id='NewRoman' onClick={()=>changeFont('NewRoman')}>New Roman</MenuItem>
      </Menu>
      <h4 className={`btno ${change === 'arial' ? 'arial2' : ''}${change === 'tahoma' ? 'tahoma2' : ''}${change === 'georgia' ? 'georgia2' : ''}${change === 'Garamond' ? 'Garamond2' : ''}${change === 'NewRoman' ? 'NewRoman2' : ''}`}>Font Change</h4>
    </div>
  );
}