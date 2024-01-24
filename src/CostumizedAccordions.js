import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  

  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'light'
      ? 'rgba(16, 20, 24, .05)'
      : 'rgba(16, 20, 24, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
    color:'#3399ff'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));




const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  backgroundColor:'#101418'
  
}));



export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false );

  };

  return (
    <div className='hyr' >
      <div className="">
      <input placeholder="Name" class="input-field" type="text"></input>
            <label for="input-field" class="input-label"
            >Name</label>
            <span class="input-highlight"></span>
        </div>
        <div className="devider"></div>
        <div class="input-container">
            <input placeholder="Email" class="input-field" type="text"></input>
            <label for="input-field" class="input-label">Email</label>
            <span class="input-highlight"></span>
        </div>
        <div className="devider"></div>
        <div class="input-container">
            <input placeholder="Question" class="input-field" type="text"></input>
            <label for="input-field2" class="input-label">Question</label>
            <span class="input-highlight"></span>
      </div>
    </div>
  );
}