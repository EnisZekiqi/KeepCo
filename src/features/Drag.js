import { useRef, useState } from "react";
import { motion,useAnimate } from "framer-motion";
import RotateRightIcon from '@mui/icons-material/RotateRight';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CropIcon from '@mui/icons-material/Crop';
import VignetteIcon from '@mui/icons-material/Vignette';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import LightModeIcon from '@mui/icons-material/LightMode';
import ExposureIcon from '@mui/icons-material/Exposure';
import ContrastIcon from '@mui/icons-material/Contrast';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Edited from '../images/Edited.jpg'
import BoltIcon from '@mui/icons-material/Bolt';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import CloudIcon from '@mui/icons-material/Cloud';
import CycloneIcon from '@mui/icons-material/Cyclone';
import HeadsetIcon from '@mui/icons-material/Headset';
import MosqueIcon from '@mui/icons-material/Mosque';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SensorsIcon from '@mui/icons-material/Sensors';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import TsunamiIcon from '@mui/icons-material/Tsunami';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const shfaqe ={
    initial:{
        opacity:0,
        x:-100
    },
    animate:{
        opacity:1,
        x:0,
        transition: {
            opacity: { duration: 0.5, ease: "easeInOut" }, // Opacity transition
            x: { duration: 0.5, ease: "easeInOut" }, // Movement transition
          },
    }
}
const qelu = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: {
        opacity: { duration: 2, ease: "easeInOut" }, // Opacity transition
        x: { duration: 2, ease: "easeInOut" }, // Movement transition
      },
  };

