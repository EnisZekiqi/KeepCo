import {motion} from 'framer-motion'
import {useState} from 'react'



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
        times: [0,, 0.5, 1],
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



const Fast = () => {


    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [isQiteClicked, setIsQiteClicked] = useState(false);

    const handleButtonClick = () => {
      setIsButtonClicked(!isButtonClicked);
      setIsQiteClicked(!isQiteClicked);
    };

    return ( 
        <div className="fasto">
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
            </div>
            <div id='qite'  className={`edited-image ${isQiteClicked ? 'qite-change' : ''}`}  style={{
          transition: "background-color 0.3s easeInOut"
        }} >
            <svg  width="60px" fill="#ffffff" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.5 10c.277 0 .5.223.5.5v3c0 .277-.223.5-.5.5s-.5-.223-.5-.5v-3c0-.277.223-.5.5-.5zm-9 0c.277 0 .5.223.5.5v3c0 .277-.223.5-.5.5s-.5-.223-.5-.5v-3c0-.277.223-.5.5-.5zm-1 10c-.507 0-.653.614-.315.888C10.803 22.243 12.89 23 15 23c2.11 0 4.203-.758 5.82-2.112.484-.404-.15-1.18-.64-.767-1.434 1.2-3.307 1.88-5.176 1.88-1.87 0-3.744-.68-5.176-1.88-.09-.076-.21-.12-.328-.12zM15 0C6.722 0 0 6.722 0 15c0 8.278 6.722 15 15 15 8.278 0 15-6.722 15-15 0-8.278-6.722-15-15-15zm0 1c7.738 0 14 6.262 14 14s-6.262 14-14 14S1 22.738 1 15 7.262 1 15 1z"></path></g></svg>
                </div>
              
            </div>
            <div className="empty4"></div>
            <div className="empty4"></div>
        </div>
     );
}
 
export default Fast;