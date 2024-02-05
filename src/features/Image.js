import CropIcon from '@mui/icons-material/Crop';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import mountain from '../images/mountain.jpg'
import VignetteIcon from '@mui/icons-material/Vignette';
import { motion,useAnimate } from 'framer-motion';
import { useState } from 'react';
import CustomInputAutocomplete from './CustomInputAutocomplete';
import RotateRight from './RotateRight';
import RotateLeft from './RotateLeft';

const Image = () => {

    const [scope,animate]=useAnimate();
    const [scope2,animate2]=useAnimate();
    const [scope3,animate3]=useAnimate();


    const startContent = async () =>{
        animate(scope.current,{opacity:1 ,display:'block' , transition:{duration:1}})
        animate2(scope2.current,{opacity:0 ,display:'',transition:{duration:1}})
        animate3(scope3.current,{opacity:0 ,display:'',transition:{duration:1}})
    }
    const startContent2 = async () =>{
        animate2(scope2.current,{opacity:1 ,display:'block' ,transition:{duration:1}})
        animate(scope.current,{opacity:0, display:'', transition:{duration:1}})
        animate3(scope3.current,{opacity:0 ,display:'',transition:{duration:1}})
    }

const startContent3 = async () =>{
    animate2(scope2.current,{opacity:0,display:'' ,transition:{duration:1}})
    animate(scope.current,{opacity:0, display:'', transition:{duration:1}})
    animate3(scope3.current,{opacity:1 ,display:'block',transition:{duration:1}})
}
    return ( 
        <div className="imageo">
            <h1>Image</h1>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Costumize Images with lots of features</p>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>which are devided in :  <b style={{marginLeft:5}} className='bold'> Essentials</b>  <b style={{marginLeft:5,marginRight:5}} className='bold'> Effects </b>  and  <b style={{marginLeft:5}} className='bold'> Graphics </b>   </p>
            <h2 style={{marginTop:30}} className='d-flex justify-content-start' > Essentials</h2>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>It is used for editing the structure of the image </p>
            <div className="d-flex flex-column">
                <div style={{marginTop:20}} className="d-flex">
                <CropIcon style={{color:'#3399ff',marginRight:20}}/> 
                <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Can Crop the Image of your choice </p>
                </div>
                <div className="d-flex">
                <RotateRightIcon style={{color:'#3399ff',marginRight:20}}/> 
                <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Rotates Image to 90 degree to the right</p>
                </div>
                <div className="d-flex">
                <RotateLeftIcon style={{color:'#3399ff',marginRight:20}}/> 
                <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Rotates Image to 90 degree to the left </p>
                </div>
                <div className="d-flex">
                <WaterDropIcon style={{color:'#3399ff',marginRight:20}}/> 
                <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Adds blur to the image </p>
                </div>
                <div className="d-flex">
                <VignetteIcon style={{color:'#3399ff',marginRight:20}}/> 
                <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Apply round radius to the image</p>
                </div>
            </div>
            <h2 style={{marginTop:30}} className='d-flex justify-content-start' > Editing Image</h2>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Apply any of the features on the image</p>
            <div style={{marginTop:50}} className="d-flex flex-column">
                <div className="d-flex justify-content-center">
                <button onClick={()=> startContent()}  className="edit0image">
                <CropIcon style={{color:'#3399ff',marginRight:10}}/> 
                </button>
                <button onClick={()=> startContent2()} className="edit0image">
                <RotateRightIcon style={{color:'#3399ff',marginRight:10}}/> 
                </button>
                <button  onClick={()=> startContent3()} className="edit0image">
                <RotateLeftIcon style={{color:'#3399ff',marginRight:10}}/> 
                </button>
                <button className="edit0image">
                <WaterDropIcon style={{color:'#3399ff',marginRight:10}}/> 
                </button>
                <button className="edit0image">
                <VignetteIcon style={{color:'#3399ff',marginRight:30}}/> 
                </button>
                </div>

                <div style={{marginTop:30}} className="hiddenn d-flex justify-content-center ">
                    <div id='mshefur' ref={scope} className="">
                    <CustomInputAutocomplete/>
                    </div>
                    <div id='mshefur' ref={scope2} className="">
                    <RotateRight/>
                    </div>
                    <div id='mshefur' ref={scope3} className="">
                    <RotateLeft/>
                    </div>
                </div>
            </div>
            <div className="empty4"></div>
        </div>
     );
}
 
export default Image;