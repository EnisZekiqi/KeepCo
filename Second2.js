
import {motion,useAnimate} from 'framer-motion'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import BoltIcon from '@mui/icons-material/Bolt';
import ShieldIcon from '@mui/icons-material/Shield';
import WifiLockIcon from '@mui/icons-material/WifiLock';
import PaidIcon from '@mui/icons-material/Paid';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useRef ,useState} from 'react'
import Tooltip from '@mui/material/Tooltip';







const fadeInAnimationVariants ={
    inital:{
        opacity:0,
        x:0
    },
    animate:{
        opacity:1,
        x:50,
        transition:{duration:1}
    }
}

const fadeIn ={ 
    initial:{
        opacity:0
    },
    animate:{
        opacity:1,
        tranisition:{duration:1},
        transition:{delay:1}

    }

}


const Second2 = () => {


 const [activeContent, setActiveContent] = useState(null);

    const handleButtonClick = (contentId) => {
        setActiveContent(activeContent === contentId ? null : contentId);
      };


    return ( 
        <div className="container">
  <div className="row">
  
    <div className="col-lg-6">
      <motion.p className="features" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>Our Features</motion.p>
      <div className="features2 d-flex">
        <motion.h1 className='pllus' variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>40+</motion.h1>
        <motion.h1 className='pllus2' variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>Features in our website</motion.h1>
      </div>
      <motion.p className='new4' variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>So many Features of KeepCo with high standards of form and function </motion.p>
      <motion.p className='new5' variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{ once: true }}> which allow the user to customize with all the features</motion.p>

      <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} className="contained row">
       
        <div className="llojet col-md-4 col-sm-6">
          <Button onClick={() => handleButtonClick('first')} id='first' className='btn1' variant="outlined" startIcon={<BoltIcon />}>Fast</Button>
          <Button onClick={() => handleButtonClick('second')} id='second' className='btn1' variant="outlined" startIcon={<ShieldIcon />}>Secure</Button>
          <Button onClick={() => handleButtonClick('third')} id='third' className='btn1' variant="outlined" startIcon={< WifiLockIcon />}>Protection</Button>
        </div>
        
        <div className="llojet2 col-md-4 col-sm-6">
          <Button onClick={() => handleButtonClick('fourth')} id='forth' className='btn1' variant="outlined" startIcon={< PaidIcon />}>Free</Button>
          <Button onClick={() => handleButtonClick('fifth')} id='fifth' className='btn1' variant="outlined" startIcon={< AccessibilityIcon />}>Accessible</Button>
          <Button id='six' className='btn1' variant="outlined" startIcon={< MoreHorizIcon />}>Check more</Button>
        </div>
      </motion.div>
    </div>

    
    <div className="outer col-lg-6">
      
      {activeContent === 'first' && (
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 150, damping: 20, duration: 0.5 }} className="fast">
          <h1>Content for Fast</h1>
        </motion.div>
      )}
      
    </div>
  </div>
</div>


     );
}
 
export default Second2;