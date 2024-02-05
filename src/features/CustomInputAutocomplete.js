import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import mountain from '../images/mountain.jpg'

const options = [
    { label: '300x500', width: 200, height: 100 },
    { label: '200x250', width: 450, height: 250 },
    { label: '200x250', width: 100, height: 100 },
  ];
  

export default function CustomInputAutocomplete() {

    const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event, newValue) => {
    setSelectedOption(newValue);
  };

  return (
    <div className='d-flex flex-column'>
    <label>
      Width & Height:{' '}
      <Autocomplete
        sx={{
          display: 'inline-block',
          '& input': {
            width: 200,
            bgcolor: '#101419',
            color: '#3399ff',
            border: '1px solid #ffffff',
            borderRadius: '10px',
          },
        }}
        id="custom-input-demo"
        options={options}
        value={selectedOption}
        onChange={handleChange}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input type="text" {...params.inputProps} />
          </div>
        )}
      />
    </label>

    <img id='opcionet' style={{ width: selectedOption ? selectedOption.width : '300', height: selectedOption ? selectedOption.height : '300' }} src={mountain} alt="" />
  </div>
  );
}