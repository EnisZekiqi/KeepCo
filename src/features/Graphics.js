import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EventIcon from '@mui/icons-material/Event';
import { Modal as BaseModal } from '@mui/base/Modal';
const Graphics = () => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
      };

      const [selectedIcon, setSelectedIcon] = useState(null);

      const icons = [
        { icon: <FavoriteIcon />, label: 'Favorite', content: 'Content for Favorite icon' },
        { icon: <StarIcon />, label: 'Star', content: 'Content for Star icon' },
        { icon: <ShoppingCartIcon />, label: 'Shopping Cart', content: 'Content for Shopping Cart icon' },
        { icon: <EmojiEventsIcon />, label: 'Emoji Events', content: 'Content for Emoji Events icon' },
        { icon: <EventIcon />, label: 'Event', content: 'Content for Event icon' },
      ];

      const filteredIcons = icons.filter(({ label }) => {
        return label.toLowerCase().includes(inputValue.toLowerCase());
      });
    
      const handleIconClick = (icon) => {
        setSelectedIcon(icon);
      };
    
      // Function to close modal
      const handleCloseModal = () => {
        setSelectedIcon(null);
      };

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
            <div className="d-flex justify-content-evenly" style={{marginTop:30}}>
              {filteredIcons.map(({ icon, label, content }, index) => (
                <button key={index} className="icon-wrapper" onClick={() => handleIconClick({ icon, label, content })}>
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>
        {selectedIcon && (
        <div className="backdrop" onClick={handleCloseModal}>
          <div className="custom-modal">
            <div className="modal-content">
              <h2>{selectedIcon.label}</h2>
              <p>{selectedIcon.content}</p>
              <button className="icon-wrapper2" onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
      )}
        <div className="empty4"></div>
      </div>
     );
}
 
export default Graphics;