const Drag = () => {

    const [scope,animate] =useAnimate();
    const [scope2,animate2] =useAnimate();
    const [scope3,animate3] =useAnimate();
    const [scope4,animate4] =useAnimate();
    const [scope5,animate5] =useAnimate();


    const [IsButtonClicked,setIsButtonClicked]=useState("first");
    const [activeButton, setActiveButton] = useState("first");

    const shfaqe2 = (contentId) => {
        setActiveButton(activeButton === contentId ? null : contentId);
        setIsButtonClicked(contentId);
      };

      const [iconOrder, setIconOrder] = useState(['Brightness', 'Exposure', 'Contrast', 'Blur', 'Box-shadow']);

      const onDragEnd = (result) => {
        if (!result.destination) return;
    
        const newOrder = Array.from(iconOrder);
        const [reorderedItem] = newOrder.splice(result.source.index, 1);
        newOrder.splice(result.destination.index, 0, reorderedItem);
    
        setIconOrder(newOrder);
      };

    const constraintsRef = useRef(null);
    const constraintsRef2 = useRef(null);

    return ( 
        <div>
            <h1>Drag</h1>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>You can costumize the editor bar so you can drag</p>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>the features in your favourite place </p>
            <h2 style={{marginTop:30}}>Quickstart</h2>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Drag the features of editor how you prefer </p>
            <div style={{ position: "relative" }} className=" d-flex ">
            <div className="containerr">
                <div style={{marginTop:10}} className="text-editor" >
                <svg class="texticon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"/>
                </svg>
                </div>
                <div className="text-editor" >
                <svg class="texticon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#3399ff" viewBox="0 0 24 24">
                <path stroke="#3399ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3"/>
                </svg>
                </div>
                <div className="text-editor">
                <svg class="texticon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#3399ff" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M13 10c0-.6.4-1 1-1a1 1 0 1 1 0 2 1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M2 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12c0 .6-.2 1-.6 1.4a1 1 0 0 1-.9.6H4a2 2 0 0 1-2-2V6Zm6.9 12 3.8-5.4-4-4.3a1 1 0 0 0-1.5.1L4 13V6h16v10l-3.3-3.7a1 1 0 0 0-1.5.1l-4 5.6H8.9Z" clip-rule="evenodd"/>
                </svg>
                </div>
                <div className="text-editor">
                <svg class="texticon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18.8 4H5.2a1 1 0 0 0-.7 1.7l5.3 6 .2.7v4.8c0 .2 0 .4.2.4l3 2.3c.3.2.8 0 .8-.4v-7.1c0-.3 0-.5.2-.7l5.3-6a1 1 0 0 0-.7-1.7Z"/>
                </svg>
                </div>
                <div className="text-editor">
                <svg class="texticon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h0M9 9h0m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM7 13c0 1 .5 2.4 1.5 3.2a5.5 5.5 0 0 0 7 0c1-.8 1.5-2.2 1.5-3.2 0 0-2 1-5 1s-5-1-5-1Z"/>
                </svg>
                </div>
                <div

                className="list-text text-center">
                    <button className="kk2" id="first" onClick={()=>shfaqe2("first")} >
                    <h6  className={`kk1 ${IsButtonClicked === 'first' ? 'clicked4' : ''}`} style={{marginTop:35,}}>Essentials</h6>
                    </button>

                    <button id="second" onClick={()=>shfaqe2("second")} className="kk2">
                    <h6 className={`kk1 ${IsButtonClicked === 'second' ? 'clicked4' : ''}`} style={{marginTop:20}}>Text</h6>
                    </button>

                    <button id="third" onClick={()=>shfaqe2("third")}  className="kk2">
                    <h6 className={`kk1 ${IsButtonClicked === 'third' ? 'clicked4' : ''}`} style={{marginTop:20}}>Image</h6>
                    </button>
                  
                    <button  id="four" onClick={()=>shfaqe2("four")} className="kk2">
                    <h6 className={`kk1 ${IsButtonClicked === 'four' ? 'clicked4' : ''}`} style={{marginTop:20}}>Effects</h6>
                    </button>

                    <button  id="five" onClick={()=>shfaqe2("five")} className="kk2">
                    <h6 className={`kk1 ${IsButtonClicked === 'five' ? 'clicked4' : ''}`} style={{marginTop:20}}>Graphics</h6>
                    </button>
                </div>
            </div>
            <div className="ndreqi d-flex flex-column">
            <DragDropContext onDragEnd={onDragEnd}>
      {activeButton === "first" && (
        <Droppable droppableId="droppable-1">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {iconOrder.map((iconId, index) => (
                <Draggable key={iconId} draggableId={iconId} index={index}>
                  {(provided) => (
                    <div style={{width:'fitContent',height:'fitContent'}}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <motion.div
                        variants={qelu}
                        initial="initial"
                        animate="animate"
                        className="essenciall d-flex flex-column"
                      >
                        <div style={{ marginTop: 20 }} className="d-flex justify-content-center mt-8">
                          {iconId === 'Brightness' && <LightModeIcon style={{ color: '#3399ff' }} />}
                          {iconId === 'Exposure' && <ExposureIcon style={{ color: '#3399ff' }} />}
                          {iconId === 'Contrast' && <ContrastIcon style={{ color: '#3399ff' }} />}
                          {iconId === 'Blur' && <WaterDropIcon style={{ color: '#3399ff' }} />}
                          {iconId === 'Box-shadow' && <VignetteIcon style={{ color: '#3399ff' }} />}
                          <p style={{ marginLeft: 2 }}>{iconId}</p>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
      {/* Add other Droppable components for other activeButtons if needed */}
    </DragDropContext>
                      {activeButton === "second" && (
                         <motion.div
                         variants={qelu}
                         initial="initial"
                         animate="animate"
                         className="texori d-flex flex-column">
                            <div style={{marginTop:20}} className="d-flex justify-content-center mt-8">
                        <FormatAlignLeftIcon style={{color:'#3399ff'}}/>
                        <p style={{marginLeft:2}}>Start</p>
                      </div>
                      <div style={{marginTop:10}} className="d-flex justify-content-center mt-8">
                        <FormatAlignCenterIcon style={{color:'#3399ff'}}/>
                        <p style={{marginLeft:2}}>Center</p>
                      </div>
                      <div style={{marginTop:10}} className="d-flex justify-content-center mt-8">
                        <FormatAlignRightIcon style={{color:'#3399ff'}}/>
                        <p style={{marginLeft:2}}>End</p>
                      </div>
                      <div style={{marginTop:10}} className="d-flex justify-content-center mt-8">
                        <FormatColorFillIcon style={{color:'#3399ff'}}/>
                        <p style={{marginLeft:2}}>Color </p>
                      </div>
                      <div style={{marginTop:10}} className="d-flex justify-content-center mt-8">
                        <FormatItalicIcon style={{color:'#3399ff'}}/>
                        <p style={{marginLeft:2}}>Font</p>
                      </div>
                        </motion.div>
                        )}
                     {activeButton === "third" && (
                         <motion.div 
                         variants={qelu}
                         initial="initial"
                         animate="animate"
                         className="maskoff">
                             <div style={{marginTop:20}} className="d-flex justify-content-center mt-8">
                        <CropIcon style={{color:'#3399ff'}}/>
                        <p style={{marginLeft:2}}>Crop</p>
                      </div>
                      <div style={{marginTop:10}} className="d-flex justify-content-center mt-8">
                        <RotateRightIcon style={{color:'#3399ff'}}/>
                        <p style={{marginLeft:2}}>Rotate Right</p>
                      </div>
                      <div style={{marginTop:10}} className="d-flex justify-content-center mt-8">
                        <RotateLeftIcon  style={{color:'#3399ff'}}/>
                        <p style={{marginLeft:2}}>Rotate Left</p>
                      </div>
                      <div style={{marginTop:10}} className="d-flex justify-content-center mt-8">
                        <AspectRatioIcon style={{color:'#3399ff'}}/>
                        <p style={{marginLeft:2}}>Aspect Ratio</p>
                      </div>
                      <div style={{marginTop:10}} className="d-flex justify-content-center mt-8">
                        <AutoFixHighIcon style={{color:'#3399ff'}}/>
                        <p style={{marginLeft:2}}>AutoFix</p>
                      </div>
                        </motion.div>
                        )}
                     {activeButton === "four" && (
                         <motion.div 
                         variants={qelu}
                         initial="initial"
                         animate="animate"
                         className="collori">
                          <div style={{marginTop:15}} className="image-container7 d-flex">
                            <img id='blackwhite' style={{ width: 30, height: 30, marginRight: 5 }} src={Edited} alt="" />
                            <p style={{fontSize:12,marginTop:5}}>Rainy Tones</p>
                          </div>
                          <div style={{marginTop:15}} className="image-container8  d-flex">
                                <img id='blackwhite' style={{ width: 30, height: 30, marginRight: 5 }} src={Edited} alt="" />
                                <p style={{fontSize:12,marginTop:5}}>Old Photos</p>
                            </div>
                          <div style={{marginTop:15}} className="image-container9  d-flex">
                            <img id='blackwhite' style={{ width: 30, height: 30, marginRight: 5 }} src={Edited} alt="" />
                            <p style={{fontSize:12,marginTop:5}}>Clr Pinhole</p>
                         </div>
                         <div style={{marginTop:15}} className="image-container6  d-flex">
                            <img id='blackwhite' style={{ width: 30, height: 30, marginRight: 5 }} src={Edited} alt="" />
                            <p style={{fontSize:12,marginTop:5}}>Rainy Tones</p>
                         </div>
                         <div style={{marginTop:15}} className="image-container4  d-flex">
                            <img id='blackwhite' style={{ width: 30, height: 30, marginRight: 5 }} src={Edited} alt="" />
                            <p style={{fontSize:12,marginTop:5}}>Rainy Tones</p>
                         </div>
                        </motion.div>
                        )}
                    {activeButton === "five" && (
                         <motion.div 
                         variants={qelu}
                         initial="initial"
                         animate="animate"
                         className="emojiii">
                            <div style={{marginTop:17}} className="d-flex  justify-content-center">
                              <BoltIcon/> 
                              <p>Bolt</p>
                            </div>
                            <div className="d-flex  justify-content-center">
                              <BrightnessHighIcon/>
                              <p style={{marginLeft:2,fontSize:14}}>Sun</p>
                            </div>
                            <div className="d-flex  justify-content-center ">
                              <CloudIcon/>
                              <p style={{marginLeft:2,fontSize:14}}>Cloud</p>
                            </div>
                            <div className="d-flex  justify-content-center">
                              <CycloneIcon/>
                              <p style={{marginLeft:2,fontSize:14}}>Cyclone</p>
                            </div>
                            <div className="d-flex justify-content-center ">
                              <HeadsetIcon/>
                              <p style={{marginLeft:2,fontSize:14}}>Headset</p>
                            </div>
                            <div className="d-flex  justify-content-center">
                                <MosqueIcon/>
                                <p style={{marginLeft:2,fontSize:14}}>Mosque</p>
                            </div>
                            <div className="d-flex  justify-content-center">
                              <FitnessCenterIcon/>
                              <p style={{marginLeft:2,fontSize:14}}>Fitness</p>
                            </div>
                            <div className="d-flex  justify-content-center">
                              <RocketLaunchIcon/>
                              <p style={{marginLeft:2,fontSize:14}}>Rocket</p>
                            </div>
                            <div className="d-flex  justify-content-center">
                              <TsunamiIcon/>
                              <p style={{marginLeft:2,fontSize:14}}>Tsunami</p>
                            </div>
                            <div className="d-flex justify-content-center">
                              <VpnKeyIcon/>
                              <p style={{marginLeft:2,fontSize:14}}>Key</p>
                            </div>
                            <div className="d-flex justify-content-center">
                              <ThunderstormIcon/>
                              <p style={{marginLeft:2,fontSize:14}}>Thunder</p>
                            </div>
                        </motion.div>
                        )}
                </div>
            </div>
            <div className="empty4"></div>
            <div className="empty4"></div>
        </div>
     );
}
 
export default Drag;