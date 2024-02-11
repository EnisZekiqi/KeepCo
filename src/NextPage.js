import React, { useState,useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Button from '@mui/material/Button';
import {motion ,useAnimate} from 'framer-motion'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Fast from './features/Fast';
import Secure from './features/Secure';
import Protection from './features/Protection';
import Edit from './features/Edit'
import Image from './features/Image'
import Effects from './features/Effects';
import Graphics from './features/Graphics';
const varianti={
    initial :{
        y:-20,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        tranisition:{
            duration:1,
            staggerChildren:0.3
        }
    }

}

const NextPage = ({ goBackToHomePage  }) => {



    const [activeContent, setActiveContent] = useState('first');
    const [isButtonClicked, setIsButtonClicked] =useState('uno')
    

    const handleButtonClick = (contentId) => {
        setActiveContent(activeContent === contentId ? null : contentId);
        setIsButtonClicked(contentId);
       
      };



      


    const [showDrawer, setShowDrawer] = useState(window.innerWidth <= 700);
    const [showBackdrop, setShowBackdrop] = useState(false);


  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
    setShowBackdrop(!showBackdrop);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowDrawer(window.innerWidth <= 700);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return ( 
        <div style={{ marginTop: 10 }} >
          <div className="empty5"></div>
      <AppBar  sx={{ backgroundColor: '#101419' }} position="fixed">
        <Toolbar>
          <div className="gg">
          <IconButton  style={{ color:'#3399ff' }} sx={{ Color: '#3399ff' }} aria-label="open drawer" edge="start" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          </div>
          <div className="gg2">
          <IconButton  style={{ color:'#3399ff' }} sx={{ Color: '#3399ff' }} aria-label="open drawer" edge="start" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          </div>
          <div className="gg3">
          <Typography style={{  fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#ffffff',
              textDecoration: 'none', }} sx={{ Color: '#3399ff' }}  variant="h6" noWrap component="div">
           <a style={{  fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#ffffff',
              textDecoration: 'none', }} href="/">KeepCo</a>
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
      {showBackdrop && <div className="backdrop2" onClick={toggleDrawer}>
        
        </div>}
        <div className="ovealli d-flex justify-content-between">
        {showDrawer ? (
        <Drawer color='#101419' goBackToHomePage={goBackToHomePage} />
      ) : (
        <div className='llojet-features d-flex'>
            <div style={{color:'#3399ff'}} className="ulo d-flex justify-content-start">
            <ul style={{listStyleType:'none',marginRight:50,marginLeft:25}}>
              <motion.li
              variants={varianti}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              ><h5 style={{color:'#3399ff',marginLeft:10}}>Getting started</h5></motion.li>
            <motion.li variants={varianti}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}> <Button style={{marginBottom:10,marginTop:10}} id='first'  className={`btn2 ${isButtonClicked === 'first' ? 'function' : ''}`}  onClick={() => handleButtonClick('first')} color='secondary' variant="text">
                Overview
              </Button></motion.li>
            <motion.li variants={varianti}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}>
                    <Button style={{marginBottom:20}} id='second'  className={`btn2 ${isButtonClicked === 'second' ? 'function' : ''}`}   onClick={() => handleButtonClick('second')} color='secondary' variant="text">
                Usage
              </Button>
                </motion.li>
                <motion.li
              variants={varianti}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              ><h5 style={{color:'#3399ff',marginLeft:5}}>General</h5></motion.li>
            <motion.li variants={varianti}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}>
                    <Button style={{marginBottom:10,marginTop:10}} id='third'  className={`btn2 ${isButtonClicked === 'third' ? 'function' : ''}`}   onClick={() => handleButtonClick('third')} color='secondary' variant="text">
                Fast
              </Button>
                </motion.li>
            <motion.li variants={varianti}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}>
                    <Button style={{marginBottom:10}}  id='four'  className={`btn2 ${isButtonClicked === 'four' ? 'function' : ''}`}   onClick={() => handleButtonClick('four')} color='secondary' variant="text">
                Secure
              </Button>
                </motion.li>
            <motion.li variants={varianti}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}>
                    <Button id='five' style={{marginBottom:20}} className={`btn2 ${isButtonClicked === 'five' ? 'function' : ''}`} onClick={() => handleButtonClick('five')} color='secondary' variant="text">
                Protection
              </Button>
                </motion.li>
                <motion.li
              variants={varianti}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              ><h5 style={{color:'#3399ff',marginLeft:10}}>Editor</h5></motion.li>
            <motion.li variants={varianti}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}>
                    <Button id='six' style={{marginBottom:10,marginTop:10}} className={`btn2 ${isButtonClicked === 'six' ? 'function' : ''}`} onClick={() => handleButtonClick('six')} color='secondary' variant="text">
                Text
              </Button>
                </motion.li>
            <motion.li variants={varianti}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}><Button id='seven' style={{marginBottom:10}} className={`btn2 ${isButtonClicked === 'seven' ? 'function' : ''}`} onClick={() => handleButtonClick('seven')} color='secondary' variant="text">
                Image
              </Button></motion.li>
            <motion.li variants={varianti}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}><Button id='eight' style={{marginBottom:10}} className={`btn2 ${isButtonClicked === 'eight' ? 'function' : ''}`} onClick={() => handleButtonClick('eight')}  color='secondary' variant="text">
                Effects
              </Button></motion.li>
            <motion.li variants={varianti}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}>
                    <Button id='nine' style={{marginBottom:10}} className={`btn2 ${isButtonClicked === 'nine' ? 'function' : ''}`} onClick={() => handleButtonClick('nine')}  color='secondary' variant="text">
                Graphics
              </Button>
                </motion.li>
              
        </ul>
            </div>
    </div>
      )}
      <div style={{marginTop:10}} className='hello'>

      {activeContent === 'first' && (
        <motion.div
        initial={{ opacity:0 }}
         animate={{ opacity: 1 }}
        transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration:2
  }}
        id='first' className='container-xxl' style={{color:'#ffffff'}}> 
        <h1 className='d-flex justify-content-start'>KeepCo - Overview</h1>
        <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>KeepCo is an open-source File saver that impements in every windows , mac or any other device</p>
        <h2 style={{marginTop:30}} className='d-flex justify-content-start' >Introduction</h2>
        <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>KeepCo was formed in 2012 in Kosovo by Enis Zekiqi , it was formed in order to make the life of many people easier </p>
        <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>KeepCo needed 4 years to be fully developed , even now we make improvements  </p>
        <h2 style={{marginTop:30}} className='d-flex justify-content-start' >Why choose us</h2>
        <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>When we first launched we were the first one in the market to create such a website and company </p>
        <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>so we got more experience in every aspect of this category</p>
       <div className="empty4"></div>
        </motion.div>
      )}
        <div className="hello2">
        {activeContent === 'second' && (
          <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity: 1 }}
         transition={{
         type: "spring",
         stiffness: 300,
         damping: 30,
         duration:2
         }}
          id='second' className='container-xxl' style={{color:'#ffffff'}}> 
          <h1 className='d-flex justify-content-start'>Usage</h1>
          <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Learn the basics of working with KeepCo</p>
          <h2 style={{marginTop:30}} className='d-flex justify-content-start' > Quickstart</h2>
          <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>After looking in the website you know why you are here </p>
          <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>we can show you a simple example for you to understand better </p>
          <div style={{marginTop:30}} className='example d-flex align-items-center justify-content-start' >
            <div className=" d-flex flex-column">
            <svg className='tist1' style={{marginLeft:30}} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H12M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125" stroke="#3399ff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.5 21L17.5 15M17.5 15L20 17.5M17.5 15L15 17.5" stroke="#3399ff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <p className='ttist1' style={{marginLeft:30 }}>Upload File</p>
            </div>
            <div className="arrow">
            <svg className='tist1' style={{marginLeft:30}} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#3399ff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            <div className="editi">
            <svg className='tist1' style={{marginLeft:30}} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#3399ff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#3399ff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <p className='ttist1' style={{marginLeft:30 }}>Edit File</p>
            </div>
            <div className="arrow">
            <svg className='tist1' style={{marginLeft:30}} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#3399ff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            <div className="savirate">
            <svg className='tist1' style={{marginLeft:30}} width="50px" height="50px" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
    <path stroke="#3399ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 1v4a1 1 0 0 1-1 1H1m4 6 2 2 4-4m4-8v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z"/>
  </svg>
  <p className='ttist1' style={{marginLeft:30 }}>Save File</p>
            </div>
            <div className="arrow">
            <svg className='tist1' style={{marginLeft:30}} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#3399ff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            <div className="expor">
            <svg className='tist1' style={{marginLeft:30}} width="50px" height="50px" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="#3399ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 6V2a.97.97 0 0 0-.933-1H5.828a2 2 0 0 0-1.414.586L1.586 4.414A2 2 0 0 0 1 5.828V18a.969.969 0 0 0 .933 1H14a1 1 0 0 0 1-1M6 1v4a1 1 0 0 1-1 1H1m6 6h9m-1.939-2.768L16.828 12l-2.767 2.768"/>
  </svg>
  <p className='ttist1' style={{marginLeft:20 }}>Export File</p>

            </div>
          </div>
          <p className='d-flex justify-content-start' style={{color:'#bbbbbb',marginTop:20}}>First step is Uploading files because this is all about files Upload Files and edit the files </p>
          <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}> with our tools after that save the file you edited and you can export whenever you want</p>
          <div className="warningu container-xl">
            <div className="warningu1 d-flex">
            <svg style={{marginTop:10}} width="25px" height="25px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"  stroke-width="0.4800000000000001"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" ></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M11 13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V13ZM13 15.9888C13 15.4365 12.5523 14.9888 12 14.9888C11.4477 14.9888 11 15.4365 11 15.9888V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V15.9888ZM9.37735 4.66136C10.5204 2.60393 13.4793 2.60393 14.6223 4.66136L21.2233 16.5431C22.3341 18.5427 20.8882 21 18.6008 21H5.39885C3.11139 21 1.66549 18.5427 2.77637 16.5431L9.37735 4.66136Z" fill="#ffff00"></path> </g></svg>
          <p style={{marginTop:10 ,marginLeft:10, width:'fit-content',height:'fit-content'}}>When Uploading a file be careful what you are uploading ,the file must have some </p>
            </div>
            <p style={{marginLeft:10, width:'fit-content',height:'fit-content'}}>conditions like must be at least between <b className='yellowi'>10MB</b>  and <b className='yellowi'>200MB</b> otherwise the tools won't work </p>
            <p style={{marginLeft:10, width:'fit-content',height:'fit-content'}}>and also the file need to be those types <b className='yellowi'>JEPG</b> , <b className='yellowi'>PNG</b>, <b className='yellowi'>GIF</b>, <b className='yellowi'>PDF</b>, <b className='yellowi'>SVG</b> </p>
            <p style={{marginLeft:10, width:'fit-content',height:'fit-content'}}>we want the best experience for you so we want to avoid the worst case scenario </p>
          </div>
          </motion.div>
        )}
        
      </div>
      <div className="hello3">
        {activeContent === 'third' && (
          <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity: 1 }}
         transition={{
         type: "spring",
         stiffness: 300,
         damping: 30,
         duration:2
         }}
          id='third' className='container-xxl' style={{color:'#ffffff'}}> 
         <Fast/>
          </motion.div>
        )}
        </div>

        <div className="hello4">
        {activeContent === 'four' && (
          <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity: 1 }}
         transition={{
         type: "spring",
         stiffness: 300,
         damping: 30,
         duration:2
         }}
          id='four' className='container-xxl' style={{color:'#ffffff'}}> 
         <Secure/>
          </motion.div>
        )}
        </div>
        <div className="hello5">
        {activeContent === 'five' && (
          <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity: 1 }}
         transition={{
         type: "spring",
         stiffness: 300,
         damping: 30,
         duration:2
         }}
          id='four' className='container-xxl' style={{color:'#ffffff'}}> 
         <Protection/>
          </motion.div>
        )}
        </div>
        <div className="hello6">
        {activeContent === 'six' && (
          <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity: 1 }}
         transition={{
         type: "spring",
         stiffness: 300,
         damping: 30,
         duration:2
         }}
          id='four' className='container-xxl' style={{color:'#ffffff'}}> 
         <Edit/>
          </motion.div>
        )}
        </div>
        <div className="hello7">
        {activeContent === 'seven' && (
          <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity: 1 }}
         transition={{
         type: "spring",
         stiffness: 300,
         damping: 30,
         duration:2
         }}
          id='four' className='container-xxl' style={{color:'#ffffff'}}> 
         <Image/>
          </motion.div>
        )}
        </div>
        <div className="hello8">
        {activeContent === 'eight' && (
          <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity: 1 }}
         transition={{
         type: "spring",
         stiffness: 300,
         damping: 30,
         duration:2
         }}
          id='four' className='container-xxl' style={{color:'#ffffff'}}> 
         <Effects/>
          </motion.div>
        )}
        </div>
        <div className="hello9">
        {activeContent === 'nine' && (
          <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity: 1 }}
         transition={{
         type: "spring",
         stiffness: 300,
         damping: 30,
         duration:2
         }}
          id='four' className='container-xxl' style={{color:'#ffffff'}}> 
         <Graphics/>
          </motion.div>
        )}
        </div>
      </div>
      
         </div>

    </div>
     );
}
 
export default NextPage;