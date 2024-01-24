
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {motion} from "framer-motion"
import { useInView } from "framer-motion"
import {useRef,useState,useEffect} from "react"


const varianti={
    initial :{
        y:100,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        tranisition:{
            duration:3,
            
        }
    }

}

const icon = {
    hidden: {
        opacity:0,
      pathLength: 0,
    
    },
    visible: {
        opacity:1,
      pathLength: 1,
     tranisition:{duration:3}
    }
  }


function Contact() {
   
       
    const [inputValue, setInputValue] = useState('');
    const [showError, setShowError] = useState(false);
    const [success, setSuccess] = useState(false);
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSubmit = () => {
      if (inputValue.trim() === '') {
        setShowError(true);
        setSuccess(false);
      } else {
        // Perform submission logic or API call
        setShowError(false);
        setSuccess(true);
        setInputValue(''); // Clear input after submission, if needed
      }
      
    };


    useEffect(() => {
        if (success) {
          // Set timeout to reset success after 3 seconds
          const timeout = setTimeout(() => {
            setSuccess(false);
          }, 3000);
    
          return () => clearTimeout(timeout);
        }
      }, [success]);
  
  return (
    <>
    <div className="forma">
     <motion.div initial={{opacity:1}}
        whileInView={{opacity:0}}
        transition={{delay:3 , duration:3}}
        className="phone-svg">
       
       <motion.svg 
       variants={varianti}
       initial="initial"
       whileInView="animate" 
       viewport={{ once: true }}
       class="svg-icon" color="primary" viewBox="0 0 20 20">
		<motion.path initial={{pathLength:0}}
        animate={ {pathLength:1}}
        transition={{duration:3}}
        d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z" fill="#3399ff"   ></motion.path>
		</motion.svg>
     </motion.div>

<motion.div 

initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{delay:4 , duration:3}}
className="uji">
<div class="input-container">
            <from >
            <input placeholder="Name" class="input-field" type="text"
            value={inputValue}
            onChange={handleInputChange}
            ></input>
            <label for="input-field" class="input-label"
            >Name</label>
            <span class="input-highlight"></span>
            </from>
        </div>
        <div className="devider"></div>
        <div class="input-container">
            <input placeholder="Email" class="input-field" type="text"></input>
            <label for="input-field" class="input-label">Email</label>
            <span class="input-highlight"></span>
        </div>
        <div className="devider"></div>
        <div class="input-container">
            <input placeholder="Question" class="input-field" type="text"></input>
            <label for="input-field2" class="input-label">Question</label>
            <span class="input-highlight"></span>
        </div>
        <div className="devider"></div>
        <div className="submiti text-center">
        {showError && <motion.p  
         initial={{ opacity:0 }}
         animate={{ opacity:1}}
         transition={{
           type: "spring",
           stiffness: 260,
           damping: 20,
           duration:1
         }}
         className='error' >Please fill the empty space!</motion.p>}

        <Button onClick={handleSubmit} id='submiti' variant="outlined">Submit</Button>
        {success &&  
         
         <div className="dd">

            <div className="d-flex flex-column">
            <motion.svg width="150px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill=""></rect> 
       <motion.path variants={icon}
      initial="hidden"
      animate="visible" d="M5 13.3636L8.03559 16.3204C8.42388 16.6986 9.04279 16.6986 9.43108 16.3204L19 7" stroke="#3399ff" stroke-linecap="round" stroke-linejoin="round"></motion.path>
        </g></motion.svg>
                <p className='success-message' >Success</p>  
            </div>
       
                
         </div>
        }
        </div>
</motion.div>
     
    </div>
    
      
    </>
  );
}

export default Contact;