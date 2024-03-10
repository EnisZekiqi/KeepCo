import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
const Career = () => {
    const[isClicked,setIsClicked]=useState(false)

    const showClick = async (contentId)=>{
    setIsClicked(contentId)
    }

    
      const opacity ={
        initial:{opacity:0},
        animate:{opacity:1,
        transition:{
            duration:1,type: "spring", stiffness: 100,
        }
        }
      }
      const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        age: '',
        country: '',
        phone: '',
        email: '',
      });
      const [lastApplication, setLastApplication] = useState(null);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = () => {
        setLastApplication(formData);
        // You can perform any additional actions here, like sending the data to a server
      };

      const [showLastApplication,setShowLastApplication]=useState(false)
      useEffect(() => {
        if (lastApplication) {
          const timer = setTimeout(() => {
            setShowLastApplication(true);
          }, 2000); // 2 seconds delay
          return () => clearTimeout(timer);
        }
      }, [lastApplication]);
    
      const handleHideLastApplication = () => {
        setShowLastApplication(false);
      };
    
  

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
                       <form>
                       <div style={{gap:20 ,marginLeft:-30,marginTop:30}} className="d-flex" >
                        <div className="d-flex flex-column">
                        <label htmlFor="firstname">First Name:</label><br />
                        <input style={{color:'white',backgroundColor:'#101419',marginTop:-10}} className="llabellat" type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} /><br />
                        </div>
                        <div className="d-flex flex-column">
                          <label htmlFor="lastname">Last Name:</label><br />
                         <input style={{color:'white',marginTop:-10}} className="llabellat" type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} /><br />
                        </div>  
                        </div>
                    <div style={{gap:20 ,marginLeft:-30}} className="d-flex">
                    <div className="d-flex flex-column">
                    <label htmlFor="age">Age:</label><br />
                    <input style={{color:'white',marginTop:-10}} className="llabellat" type="number" id="age" name="age" value={formData.age} onChange={handleChange} /><br />
                    </div>
                    <div className="d-flex flex-column">
                    <label htmlFor="country">Country:</label><br />
                    <input style={{color:'white',marginTop:-10}} className="llabellat" type="text" id="country" name="country" value={formData.country} onChange={handleChange} /><br />
                    </div>
                    </div>
                    <div style={{gap:20,marginLeft:-30}}  className="d-flex">
                    <div className="d-flex flex-column">
                    <label htmlFor="phone">Phone:</label><br />
                    <input style={{color:'white',marginTop:-10}} className="llabellat" type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} /><br />
                    </div>
                    <div className="d-flex flex-column">
                    <label htmlFor="email">Email:</label><br />
                    <input style={{color:'white',marginTop:-10}} className="llabellat" type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br /><br />
                    </div>
                    </div>
                    <div className="upload-cs">
                      <h4>Upload CV</h4>
                    </div>
                    <div className="d-flex justify-content-evenly">
                    <Button style={{marginTop:20}} id="removepostion1" onClick={()=>showClick('removepositon1')} className="xcx" variant="outlined">Show Less</Button>
                    <Button style={{marginTop:20}} id="removepostion1"  onClick={handleSubmit} className="xcx" variant="outlined">Apply Now</Button>
                    </div>
                       </form>
                    </motion.div>
                </div>
                <div style={{borderBottom:'1px solid #bbbbbb',marginTop:20}} className="positon1 d-flex justify-content-between">
                    <button id="position2" onClick={()=>showClick('position2')} style={{backgroundColor:'transparent',border:'none'}}>
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
                    className={`showedposition1 ${isClicked === 'position2' ? 'showedposition1x' : ''} ${isClicked === 'removeposition2' ? 'showedposition1' : ''}`}>
                    <form>
                       <div style={{gap:20 ,marginLeft:-30,marginTop:30}} className="d-flex" >
                        <div className="d-flex flex-column">
                        <label htmlFor="firstname">First Name:</label><br />
                        <input style={{color:'white',backgroundColor:'#101419',marginTop:-10}} className="llabellat" type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} /><br />
                        </div>
                        <div className="d-flex flex-column">
                          <label htmlFor="lastname">Last Name:</label><br />
                         <input style={{color:'white',marginTop:-10}} className="llabellat" type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} /><br />
                        </div>  
                        </div>
                    <div style={{gap:20 ,marginLeft:-30}} className="d-flex">
                    <div className="d-flex flex-column">
                    <label htmlFor="age">Age:</label><br />
                    <input style={{color:'white',marginTop:-10}} className="llabellat" type="number" id="age" name="age" value={formData.age} onChange={handleChange} /><br />
                    </div>
                    <div className="d-flex flex-column">
                    <label htmlFor="country">Country:</label><br />
                    <input style={{color:'white',marginTop:-10}} className="llabellat" type="text" id="country" name="country" value={formData.country} onChange={handleChange} /><br />
                    </div>
                    </div>
                    <div style={{gap:20,marginLeft:-30}}  className="d-flex">
                    <div className="d-flex flex-column">
                    <label htmlFor="phone">Phone:</label><br />
                    <input style={{color:'white',marginTop:-10}} className="llabellat" type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} /><br />
                    </div>
                    <div className="d-flex flex-column">
                    <label htmlFor="email">Email:</label><br />
                    <input style={{color:'white',marginTop:-10}} className="llabellat" type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br /><br />
                    </div>
                    </div>
                       </form>
                    <div className="upload-cs">
                      <h4>Upload CV</h4>
                    </div> 
                    <div className="d-flex justify-content-evenly">
                    <Button style={{marginTop:20}} id="removepostion2" onClick={()=>showClick('removepositon2')} className="xcx" variant="outlined">Show Less</Button>
                    <Button style={{marginTop:20}} id="removepostion2" onClick={()=>showClick('removepositon2')} className="xcx" variant="outlined">Apply Now</Button>
                    </div>
                    </motion.div>
                </div>
                <div style={{borderBottom:'1px solid #bbbbbb',marginTop:20}} className="positon1 d-flex justify-content-between">
                    <button id="position3" onClick={()=>showClick('position3')} style={{backgroundColor:'transparent',border:'none'}}>
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
                    className={`showedposition1 ${isClicked === 'position3' ? 'showedposition1x' : ''} ${isClicked === 'removeposition3' ? 'showedposition1' : ''}`}>
                    <form>
                       <div style={{gap:20 ,marginLeft:-30,marginTop:30}} className="d-flex" >
                        <div className="d-flex flex-column">
                        <label htmlFor="firstname">First Name:</label><br />
                        <input style={{color:'white',backgroundColor:'#101419',marginTop:-10}} className="llabellat" type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} /><br />
                        </div>
                        <div className="d-flex flex-column">
                          <label htmlFor="lastname">Last Name:</label><br />
                         <input style={{color:'white',marginTop:-10}} className="llabellat" type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} /><br />
                        </div>  
                        </div>
                    <div style={{gap:20 ,marginLeft:-30}} className="d-flex">
                    <div className="d-flex flex-column">
                    <label htmlFor="age">Age:</label><br />
                    <input style={{color:'white',marginTop:-10}} className="llabellat" type="number" id="age" name="age" value={formData.age} onChange={handleChange} /><br />
                    </div>
                    <div className="d-flex flex-column">
                    <label htmlFor="country">Country:</label><br />
                    <input style={{color:'white',marginTop:-10}} className="llabellat" type="text" id="country" name="country" value={formData.country} onChange={handleChange} /><br />
                    </div>
                    </div>
                    <div style={{gap:20,marginLeft:-30}}  className="d-flex">
                    <div className="d-flex flex-column">
                    <label htmlFor="phone">Phone:</label><br />
                    <input style={{color:'white',marginTop:-10}} className="llabellat" type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} /><br />
                    </div>
                    <div className="d-flex flex-column">
                    <label htmlFor="email">Email:</label><br />
                    <input style={{color:'white',marginTop:-10}} className="llabellat" type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br /><br />
                    </div>
                    </div>
                       </form>
                    <div className="upload-cs">
                      <h4>Upload CV</h4>
                    </div> 
                    <div className="d-flex justify-content-evenly">
                    <Button style={{marginTop:20}} id="removepostion3" onClick={()=>showClick('removepositon3')} className="xcx" variant="outlined">Show Less</Button>
                    <Button style={{marginTop:20}} id="removepostion3" onClick={()=>showClick('removepositon3')} className="xcx" variant="outlined">Apply Now</Button>
                    </div>
                    </motion.div>
                </div>
                {lastApplication && showLastApplication &&(
        <div style={{marginTop:50}} className="d-flex flex-column justfiy-content-center align-items-center">
          <h2>Last Submitted Application:</h2>
          <p>First Name: {lastApplication.firstname}</p>
          <p>Last Name: {lastApplication.lastname}</p>
          <p>Age: {lastApplication.age}</p>
          <p>Country: {lastApplication.country}</p>
          <p>Phone: {lastApplication.phone}</p>
          <p>Email: {lastApplication.email}</p>
          <Button className="xcx" variant="outlined" onClick={handleHideLastApplication}>Show Less</Button>
        </div>
      )}
            </div>
            <div className="empty4"></div>
        </div>
     );
}
 
export default Career;