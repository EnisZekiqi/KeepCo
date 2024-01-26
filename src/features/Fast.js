import {motion,useAnimate} from 'framer-motion'
import {useState} from 'react'
import Edited from '../images/Edited.jpg'



const baza ={
    initial:{
        scale:1
    },
    animate:{
        scale:1.1,
        transition:{
        repeatType: 'reverse',
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity,}
    }
}

const shfaqe ={
    initial:{
        opacity:0,
        scale:0
    },
    animate:{
        scale:1,
        opacity:1,
        transition:{
            duration:0.5,
            ease:"easeInOut"
        }
    }
}



const Fast = ({ fast }) => {


    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [isQiteClicked, setIsQiteClicked] = useState(false);
    const [scope,animate] =useAnimate();


    const handleButtonClick = () => {
      setIsButtonClicked(!isButtonClicked);
      setIsQiteClicked(!isQiteClicked);
        
    };

    const removeEmojiClick = async () =>{
        animate(scope.current,{opacity:1});
    }

    const AddEmojiClick = async () =>{
        animate(scope.current,{opacity:0});
    }


    return ( 
        <div id='fasto' className="fasto">
            <h1>Fast</h1>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Fast website fast work for you</p>
            <h2 style={{marginTop:30}} className='d-flex justify-content-start' > Quickstart</h2>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Fast feature exist to take less time for you to edit or export the files </p>
            <p  className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>For this feature to work you need to have those 3 elements so you can enjoy the best experience</p>
            <div style={{marginTop:30,marginBottom:30}} className="kiki d-flex  flex-row flex-wrap ">
                <motion.div 
                variants={baza}
                initial="initial"
                whileHover="animate"
                className="cardi1 col-lg-4 col-md-6 col-sm-12">
                    <h3 style={{marginTop:10}} className="text-center">20MB</h3>
                    <p style={{width:'fit-content'}} className="text-center">You need to have at least <b className="bold">20MB</b> internet speed for our feature to work</p>
                    <p style={{width:'fit-content' , marginTop:-10}} className="text-center">otherwise this feature will be disabled automaticly </p>
                </motion.div>
                <motion.div
                variants={baza}
                initial="initial"
                whileHover="animate"
                className="cardi2 col-lg-4 col-md-6 col-sm-12 ">
                <h3 style={{marginTop:10}} className="text-center">Secure Internet</h3>
                    <p style={{width:'fit-content'}} className="text-center">Internet needs to be equiped with some type of security like</p>
                    <p style={{width:'fit-content' , marginTop:-10}} className="text-center">Data Loss Prevention (DLP) , Intrusion Prevention Systems (IPS) </p>
                </motion.div>
            </div>
            <h2 style={{marginTop:50}}>Basic</h2>
            <h5 style={{marginTop:30}}>Upload Files Fast</h5>
            <p style={{color:'#bbbbbb'}}>Depending on the file size and the internet we have made a list of average speed of our feature</p>
            <div style={{marginTop:50}} id='vani1' className="veni1 d-flex flex-column">
                <div className="veni1 d-flex">
                <p style={{color:'#3399ff'}}>20MB</p>
            <svg className='lriz' style={{marginLeft:0}} width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <p style={{color:'#3399ff'}}>Avg 0.4s-1s</p>
                </div>
            <motion.div 
            variants={shfaqe}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="veni1 d-flex ">
                <p style={{color:'#bbbbbb'}}>Files fromn 1MB to 100MB</p>
            </motion.div>
            </div>
            <div style={{marginTop:50,marginBottom:50}} className="veni2">
            <div className="veni1 d-flex">
                <p style={{color:'#3399ff'}}>50MB</p>
            <svg className='lriz' style={{marginLeft:0}} width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <p style={{color:'#3399ff'}}>Avg 0.7s-1.2s</p>
                </div>
            <motion.div 
            variants={shfaqe}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="veni1 d-flex ">
                <p style={{color:'#bbbbbb'}}>Files fromn 1MB to 150MB</p>
            </motion.div>
            </div>
            <div style={{MarginTop:50}} className="veni3">
            <div className="veni1 d-flex">
                <p style={{color:'#3399ff'}}>70MB</p>
            <svg className='lriz' style={{marginLeft:0}} width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <p style={{color:'#3399ff'}}>Avg 1s-2.2s</p>
                </div>
            <motion.div 
            variants={shfaqe}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="veni1 d-flex ">
                <p style={{color:'#bbbbbb'}}>Limit 160MB</p>
            </motion.div>
            <h5 style={{marginTop:50}}>Edit Files Fast</h5>
            <p  style={{color:'#bbbbbb'}}>Our Edit system is Fast it applies immediately</p>
            <div className="kinz d-flex">
                <button  className={`background-ch ${isButtonClicked ? 'change' : ''}`} onClick={handleButtonClick} style={{backgroundColor:"#101419",border:"none",marginBottom:50,marginTop:10}}>
                <div className="background-change">
                <svg className='simpleo' viewBox="0 0 48 48" id="a" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> </defs> <g id="b"> <path id="c" class="d" d="m40.5,5.5H7.5c-1.1046,0-2,.8954-2,2v33c0,1.1046.8954,2,2,2h33c1.1046,0,2-.8954,2-2V7.5c0-1.1046-.8954-2-2-2Z"></path> </g> <circle class="d" cx="24" cy="24" r="15"></circle> </g></svg>
                <p style={{color:"#bbbbbb"}}>Background</p>
                </div>
                </button>
                <button  onClick={()=>removeEmojiClick()} style={{backgroundColor:"#101419",border:"none",marginBottom:50,marginTop:10,marginLeft:30}}>
                <div className="background-change">
                <svg  class="simpleo" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="#3399ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M12 7.8v8.4M7.8 12h8.4m4.8 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
                <p style={{color:"#bbbbbb"}}>Add</p>
                </div>
                </button>
                <button  onClick={()=>AddEmojiClick()} style={{backgroundColor:"#101419",border:"none",marginBottom:50,marginTop:10,marginLeft:30}}>
                <div className="background-change">
                <svg className='simpleo' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#3399ff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="32" cy="32" r="24"></circle><line x1="20" y1="32" x2="44" y2="32"></line></g></svg>
                <p style={{color:"#bbbbbb"}}>Remove</p>
                </div>
                </button>
            </div>
            <div id='qite'  className={`edited-image ${isQiteClicked ? 'qite-change' : ''}`}  style={{
          transition: "background-color 0.3s easeInOut"
        }} >
            <svg ref={scope} className='change2' width="60px" fill="#ffffff" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.5 10c.277 0 .5.223.5.5v3c0 .277-.223.5-.5.5s-.5-.223-.5-.5v-3c0-.277.223-.5.5-.5zm-9 0c.277 0 .5.223.5.5v3c0 .277-.223.5-.5.5s-.5-.223-.5-.5v-3c0-.277.223-.5.5-.5zm-1 10c-.507 0-.653.614-.315.888C10.803 22.243 12.89 23 15 23c2.11 0 4.203-.758 5.82-2.112.484-.404-.15-1.18-.64-.767-1.434 1.2-3.307 1.88-5.176 1.88-1.87 0-3.744-.68-5.176-1.88-.09-.076-.21-.12-.328-.12zM15 0C6.722 0 0 6.722 0 15c0 8.278 6.722 15 15 15 8.278 0 15-6.722 15-15 0-8.278-6.722-15-15-15zm0 1c7.738 0 14 6.262 14 14s-6.262 14-14 14S1 22.738 1 15 7.262 1 15 1z"></path></g></svg>
                </div>
            </div>
            <h5 style={{marginTop:50}}>Export Files Fast</h5>
            <p style={{color:'#bbbbbb'}}>Again depending on the file size and interned speed the export can be different</p>
            <div className="expord ">
            <div className="warningu1 d-flex">
            <svg style={{marginTop:10,marginLeft:10}} width="25px" height="25px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"  stroke-width="0.4800000000000001"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" ></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M11 13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V13ZM13 15.9888C13 15.4365 12.5523 14.9888 12 14.9888C11.4477 14.9888 11 15.4365 11 15.9888V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V15.9888ZM9.37735 4.66136C10.5204 2.60393 13.4793 2.60393 14.6223 4.66136L21.2233 16.5431C22.3341 18.5427 20.8882 21 18.6008 21H5.39885C3.11139 21 1.66549 18.5427 2.77637 16.5431L9.37735 4.66136Z" fill="#ffff00"></path> </g></svg>
          <p style={{marginTop:10 ,marginLeft:10, width:'fit-content',height:'fit-content'}}>The reason why we didn't measue the Expord Files is because </p>
            </div>
            <p style={{marginLeft:10, width:'fit-content',height:'fit-content'}}> sometimes the operative system like windows and mac have some safety system </p>
            <p style={{marginLeft:10, width:'fit-content',height:'fit-content'}}>that checks some unnecesary and harful files so the process</p>
            <p style={{marginLeft:10, width:'fit-content',height:'fit-content'}}>might take more time than usual </p>
          </div>
            <div className="empty4"></div>
        </div>
     );
}
 
export default Fast;