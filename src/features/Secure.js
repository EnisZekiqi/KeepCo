import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HorizontalLinearStepper from './HorizontalLinearStepper';
import ApiIcon from '@mui/icons-material/Api';
import AutorenewIcon from '@mui/icons-material/Autorenew';


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
            <h2 style={{marginTop:50}} className='d-flex justify-content-start' > More Info </h2>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>When our security detect an unwanted file it warns you but</p>
            <p  className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>you can still edit and use the fatures but we won't take any responsibility </p>
            <h2 style={{marginTop:60}} className='d-flex justify-content-start' > What security we provide</h2>
            <div style={{marginTop:50}} className="providi container-lg">
                <div className="row">
                    <div className="malware col-md-6">
                        <div className="incona-malware d-flex">
                        <svg width="50px" height="50px" fill="#3399ff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#3399ff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="File_virus"> <path d="M328.36,148.8989A9.9266,9.9266,0,0,1,318.4639,139V31H98.5415A22.5417,22.5417,0,0,0,76,53.5415V458.5229A22.4773,22.4773,0,0,0,98.4771,481H413.4814A22.5184,22.5184,0,0,0,436,458.4814V148.8989ZM186.25,185.98a9.94,9.94,0,0,1,14.0405,0l26.1914,26.1889a41.7215,41.7215,0,0,1,59.0406,0L311.7139,185.98a9.8636,9.8636,0,0,1,13.9482,13.95l-29.7905,29.88a40.1846,40.1846,0,0,1,1.89,11.9692v3.9595h-83.61v-3.9595a40.22,40.22,0,0,1,1.9819-11.9692L186.25,199.93A9.9994,9.9994,0,0,1,186.25,185.98ZM346.5405,303.34a9.9,9.9,0,1,1,0,19.7993H318.7319v9.36l32.3086,16.2a9.8869,9.8869,0,0,1-4.5,18.7192,11.1929,11.1929,0,0,1-4.4077-.9887L318.1035,354.37a62.6121,62.6121,0,0,1-124.2026,0L169.8716,366.43a11.1929,11.1929,0,0,1-4.4077.9887,9.8869,9.8869,0,0,1-4.5-18.7192l32.3086-16.2v-9.36H165.4639a9.9,9.9,0,1,1,0-19.7993h27.8086v-9.36l-32.3086-16.11a9.9209,9.9209,0,1,1,8.9077-17.73L193.2725,271.84V265.54h52.831v80.73a9.8987,9.8987,0,1,0,19.7974,0V265.54h52.831V271.84L342.1328,260.14a9.9209,9.9209,0,1,1,8.9077,17.73l-32.3086,16.11v9.36Z"></path> <polygon points="338.261 41.259 338.261 129.099 426.104 129.099 338.261 41.259"></polygon> </g> </g></svg>
                        <h5  style={{marginTop:10,marginLeft:10}}>Malware Protection</h5>
                        </div>
                        <p style={{color:'#bbbbbb',marginTop:20}}>We safetky remove any malicious code in your file system , and if it is everything allright it's good to go </p>
                    </div>
                    <div className="blocklist col-md-6">
                    <div style={{marginLeft:10}} className="incona-malware d-flex">
                    <svg width="50px" height="50px"  class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="#3399ff" stroke-linecap="round" stroke-width="1" d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"/>
  </svg>
                        <h5  style={{marginTop:10,marginLeft:10}}>Remove Blocklist Status</h5>
                        </div>
                        <p style={{color:'#bbbbbb',marginTop:20,marginLeft:10}}>Websites with security warnings lose 95% of their traffic. We submit blocklist removal requests on your behalf</p>
                    </div>
                </div>
                <div className="row">
                    <div className="spam col-md-6">
                    <div className="incona-malware d-flex">
                        <ApiIcon style={{width:50,height:50,marginTop:10,color:'#3399ff'}} />
                        <h5  style={{marginTop:20,marginLeft:10}}>Api Secure</h5>
                        </div>
                        <p style={{color:'#bbbbbb',marginTop:20,marginLeft:0}}>Api is the data or information that you are providing to us like files , username etc are all secure </p>
                    </div>
                    <div className="future-attack col-md-6">
                    <div style={{marginLeft:10}} className="incona-malware d-flex">
                            <AutorenewIcon style={{width:50,height:50,marginTop:10,color:'#3399ff'}} />
                        <h5  style={{marginTop:20,marginLeft:10}}>Prevent Future Attacks</h5>
                        </div>
                        <p style={{color:'#bbbbbb',marginTop:20,marginLeft:10}}>Our website firewall (WAF) blocks attacks by filtering malicious traffic. We stop hacks and speed up your site</p>
                    </div>
                </div>
            </div>
            <div className="empty4"></div>
    </div>
    );
}
 
export default Secure;