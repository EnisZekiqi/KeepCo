import * as React from 'react';
import Button from '@mui/material/Button'
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import {motion} from 'framer-motion'
import Files from './images/Files.svg'
import Filess from './images/Filess.svg'
import FilesOnly from './images/FilesOnly.svg'
import LastFiles from './images/LastFiles.svg'
import Character from './images/Character.svg'

const icon = {
  hidden: {
    opacity:0,
    pathLength: 0,
    
  },
  visible: {
    opacity:1,
    pathLength: 1,
    
  }
}

export default function InputFormProps() {
  return (
 <div className="signup d-flex">

<motion.img
animate={{
  
  y:[-10,10,],
}}
transition={{
  repeatType: 'reverse',
  duration: 2,
  ease: "easeInOut",
  times: [0, 0.2, 0.5, 0.8, 1],
  repeat: Infinity,
  }}
className='filess' src={LastFiles} alt="" />
<img className='character' src={Character} alt="" />
  
 </div>
  );
}