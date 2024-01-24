
import {motion} from "framer-motion"
import CostumizedAccordions from './CostumizedAccordions'
import Avatar from '@mui/material/Avatar';
import Coments from './Coments'
import Zeka from './images/Zeka.jpg'
const what = {
    inital:{
        
        opacity:0,
      
    },
    animate:{
        
        opacity:1,
       
        transition:{ duration:1}
    }}

    const fadeIn ={ 
        initial:{
            y:-100,
            opacity:0
        },
        animate:{
            y:0,
            opacity:1,

            tranisition:{delay:2,duration:2},
            staggerChildren:0.1
    
        }
    
    }
    

const Sponsors = () => {


    return ( 

        <div id="About" className="sponsors ">
    <div className="d-flex justify-content-center">
    <div className="we-do text-center">
                <motion.p className="features3 text-center" 
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
            > Comments</motion.p>
                <motion.h1 variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
                id="what" className="text-center"><b className="bold text-center">Best practices </b> don't actually work</motion.h1>

                <div className="babanew5">
                <motion.p style={{marginTop:10}} className='new5' variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
            > KeepCo <b className="bold"> was formed for the goods of the people </b> and it was invented to make the life more easier </motion.p>
            <motion.p className='new5' variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
            > in all aspect of file industry .When it was founded it wasn't an easy path but with our team  </motion.p>
            <motion.p className='new5 text-center' variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
            > we kept going until we made a foundation and we are here with all the glory  </motion.p>
                </div>

<div className="gapi"></div>
            <div style={{marginTop:20}} className="founderi d-flex justify-content-center">
            <Avatar alt="Remy Sharp" src={Zeka}/>
            <div style={{marginLeft:10}} className="texti-fonu">
            <h4 id="zeka">Enis Zekiqi</h4>
            <p id="zeka2" style={{marginTop:-10}}>Creator of KeepCo</p>
            </div>
            </div>
                </div>
                
    </div>
    <div style={{marginTop:10}} className="empty"></div>
    <Coments/>
    <div className="empty"></div>
            <div className="empty"></div>
        </div>
     );
}
 
export default Sponsors;