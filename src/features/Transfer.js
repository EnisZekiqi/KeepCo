import CustomList from '../features/CustomList'
import React, { useState ,useEffect} from 'react';

const Transfer = () => {

    
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
            <div className="empty4"></div>
        </div>
     );
}
 
export default Transfer;