import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
const Career = () => {
    const[isClicked,setIsClicked]=useState(false)

    const showClick =  (position)=>{
      setIsClicked(isClicked === position ? '' : position);
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
      const [lastApplications, setLastApplications] = useState({
        marketingExpert: null,
        frontEndDeveloper: null,
        serviceContact: null,
      });
      const [showLastApplications, setShowLastApplications] = useState({
        marketingExpert: false,
        frontEndDeveloper: false,
        serviceContact: false,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e, position) => {
        e.preventDefault();
        // Save form data to the respective lastApplications state based on the position
        setLastApplications((prevApplications) => ({
          ...prevApplications,
          [position]: formData,
        }));
        // Show last submitted application for the respective position
        setShowLastApplications((prevShow) => ({
          ...prevShow,
          [position]: true,
        }));
        // Clear form data
        setFormData({
          firstname: '',
          lastname: '',
          age: '',
          country: '',
          phone: '',
          email: '',
        });
      };
    
      const handleHideLastApplication = (position) => {
        // Hide last submitted application for the respective position
        setShowLastApplications((prevShow) => ({
          ...prevShow,
          [position]: false,
        }));
      };

    return ( 

    
        <div>
            <h1>Career</h1>
            <div style={{marginTop:50 ,gap:50}} className="d-flex flex-lg-row flex-column">
                <div style={{width:'fit-content'}} className="d-flex flex-column ">
                    <h1>SKILLED AND <b className="bold">DEDICATED</b> EFFICIEND AND <b className="bold">FOCUSED</b></h1>
                </div>
                <div style={{fontSize:18}} className="col-md-6">
                    <p>
                    We partner up with our clients by setting up, managing and operating their extended teams across Software Development, Quality Assurance, Customer Support, Technical Support and Business process outsourcing services. We make sure that our teams remain satisfied and therefore dedicated to our client’s needs. This makes us reliable, effective and productive.
                    </p>
                </div>
            </div>
            <h1 style={{marginTop:100}} className="text-center">Available Positions</h1>
            <div style={{marginTop:50}} className="d-flex flex-column">
                <div style={{borderBottom:'1px solid #bbbbbb'}} className="positon1 d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center">
                    <button id="position1" onClick={()=>showClick('marketingExpert')} style={{backgroundColor:'transparent',border:'none'}}>
                    <div className="d-flex flex-column">
                    <h2 style={{color:'#ffffff'}}>Marketing Expert</h2>
                    <p className="text-lg-start text-center" style={{color:'#bbbbbb',fontSize:14}}>
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
                    className={`showedposition1 ${isClicked === 'marketingExpert' ? 'showedposition1x' : ''} ${isClicked === 'removemarketingExpert' ? 'showedposition1' : ''}`}>
                       <form onSubmit={(e) => handleSubmit(e, 'marketingExpert')}>
                       <div style={{gap:20 ,marginLeft:-30,marginTop:30}} className="d-flex" >
                        <div className="d-flex flex-column">
                        <label htmlFor="firstname">First Name:</label><br />
                        <input style={{color:'white',backgroundColor:'#101419',marginTop:-10}} className="llabellat" type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} /><br />
                        </div>
                        <div className="d-flex flex-column">
                          <label htmlFor="lastname">Last Name:</label><br />
                         <input style={{color:'white',marginTop:-10,backgroundColor:'#101419'}} className="llabellat" type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} /><br />
                        </div>  
                        </div>
                    <div style={{gap:20 ,marginLeft:-30}} className="d-flex">
                    <div className="d-flex flex-column">
                    <label htmlFor="age">Age:</label><br />
                    <input style={{color:'white',marginTop:-10,backgroundColor:'#101419'}} className="llabellat" type="number" id="age" name="age" value={formData.age} onChange={handleChange} /><br />
                    </div>
                    <div className="d-flex flex-column">
                    <label htmlFor="country">Country:</label><br />
                    <input style={{color:'white',marginTop:-10,backgroundColor:'#101419'}} className="llabellat" type="text" id="country" name="country" value={formData.country} onChange={handleChange} /><br />
                    </div>
                    </div>
                    <div style={{gap:20,marginLeft:-30}}  className="d-flex">
                    <div className="d-flex flex-column">
                    <label htmlFor="phone">Phone:</label><br />
                    <input style={{color:'white',marginTop:-10,backgroundColor:'#101419'}} className="llabellat" type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} /><br />
                    </div>
                    <div className="d-flex flex-column">
                    <label htmlFor="email">Email:</label><br />
                    <input style={{color:'white',marginTop:-10,backgroundColor:'#101419'}} className="llabellat" type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br /><br />
                    </div>
                    </div>
                    <div className="upload-cs">
                      <h4>Upload CV</h4>
                    </div>
                    <div className="d-flex justify-content-evenly">
                    <Button style={{marginTop:20}} id="removepostion1" onClick={()=>showClick('removemarketingExpert')} className="xcx" variant="outlined">Show Less</Button>
                    <Button style={{marginTop:20}} id="removepostion1"   onClick={(e) => handleSubmit(e, 'marketingExpert')} className="xcx" variant="outlined">Apply Now</Button>
                    </div>
                       </form>
                    </motion.div>
                </div>
                <div style={{borderBottom:'1px solid #bbbbbb',marginTop:20}} className="positon1 d-flex flex-lg-row flex-column justify-content-between">
                    <button id="position2" onClick={() => showClick('frontEndDeveloper')}  style={{backgroundColor:'transparent',border:'none'}}>
                    <div className="d-flex flex-column">
                    <h2 style={{color:'#ffffff'}}>Front-End Developer</h2>
                    <p className="text-lg-start text-center" style={{color:'#bbbbbb',fontSize:14}}>
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
                    className={`showedposition1 ${isClicked === 'frontEndDeveloper' ? 'showedposition1x' : ''} ${isClicked === 'removefrontEndDeveloper' ? 'showedposition1' : ''}`}>
                    <form  onSubmit={(e) => handleSubmit(e, 'frontEndDeveloper')}>
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
                    <Button style={{marginTop:20}} id="removepostion2" onClick={() => showClick('removefrontEndDeveloper')} className="xcx" variant="outlined">Show Less</Button>
                    <Button style={{marginTop:20}} id="removepostion2" onClick={(e) => handleSubmit(e, 'frontEndDeveloper')} className="xcx" variant="outlined">Apply Now</Button>
                    </div>
                    </motion.div>
                </div>
                <div style={{borderBottom:'1px solid #bbbbbb',marginTop:20}} className="positon1 d-flex flex-lg-row flex-column justify-content-between">
                    <button id="position3"  onClick={() => showClick('serviceContact')} style={{backgroundColor:'transparent',border:'none'}}>
                    <div className="d-flex flex-column">
                    <h2 style={{color:'#ffffff'}}>Service Contact (2x)</h2>
                    <p className="text-lg-start text-center" style={{color:'#bbbbbb',fontSize:14}}>
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
                    className={`showedposition1 ${isClicked === 'serviceContact' ? 'showedposition1x' : ''} ${isClicked === 'removeserviceContact' ? 'showedposition1' : ''}`}>
                    <form onSubmit={(e) => handleSubmit(e, 'serviceContact')}>
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
                    <Button style={{marginTop:20}} id="removepostion3"onClick={() => showClick('removeserviceContact')} className="xcx" variant="outlined">Show Less</Button>
                    <Button style={{marginTop:20}} id="removepostion3"onClick={(e) => handleSubmit(e, 'serviceContact')} className="xcx" variant="outlined">Apply Now</Button>
                    </div>
                    </motion.div>
                </div>
                {lastApplications.marketingExpert && showLastApplications.marketingExpert && (
                <div style={{ marginTop: 50 }} className="d-flex flex-column justfiy-content-center align-items-center">
                  <h2> Submitted <b className="bold">Marketing Expert</b> Application:</h2>
                  <p>First Name: <b className="bold">{lastApplications.marketingExpert.firstname}</b></p>
                  <p>Last Name:  <b className="bold">{lastApplications.marketingExpert.lastname}</b></p>
                  <p>Age:  <b className="bold">{lastApplications.marketingExpert.age}</b></p>
                  <p>Country: <b className="bold">{lastApplications.marketingExpert.country}</b></p>
                  <p>Phone: <b className="bold">{lastApplications.marketingExpert.phone}</b></p>
                  <p>Email: <b className="bold">{lastApplications.marketingExpert.email}</b></p>
                  <Button className="xcx" variant="outlined" onClick={() => handleHideLastApplication('marketingExpert')}>
                    Show Less
                  </Button>
                </div>
              )}
                {lastApplications.frontEndDeveloper && showLastApplications.frontEndDeveloper && (
                <div style={{ marginTop: 50 }} className="d-flex flex-column justfiy-content-center align-items-center">
                  <h2> Submitted <b className="bold">Front-End Developer</b> Application:</h2>
                  <p>First Name: <b className="bold">{lastApplications.frontEndDeveloper.firstname}</b></p>
                  <p>Last Name: <b className="bold">{lastApplications.frontEndDeveloper.lastname}</b></p>
                  <p>Age: <b className="bold">{lastApplications.frontEndDeveloper.age}</b></p>
                  <p>Country: <b className="bold">{lastApplications.frontEndDeveloper.country}</b></p>
                  <p>Phone: <b className="bold">{lastApplications.frontEndDeveloper.phone}</b></p>
                  <p>Email: <b className="bold">{lastApplications.frontEndDeveloper.email}</b></p>
                  <Button className="xcx" variant="outlined" onClick={() => handleHideLastApplication('frontEndDeveloper')}>
                    Show Less
                  </Button>
                </div>
              )}
              {lastApplications.serviceContact && showLastApplications.serviceContact && (
                <div style={{ marginTop: 50 }} className="d-flex flex-column justfiy-content-center align-items-center">
                  <h2> Submitted <b className="bold">Service Contact (2x)</b> Application:</h2>
                  <p>First Name: <b className="bold">{lastApplications.serviceContact.firstname}</b></p>
                  <p>Last Name:  <b className="bold">{lastApplications.serviceContact.lastname}</b></p>
                  <p>Age:  <b className="bold">{lastApplications.serviceContact.age}</b></p>
                  <p>Country: <b className="bold">{lastApplications.serviceContact.country}</b></p>
                  <p>Phone: <b className="bold">{lastApplications.serviceContact.phone}</b></p>
                  <p>Email: <b className="bold">{lastApplications.serviceContact.email}</b></p>
                  <Button className="xcx" variant="outlined" onClick={() => handleHideLastApplication('serviceContact')}>
                    Show Less
                  </Button>
                </div>
              )}
            </div>
            <div className="empty4"></div>
        </div>
     );
}
 
export default Career;