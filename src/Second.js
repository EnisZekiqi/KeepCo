
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
import { Link, NavLink } from 'react-router-dom';
import NextPage from './NextPage';
import Fast from './features/Fast'






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

const Second = ({ navigateToNextPage   }) => {



    const [activeContent, setActiveContent] = useState('first');

    const handleButtonClick = (contentId) => {
        setActiveContent(activeContent === contentId ? null : contentId);
      };



    return ( 
        <div id='Features' className="info d-lg-flex  justfiy-content-lg-evenly ">

            <div className="inner col-md-6 col-lg-auto mb-3 mb-lg-0">
            <motion.p   className="features" 
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            > Our Features</motion.p>
            <div className=" features2 d-flex">
            <motion.h1 className='pllus'  variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            >40+</motion.h1>
            <motion.h1 className='pllus2'  variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            >Features in our website</motion.h1>
            </div>
            <motion.p className='new4' variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            >So many Features of KeepCo with high standards of form and function </motion.p>
            <motion.p className='new5' variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            > which allow the user to costumize with all the features</motion.p>

           <motion.div variants={fadeIn}
           initial="initial"
           whileInView="animate"
           viewport={{ once: true }}
           className="contained row ">
           <div className="llojet mb-2 ">

           <Button  onClick={() => handleButtonClick('first')} id='first' className='btn1' variant="outlined" startIcon={<BoltIcon />}>Fast</Button>
           <Button   onClick={() => handleButtonClick('second')}  id='second' className='btn1' variant="outlined" startIcon={<ShieldIcon />}>Secure</Button>
           <Button onClick={() => handleButtonClick('third')}  id='third' className='btn1' variant="outlined" startIcon={< WifiLockIcon />}> Protection</Button>
            </div>
            <div className="llojet2  ">
            <Button  onClick={() => handleButtonClick('fourth')} id='forth' className='btn1' variant="outlined" startIcon={< PaidIcon />}>Free</Button>
            <Button onClick={() => handleButtonClick('fifth')} id='fifth' className='btn1' variant="outlined" startIcon={< AccessibilityIcon />}>Accessible</Button>
             
              <Button onClick={() => navigateToNextPage()} className='btn1' variant="outlined" startIcon={< MoreHorizIcon />}>Check more</Button>
              
            </div>
            </motion.div> 

            </div>
            <div className="empty3"></div>
            
        <div className="outer col-md-6 col-lg-auto">
 
        {activeContent === 'first' && (
          <motion.div
          initial={{ scale: 0,opacity:0 }}
          animate={{ opacity:1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            duration:0.5
          }}
          className="fast">
            <h1 className='fasti text-center'> <BoltIcon /> Fast </h1>
            <div className="securi2 text-center">
              <p>A fast working website means</p>
              <p>timesaving for you and </p>
              <p>multiple solution even if you make a mistake </p>
              <motion.div  whileHover={{scale:1.2}}
              whileTap={{scale:0.8}}
              className="mori1 text-center">
              <Button  onClick={() => navigateToNextPage()} variant="text" startIcon={<MoreHorizIcon />}>More Info</Button>
              </motion.div>
            </div>
          </motion.div>
        )}

{activeContent === 'second' && (
          <motion.div
          initial={{ scale: 0,opacity:0 }}
          animate={{ opacity:1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            duration:0.5
          }}
          className="secure">
            <h1 className='securi text-center'> <ShieldIcon /> Secure </h1>
            <div className="securi2 text-center">
              <p>Providing Security is neccesary that's why</p>
              <p>our security is constantly improving</p>
              <p>for adding comfort and security to you </p>
              <motion.div  whileHover={{scale:1.2}}
              whileTap={{scale:0.8}}
              className="mori1 text-center">
              <Button onClick={() => navigateToNextPage()} variant="text" startIcon={<MoreHorizIcon />}>More Info</Button>
              </motion.div>
            </div>
          </motion.div>
        )}

{activeContent === 'third' && (
          <motion.div
          initial={{ scale: 0,opacity:0 }}
          animate={{ opacity:1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            duration:0.5
          }}
           className="protection">
             <h1 className='protecti text-center'> <WifiLockIcon /> Protection </h1>
             <div className="securi2 text-center">
              <p>Protecting and security are two </p>
              <p>different features so this feature</p>
              <p>protects your wifi security</p>
              <motion.div  whileHover={{scale:1.2}}
              whileTap={{scale:0.8}}
              className="mori1 text-center">
              <Button onClick={() => navigateToNextPage()} variant="text" startIcon={<MoreHorizIcon />}>More Info</Button>
              </motion.div>
            </div>
          </motion.div>
        )}

{activeContent === 'fourth' && (
          <motion.div
          initial={{ scale: 0,opacity:0 }}
          animate={{ opacity:1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            duration:0.5
          }}
          className="free">
            <h1 className='freei text-center'> <PaidIcon /> Free </h1>
            <div className="securi2 text-center">
              <p>Our website is free </p>
              <p>meaning that all of our features</p>
              <p>are free to the users  </p>
              <motion.div  whileHover={{scale:1.2}}
              whileTap={{scale:0.8}}
              className="mori1 text-center">
              <Button onClick={() => navigateToNextPage()} variant="text" startIcon={<MoreHorizIcon />}>More Info</Button>
              </motion.div>
            </div>
          </motion.div>
        )}

{activeContent === 'fifth' && (
          <motion.div
          initial={{ scale: 0,opacity:0 }}
          animate={{ opacity:1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            duration:0.5
          }}
          className="accessible">
           <h1 className='accessiblei text-center'> <AccessibilityIcon /> Accessible </h1>
           <div className="securi2 text-center">
              <p>You can costumize in a lot</p>
              <p>of things in our website incuding</p>
              <p>features,files and much more</p>
              <motion.div  whileHover={{scale:1.2}}
              whileTap={{scale:0.8}}
              className="mori1 text-center">
              <Button onClick={() => navigateToNextPage()} variant="text" startIcon={<MoreHorizIcon />}>More Info</Button>
              </motion.div>
            </div>
          </motion.div>
        )}



    

        </div>
           
           
          
          


        </div>
     );
}
 
export default Second;