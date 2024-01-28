import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function BadgeVisibility() {
  
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="secondary" variant="dot" invisible={!invisible}>
          <YouTubeIcon style={{color:'#3399ff'}} />
        </Badge>
        <FormControlLabel
          sx={{ color: '#ffffff' }}
          control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
          label="Enable Protection"
        />
      </div>
    </Box>
  );
}