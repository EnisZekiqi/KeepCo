
import {  useState } from 'react';

import useFetch  from './useFetch';
import InputFileUpload from './InputFileUpload';

import Button from '@mui/material/Button'
import { motion } from 'framer-motion'
import SendIcon from '@mui/icons-material/Send';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import InputFormProps from './InputFormProps';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';



const fadeInView = {

  hidden:{
    opcaity:0,

  },
  visible:{
    opacity:1,
    transition:{
      duration:2,
    }
  }
}

const icon = {
   hidden:{
    opcaity:0,
    pathLength:0,
  },
  visible:{
    opacity:1,
    pathLength:1,
    transition:{duration:2
    },
  }
}






function App() {

  const [selectedId, setSelectedId] = useState(null)

  return (

<div className="general">
<div className="container-fluid d-flex flex-column justify-content-center align-items-center">
 <div style={{marginBottom:100}} className="App d-flex  flex-column">
<motion.h1 
initial={{ opacity: 0 }}
animate={{ opacity:1 }}
transition={{
  duration:2
}}
style={{color:'#ffffff',fontSize:100}}>Keep<bold className='boldd'>Co</bold></motion.h1>
    <div className="second-text text-center d-flex flex-column">
      <motion.p initial={{ opacity: 0 }}
  animate={{ opacity:1 }}
  transition={{
    duration:2
  }}>Ready to use our website then</motion.p>
      <motion.p initial={{ opacity: 0 }}
  animate={{ opacity:1 }}
  transition={{
    duration:2
  }}>Keep your files and your documentations saved here</motion.p>
    </div>

    </div>

      <div className="logoja d-flex justify-content-center align-content-center">
          <AllInclusiveIcon style={{color:'#3399ff',marginTop:5,width:50}}/>
        </div>
</div>



</div>


   
    
  );
}



 
export default App;