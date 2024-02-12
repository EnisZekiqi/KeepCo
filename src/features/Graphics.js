import { useState } from "react";
import { motion } from "framer-motion";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EventIcon from '@mui/icons-material/Event';
import { Modal as BaseModal } from '@mui/base/Modal';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BackHandIcon from '@mui/icons-material/BackHand';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import BoltIcon from '@mui/icons-material/Bolt';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import CloudIcon from '@mui/icons-material/Cloud';
import CycloneIcon from '@mui/icons-material/Cyclone';
import HeadsetIcon from '@mui/icons-material/Headset';
import MosqueIcon from '@mui/icons-material/Mosque';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SensorsIcon from '@mui/icons-material/Sensors';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import TsunamiIcon from '@mui/icons-material/Tsunami';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SleddingIcon from '@mui/icons-material/Sledding';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import mountain from '../images/mountain.jpg'
const Graphics = () => {


  const fade ={
    initial:{
      opacity:0,
      scale:0
    },
    animate:{
      opacity:1,
      scale:1,
      transition:{
        type: "spring",
        stiffness: 160,
        damping: 15
      }   
    }
  }

  const [inputValue, setInputValue] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  const handleCloseModal = () => {
    setSelectedIcon(null);
  };

  const icons = [
    { icon: <FavoriteIcon />, label: 'Favorite', image: <img style={{width:100}} src={mountain} alt="Favorite" />  },
    { icon: <StarIcon />, label: 'Star', image: <img style={{width:100}} src={mountain} alt="Star" />},
    { icon: <ShoppingCartIcon />, label: 'Shopping Cart',  image: <img style={{width:100}} src={mountain} alt="Cart" />},
    { icon: <EmojiEventsIcon />, label: 'Trophy',  image: <img style={{width:100}} src={mountain} alt="Trophy" /> },
    { icon: <EventIcon />, label: 'Event',  image: <img style={{width:100}} src={mountain} alt="Event" /> },
    { icon: <AllInclusiveIcon />, label: 'Infinity',  image: <img style={{width:100}} src={mountain} alt="Infinity" /> },
    { icon: <AttachMoneyIcon />, label: 'Money', image: <img style={{width:100}} src={mountain} alt="Money" /> },
    { icon: <BackHandIcon />, label: 'Hand',  image: <img style={{width:100}} src={mountain} alt="Hand" /> },
    { icon: <BedtimeIcon />, label: 'Moon',  image: <img style={{width:100}} src={mountain} alt="Moon" /> },
    { icon: <BoltIcon />, label: 'Lightning',  image: <img style={{width:100}} src={mountain} alt="Lightning" /> },
    { icon: <BrightnessHighIcon/>, label: 'Sun',  image: <img style={{width:100}} src={mountain} alt="Sun" />},
    { icon: <CloudIcon/>, label: 'Cloud',  image: <img style={{width:100}} src={mountain} alt="Cloud" /> },
    { icon: <CycloneIcon/>, label: 'Cyclone',  image: <img style={{width:100}} src={mountain} alt="Cyclone" /> },
    { icon: <FitnessCenterIcon/>, label: 'Fitness', image: <img style={{width:100}} src={mountain} alt="Fitness" /> },
    { icon: <HeadsetIcon/>, label: 'Headset', image: <img style={{width:100}} src={mountain} alt="Headset" /> },
    { icon: <MosqueIcon/>, label: 'Mosque', image: <img style={{width:100}} src={mountain} alt="Mosque" /> },
    { icon: <RocketLaunchIcon/>, label: 'Rocket',image: <img style={{width:100}} src={mountain} alt="Rocket" />},
    { icon: <SensorsIcon/>, label: 'Sensor', image: <img style={{width:100}} src={mountain} alt="Sensor" /> },
    { icon: <SportsVolleyballIcon/>, label: 'Volleyball', image: <img style={{width:100}} src={mountain} alt="Volleyball" />  },
    { icon: <StarBorderPurple500Icon/>, label: 'ThinnerStar',image: <img style={{width:100}} src={mountain} alt="ThinnerStar" /> },
    { icon: <ThunderstormIcon/>, label: 'ThunderStorm', image: <img style={{width:100}} src={mountain} alt="ThunderStorm" />},
    { icon: <TimeToLeaveIcon/>, label: 'Car', image: <img style={{width:100}} src={mountain} alt="Car" /> },
    { icon: <TsunamiIcon/>, label: 'Tsunami', image: <img style={{width:100}} src={mountain} alt="Tsunami" /> },
    { icon: <VolunteerActivismIcon/>, label: 'Volunteer',image: <img style={{width:100}} src={mountain} alt="Volunteer" /> },
    { icon: <VpnKeyIcon/>, label: 'Key', image: <img style={{width:100}} src={mountain} alt="Key" /> },
    { icon: <WatchLaterIcon/>, label: 'Clock', image: <img style={{width:100}} src={mountain} alt="Clock" /> },
    { icon: <WbIncandescentIcon/>, label: 'Light',image: <img style={{width:100}} src={mountain} alt="Light" /> },
    { icon: <WhatshotIcon/>, label: 'Fire', image: <img style={{width:100}} src={mountain} alt="Fire" /> },
    { icon: <SleddingIcon/>, label: 'Sledding', image: <img style={{width:100}} src={mountain} alt="Sledding" /> },
    { icon: <AcUnitIcon/>, label: 'Snow', image: <img style={{width:100}} src={mountain} alt="Snow" /> },
    
  ];

  // Filter icons based on input value
  const filteredIcons = icons.filter(({ label }) => {
    return label.toLowerCase().includes(inputValue.toLowerCase());
  });

  // Define number of icons per row
  const iconsPerRow = 5;

  // Group icons into rows
  const rows = [];
  for (let i = 0; i < filteredIcons.length; i += iconsPerRow) {
    rows.push(filteredIcons.slice(i, i + iconsPerRow));
  }

  return (
    <div>
      <div className="grapho">
        <h1>Graphics</h1>
        <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Lots of graphics to add to your image</p>
        <h2 style={{marginTop:30}}>Quickstart</h2>
        <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>You can choose some graphics to add to the image</p>
        <div className="ssearchi d-flex flex-column">
          <h3 style={{marginTop:20}} className="text-center">Search for Graphics</h3>
          <form style={{marginTop:20}}  className="d-flex justify-content-center" >
            <div className="melogo d-flex">
              <SearchIcon style={{marginTop:10,marginRight:-20 }}/>
              <input style={{width:300,marginLeft:20}} placeholder="Search icons.." className="input-field3" type="text"
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <label htmlFor="input-field" className="input-label">Name</label>
          </form>
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="d-flex justify-content-evenly" style={{marginTop:30}}>
              {row.map(({ icon, label, image}, index) => (
                <button key={index} className="icon-wrapper" onClick={() => handleIconClick({ icon, label,image })}>
                  {icon}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
      {selectedIcon && (
        <div className="backdrop" onClick={handleCloseModal} >
          <motion.div
          variants={fade}
          initial="initial"
          animate="animate"
          className="custom-modal">
            <div className="modal-content">
              <h2>{selectedIcon.label}</h2>
              <div className="modal-image-container">
                {selectedIcon.image}
                <div className="modal-icon-overlay">{selectedIcon.icon}</div>
              </div>
              <button className="icon-wrapper2" onClick={handleCloseModal}>Close</button>
            </div>
          </motion.div>
        </div>
      )}
       <h5 style={{marginTop:70,marginBottom:20}}>Limitations</h5>
            <div className="expord ">
            <div className="warningu1 d-flex">
            <svg style={{marginTop:10,marginLeft:10}} width="25px" height="25px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"  stroke-width="0.4800000000000001"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" ></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M11 13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V13ZM13 15.9888C13 15.4365 12.5523 14.9888 12 14.9888C11.4477 14.9888 11 15.4365 11 15.9888V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V15.9888ZM9.37735 4.66136C10.5204 2.60393 13.4793 2.60393 14.6223 4.66136L21.2233 16.5431C22.3341 18.5427 20.8882 21 18.6008 21H5.39885C3.11139 21 1.66549 18.5427 2.77637 16.5431L9.37735 4.66136Z" fill="#ffff00"></path> </g></svg>
          <p style={{marginTop:10 ,marginLeft:10, width:'fit-content',height:'fit-content'}}>Because this is only a Example that is shown to you</p>
            </div>
            <p style={{marginLeft:10, width:'fit-content',height:'fit-content'}}> we didn't added all the graphics for faster response of the website </p>
            <p style={{marginLeft:10, width:'fit-content',height:'fit-content'}}>also the image is always the same for example reasons , and you cannot drag the image</p>
            <p style={{marginLeft:10, width:'fit-content',height:'fit-content'}}> drag the image whenever you want  </p>
          </div>
      <div className="empty4"></div>
    </div>
  );
}
 
export default Graphics;