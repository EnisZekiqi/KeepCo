import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import {motion,useAnimate} from 'framer-motion';
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';



const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
      borderLeft: '1px solid ',
    },
}));


export default function CustomizedDividers() {

    const [scope,animate] =useAnimate();

const startContent = async () =>{
    animate(scope.current,{marginRight:300});
  
}

const centerContent = async () =>{
    animate(scope.current,{marginLeft:150});
  
}
const [isButtonClicked, setIsButtonClicked] = useState(null);

  const handleButtonClick = (contentId) => {
    setIsButtonClicked(contentId);
  };




  const [alignment, setAlignment] = React.useState('start');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          border: '1px solid rgba(187, 187, 187,0.5)',
          flexWrap: 'wrap',
          backgroundColor:'#101419'
        }}
      >
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
            <Tooltip title="Text-Start" placement="bottom">
            <ToggleButton  className={`btn2 ${isButtonClicked === 'first' ? 'functionn' : ''}`}  onClick={() => handleButtonClick('first')} style={{color:'#3399ff'}} value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
            </Tooltip>
            <Tooltip title="Text-Center" placement="bottom">
            <ToggleButton className={`btn2 ${isButtonClicked === 'second' ? 'functionn' : ''}`} onClick={() => handleButtonClick('second')} style={{color:'#3399ff'}} value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
            </Tooltip>
            <Tooltip title="Text-Center" placement="bottom">
            <ToggleButton className={`btn2 ${isButtonClicked === 'third' ? 'functionn' : ''}`} onClick={() => handleButtonClick('third')} style={{color:'#3399ff'}} value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
            </Tooltip>

          <ToggleButton  style={{color:'#3399ff'}} value="justify" aria-label="justified">
            <FormatAlignJustifyIcon />
          </ToggleButton>

        </StyledToggleButtonGroup>
        <Divider style={{color:'#3399ff'}} flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
             <Tooltip title="Bold" placement="bottom">
             <ToggleButton className={`btn2 ${isButtonClicked === 'four' ? 'functionn' : ''}`} onClick={() => handleButtonClick('four')} style={{color:'#3399ff'}} value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
             </Tooltip>
             <Tooltip title="Italic" placement="bottom">
             <ToggleButton className={`btn2 ${isButtonClicked === 'five' ? 'functionn' : ''}`} onClick={() => handleButtonClick('five')} style={{color:'#3399ff'}} value="italic" aria-label="italic">
            <FormatItalicIcon />
            </ToggleButton>
             </Tooltip>
             <Tooltip title="Underline" placement="bottom">
             <ToggleButton className={`btn2 ${isButtonClicked === 'six' ? 'functionn' : ''}`} onClick={() => handleButtonClick('six')} style={{color:'#3399ff'}} value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
            </ToggleButton>
             </Tooltip>
          
          <ToggleButton style={{color:'#3399ff'}} value="color" aria-label="color">
            <FormatColorFillIcon />
            <ArrowDropDownIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
      <div style={{marginTop:40}} className="d-flex justify-content-center">
        <h5 className={`btno ${isButtonClicked === 'first' ? 'function2' : ''} ${isButtonClicked === 'second' ? 'function3' : ''}${isButtonClicked === 'third' ? 'function4' : ''} ${isButtonClicked === 'four' ? 'function5' : ''} ${isButtonClicked === 'five' ? 'function6' : ''} ${isButtonClicked === 'six' ? 'function7' : ''}`}
        
        >Text</h5>
      </div>
    </div>
  );
}