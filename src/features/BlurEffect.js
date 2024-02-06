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

const BlurEffect = () => {
    const [value, setValue] = useState(0);
    const [blur, setBlur] = useState(0);

    const handleBlurChange = (event, newValue) => {
        setBlur(newValue);
      };

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return ( 
        <div className='d-flex flex-column'>
        <Box sx={{ width: 200 }}>
             <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
             <RemoveCircleOutlineIcon />
             <Slider aria-label="Blur"
          value={blur}
          onChange={handleBlurChange}
          min={0}
          max={10}
          step={1} />
                <AddCircleOutlineIcon  />
            </Stack>
            <img
          id='opcionet2'
          style={{
            transition: 'transform 0.3s, filter 0.3s',
            filter: `blur(${blur}px)`,
          }}
          src={mountain}
          alt=""
        />
         </Box>
        </div>
     );
}
 
export default BlurEffect;