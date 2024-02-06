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

const BoxShadowEffect = () => {
    const [shadowSize, setShadowSize] = useState(0);

    const handleShadowSizeChange = (event, newValue) => {
        setShadowSize(newValue);
      };

    return ( 
        <div className='d-flex flex-column'>
        <Box sx={{ width: 200 }}>
             <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
             <RemoveCircleOutlineIcon />
             <Slider 
           aria-label="Shadow Size"
           value={shadowSize}
           onChange={handleShadowSizeChange}
           min={0}
           max={20}
           step={1} />
                <AddCircleOutlineIcon  />
            </Stack>
            <img
         id='opcionet2'
         style={{
           transition: 'transform 0.3s, box-shadow 0.3s',
           boxShadow: `inset 5 5 ${shadowSize}px black`,
         }}
          src={mountain}
          alt=""
        />
         </Box>
        </div>
     );
}
 
export default BoxShadowEffect;