import BadgeVisibility from "./BadgeVisibility";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const Protection = () => {
    return ( 
        <div className="protectio">
            <h1>Protection</h1>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>This feature is about the internet protection</p>
            <h2 style={{marginTop:30}} className='d-flex justify-content-start' > About this feature</h2>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>While you are in our website your internet don't</p>
            <p  className='d-flex justify-content-start' style={{color:'#bbbbbb'}}> interact with anything except KeepCo</p>

                <div className="enable-disable">
                    <BadgeVisibility/>
                    <p  className='d-flex justify-content-start' style={{color:'#bbbbbb',marginTop:20}}> If protection is enabled it means that other tabs will not interact with our website</p>
                    <p  className='d-flex justify-content-start' style={{color:'#bbbbbb'}}> But if you need to work with other websites as well you can disable it at any time</p>
                </div>

                <div className="expord-green">
            <div className="warningu1 d-flex">
           <CheckCircleIcon style={{marginTop:10,marginLeft:10 ,color:'#009933'}} />
          <p style={{marginTop:10 ,marginLeft:10, width:'fit-content',height:'fit-content'}}>This feature require cooperation with the browser </p>
            </div>
            <p style={{marginLeft:10, width:'fit-content',height:'fit-content'}}> Thats why this feature is in 15 browsers including Google Chrome , FireFox and Opera </p>
           
          </div>
<div className="empty4"></div> 
<div className="empty4"></div>
        </div>
     );
}
 
export default Protection;