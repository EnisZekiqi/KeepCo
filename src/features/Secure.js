import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HorizontalLinearStepper from './HorizontalLinearStepper';


const Secure = () => {

   

    return ( 
    <div className="securo">
    <h1>Secure</h1>
    <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Securing the website and the files are top priority to us</p>
            <h2 style={{marginTop:30}} className='d-flex justify-content-start' > Quickstart</h2>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Our system of security is simple yet effective </p>
            <p  className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>As we are going to show an example how our system works so you might feel comfortable</p>
            <div className="ili0">
            <HorizontalLinearStepper/>
            </div>
            <div className="empty4"></div>
            <div className="empty4"></div>
    </div>
    );
}
 
export default Secure;