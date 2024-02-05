import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Typography from '@mui/material/Typography';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';
import mountain from '../images/mountain.jpg'
const RotateLeft = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return ( 
        <div className='d-flex flex-column'>
        <Box sx={{ width: 200 }}>
             <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
             <RemoveCircleOutlineIcon />
             <Slider aria-label="Volume" value={value} onChange={handleChange} />
                <AddCircleOutlineIcon  />
            </Stack>
             <img  id='opcionet2'  style={{ fontSize: `${value}px`, transition: 'transform 0.3s', transform: `rotate(${-value}deg)` }} src={mountain} alt="" />
         </Box>
        </div>
     );
}
 
export default RotateLeft;