import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";


const Career = () => {
    const[isClicked,setIsClicked]=useState(false)

    const showClick = async (contentId)=>{
    setIsClicked(contentId)
    }

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
    
      const opacity ={
        initial:{opacity:0},
        animate:{opacity:1,
        transition:{
            duration:1,type: "spring", stiffness: 100,
        }
        }
      }


    return ( 
        <div>
            <h1>Career</h1>
            <div style={{marginTop:50}} className="row">
                <div style={{width:'fit-content'}} className="d-flex flex-column col">
                    <h1>SKILLED AND <b className="bold">DEDICATED</b> EFFICIEND AND <b className="bold">FOCUSED</b></h1>
                </div>
                <div style={{fontSize:18}} className="col">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloribus accusamus sit nisi eius asperiores debitis et error autem facilis!
                    Architecto doloribus accusamus sit nisi eius asperiores debitis et error autem facilisus sit nisi eius asperiores debitis et error au
                    </p>
                </div>
            </div>
            <h1 style={{marginTop:100}} className="text-center">Available Positions</h1>
            <div style={{marginTop:50}} className="d-flex flex-column">
                <div style={{borderBottom:'1px solid #bbbbbb'}} className="positon1 d-flex justify-content-between">
                    <button id="position1" onClick={()=>showClick('position1')} style={{backgroundColor:'transparent',border:'none'}}>
                    <div className="d-flex flex-column">
                    <h2 style={{color:'#ffffff'}}>Marketing Expert</h2>
                    <p className="text-start" style={{color:'#bbbbbb',fontSize:14}}>
                        18/12/2023
                    </p>
                    </div>
                    </button>
                    <motion.div
                     initial={{opacity:0 }}
                     whileInView={{opacity:1}}
                     transition={{
                      duration:1,
                    }}
                    className={`showedposition1 ${isClicked === 'position1' ? 'showedposition1x' : ''} ${isClicked === 'removeposition1' ? 'showedposition1' : ''}`}>
                    <div className="d-flex  justify-content-evenly">
                    <from  >
                    <input placeholder="Name" class="input-field" type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    ></input>
                    <label for="input-field" class="input-label"
                    >First Name</label>
                    </from>
                    <from >
                    <input placeholder="Name" class="input-field" type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    ></input>
                    <label for="input-field" class="input-label"
                    >Last Name</label>
                    </from>
                    </div>    
                    <div className="d-flex justify-content-evenly">
                    <Button style={{marginTop:20}} id="removepostion1" onClick={()=>showClick('removepositon1')} className="xcx" variant="outlined">Show Less</Button>
                    <Button style={{marginTop:20}} id="removepostion1" onClick={()=>showClick('removepositon1')} className="xcx" variant="outlined">Apply Now</Button>
                    </div>
                    </motion.div>
                </div>
                <div style={{borderBottom:'1px solid #bbbbbb',marginTop:20}} className="positon1 d-flex justify-content-between">
                    <button id="position1" onClick={()=>showClick('position1')} style={{backgroundColor:'transparent',border:'none'}}>
                    <div className="d-flex flex-column">
                    <h2 style={{color:'#ffffff'}}>Front-End Developer</h2>
                    <p className="text-start" style={{color:'#bbbbbb',fontSize:14}}>
                        23/11/2023
                    </p>
                    </div>
                    </button>
                    <motion.div
                     initial={{opacity:0 }}
                     whileInView={{opacity:1}}
                     transition={{
                      duration:1,
                    }}
                    className={`showedposition1 ${isClicked === 'position1' ? 'showedposition1x' : ''} ${isClicked === 'removeposition1' ? 'showedposition1' : ''}`}>
                    <div className="d-flex  justify-content-evenly">
                    <from  >
                    <input placeholder="Name" class="input-field" type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    ></input>
                    <label for="input-field" class="input-label"
                    >First Name</label>
                    </from>
                    <from >
                    <input placeholder="Name" class="input-field" type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    ></input>
                    <label for="input-field" class="input-label"
                    >Last Name</label>
                    </from>
                    </div>    
                    <div className="d-flex justify-content-evenly">
                    <Button style={{marginTop:20}} id="removepostion1" onClick={()=>showClick('removepositon1')} className="xcx" variant="outlined">Show Less</Button>
                    <Button style={{marginTop:20}} id="removepostion1" onClick={()=>showClick('removepositon1')} className="xcx" variant="outlined">Apply Now</Button>
                    </div>
                    </motion.div>
                </div>
                <div style={{borderBottom:'1px solid #bbbbbb',marginTop:20}} className="positon1 d-flex justify-content-between">
                    <button id="position1" onClick={()=>showClick('position1')} style={{backgroundColor:'transparent',border:'none'}}>
                    <div className="d-flex flex-column">
                    <h2 style={{color:'#ffffff'}}>Service Contact (2x)</h2>
                    <p className="text-start" style={{color:'#bbbbbb',fontSize:14}}>
                        27/11/2023
                    </p>
                    </div>
                    </button>
                    <motion.div
                     initial={{opacity:0 }}
                     whileInView={{opacity:1}}
                     transition={{
                      duration:1,
                    }}
                    className={`showedposition1 ${isClicked === 'position1' ? 'showedposition1x' : ''} ${isClicked === 'removeposition1' ? 'showedposition1' : ''}`}>
                    <div className="d-flex  justify-content-evenly">
                    <from  >
                    <input placeholder="Name" class="input-field" type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    ></input>
                    <label for="input-field" class="input-label"
                    >First Name</label>
                    </from>
                    <from >
                    <input placeholder="Name" class="input-field" type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    ></input>
                    <label for="input-field" class="input-label"
                    >Last Name</label>
                    </from>
                    </div>    
                    <div className="d-flex justify-content-evenly">
                    <Button style={{marginTop:20}} id="removepostion1" onClick={()=>showClick('removepositon1')} className="xcx" variant="outlined">Show Less</Button>
                    <Button style={{marginTop:20}} id="removepostion1" onClick={()=>showClick('removepositon1')} className="xcx" variant="outlined">Apply Now</Button>
                    </div>
                    </motion.div>
                </div>
            </div>
            <div className="empty4"></div>
        </div>
     );
}
 
export default Career;