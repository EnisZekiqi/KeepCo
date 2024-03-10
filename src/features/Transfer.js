import CustomList from '../features/CustomList'
import React, { useState ,useEffect} from 'react';

const Transfer = () => {

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
            <h1>Transfer</h1>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Explore your features</p>
            <h2 style={{marginTop:30}} className='d-flex justify-content-start' > Quickstart</h2>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>This feature allows you to choose between features </p>
            <p  className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>So you can edit your file and have the most used feature you chose in one place </p>
            <CustomList/>
            <h2 style={{marginTop:50}} className='d-flex justify-content-start' > Tips</h2>
           <div style={{marginTop:20}} className="d-flex flex-column">
           <li style={{color:'#3399ff',fontSize:17}}> Choices</li>
           <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>In the choices list are the features that you can choose to have in the editor for the files </p>
           <li style={{color:'#3399ff',fontSize:17}}> Chosen</li>
           <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>In the chosen list are the features that you can have choosen to have in the editor for the files </p>
           </div>
           <form>
            <label htmlFor="firstname">First Name:</label><br />
            <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} /><br />
            <label htmlFor="lastname">Last Name:</label><br />
            <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} /><br />
            <label htmlFor="age">Age:</label><br />
            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} /><br />
            <label htmlFor="country">Country:</label><br />
            <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} /><br />
            <label htmlFor="phone">Phone:</label><br />
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} /><br />
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br /><br />
            <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
            {lastApplication && showLastApplication &&(
        <div>
          <h2>Last Submitted Application:</h2>
          <p>First Name: {lastApplication.firstname}</p>
          <p>Last Name: {lastApplication.lastname}</p>
          <p>Age: {lastApplication.age}</p>
          <p>Country: {lastApplication.country}</p>
          <p>Phone: {lastApplication.phone}</p>
          <p>Email: {lastApplication.email}</p>
          <button onClick={handleHideLastApplication}>ShowLess</button>
        </div>
      )}
            <div className="empty4"></div>
        </div>
     );
}
 
export default Transfer;