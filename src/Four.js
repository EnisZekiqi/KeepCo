
import MailIcon from '@mui/icons-material/Mail';
import {motion} from "framer-motion"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import Contact from './Contact'
import Tooltip from '@mui/material/Tooltip';

const varianti={
    initial :{
        y:100,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        tranisition:{
            duration:1,
            staggerChildren:0.1
        }
    }

}
const Four = () => {
    return ( 
        <div id='Contact' className="four container-lg ">
            <div className="d-flex row  g-0 justify-content-between">
                <div className="together col-sm-6 col-md-4">
                    <motion.h1 variants={varianti}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                id="Rizz">Let's work </motion.h1>
                    <motion.h1 variants={varianti}
                initial="initial"
                whileInView="animate" 
                viewport={{ once: true }}
                id="Rizz">together</motion.h1>
<div className="devider"></div>
                    <motion.h4 variants={varianti}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                id='Lrizz'> <MailIcon sx={{ display: { }, color:'#3399ff'}} />  Mail</motion.h4>
                    <motion.p variants={varianti}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                id='Lrizz'>enis_zekiqi@hotmail.com</motion.p>

                    <motion.h4 variants={varianti}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                id='Lrizz'><LocationOnIcon sx={{ display: { }, color:'#3399ff'}} /> Adress</motion.h4>
                    <motion.p variants={varianti}
                initial="initial"
                whileInView="animate" 
                viewport={{ once: true }}
                id='Lrizz'>120 Faruk Beqiri Vushtrri</motion.p>

                    <motion.h4 variants={varianti}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                id='Lrizz'>Social Media</motion.h4>
                    <motion.div variants={varianti}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="social">
                     <Tooltip title="Instagram" placement="bottom">
                     <InstagramIcon sx={{ display: { }, color:'#3399ff'}}  />
                     </Tooltip>
                     <Tooltip title="Facebook" placement="bottom">
                     <FacebookIcon sx={{ display: { }, color:'#3399ff'}} />
                     </Tooltip>
                     <Tooltip title="GitHub" placement="bottom">
                     <GitHubIcon  sx={{ display: { }, color:'#3399ff'}} />
                     </Tooltip>
                    </motion.div>
                </div> 


                    <div className="strong col-sm-6 col-md-4">
                    <Contact/>
                    </div>
                    


            </div>
            <div className="empty"></div>
        </div>
     );
}
 
export default Four;