

import { useState, useRef } from "react";
import {motion,useScroll, useSpring,useTransform, MotionValue} from "framer-motion";
import Award2 from './images/Award2.png'
import Ai from './images/Ai.png'
import Avatar from './images/Avatar.png'
import { useAnimate } from "framer-motion";
import button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import Sponsors from './Sponsors'



const Third = () => {


  const [scope,animate] = useAnimate();

  const  handleAnimate = async () => {
    animate(scope.current,{opacity:0})
    
  }

  const handleClose = async () =>{
    animate(scope.current, {opacity:1,})
  }



  const [show, setShow] = useState(false);

  const manageClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showi, setShowi] = useState(false);

  const handleiClose = () => setShowi(false);
  const handleiShow = () => setShowi(true);




  const [skup,animation] =useAnimate();

  const manageAnimate =async () =>{
    animation(skup.current,{opacity:0})
  }
  const managingClose =async () =>{
    animation(skup.current,{opacity:1})
  }



  const [skupi,anime] = useAnimate();

  const finalAnimate =async()=>{
    anime(skupi.current,{opacity:0})
  }

  const finaleClose =async ()=>{
    anime(skupi.current,{opacity:1})
  }


  const fadeInAnimationVariants ={
    inital:{
        opacity:0,
        x:0
    },
    animate:{
        opacity:1,
        x:50,
        transition:{duration:1}
    }
}

const fadeIn ={ 
    initial:{
        opacity:0
    },
    animate:{
        opacity:1,
        tranisition:{duration:1},
        transition:{delay:1}

    }

}



    const cardVariants = {
        offscreen: {
          y: 300
        },
        onscreen: {
          y: 50,
          rotate: -10,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };
      
    const modalAnimate  ={
      offscreen:{
        y:-10,
        opacity:0
      },
      onscreen:{
        y:0,
        opacity:1,
        transition:{
          duration:0.6,
        }
      }
    }

      
    return ( 
        
        <div id="Achivements" className="third containe ">
            <div className="empty2"></div>

     <div className=" ">
              <div className="">
              <motion.p variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} className="achivements">
              Our Achivements</motion.p>
            <motion.h1 variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} className="hardwork">
              We create  <b className="bold"> passion and hardwork</b> </motion.h1>
            <motion.h1 variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} className="hardwork2">
              and achivements are to be shown</motion.h1>
            <motion.p variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} className="best">
              Over the years our Company was climbing up with </motion.p>
            <motion.p variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} className="best2">
              the best and made use getting better and better</motion.p>
              </div>

              <div className="position">
                
              </div>
            <motion.div  
            initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }} ref={scope}  className="reni1 ">
        <div className="splash"></div>
        <motion.div  onClick={()=> handleAnimate()}  data-bs-toggle="modal" data-bs-target="#exampleModal" variants={cardVariants} className="reni2">
            <img className="award" src={Award2} alt="" />
            <h4 className="trust">TrustWorthy</h4>
            </motion.div>
         </motion.div>
         <motion.div  
            initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }} ref={skup} className="reni1 ">
        <div className="splash"></div>
        <div  onClick={()=> manageAnimate()} className="trigger">
        <motion.div   onClick={handleShow} variants={cardVariants} className="reni2">
        <img className="award" src={Ai} alt="" />
            <h4 className="trust">Ai Technology</h4>
            </motion.div>
        </div>

         </motion.div>
         <motion.div  
            initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }} ref={skupi} className="reni1 ">
        <div className="splash"></div>
        <div onClick={()=> finalAnimate()} className="trigger">
        <motion.div  onClick={handleiShow}  variants={cardVariants} className="reni2">
        <img className="award" src={Avatar} alt="" />
            <h4 className="trust">4M Users</h4>
            </motion.div>
        </div>
        
         </motion.div>
     </div>

           
          
         <div  onClick={()=>handleClose()} class="first-modal   modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div  style={{backgroundColor: "lightblue"}} class="modal-content">
    <button  onClick={()=>handleClose()} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <div class="modal-header justify-content-center ">
        <center><img className="award2" src={Award2} alt="" /></center>
      </div>
      <div className="header d-flex justify-content-center">
        <h2 >TrustWorthy</h2>
      </div>
      <div class="modal-body">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident hic, voluptas reiciendis iure nobis, quasi fugiat placeat officia a amet qui, autem accusamus ex? Ut dolorem eaque sed modi consectetur?</p>
      </div>
    </div>
  </div>
</div>

<div  onClick={()=>managingClose()} className="modal-fade">
<Modal   id="second-modal" show={show}  onHide={manageClose}>
        <Modal.Header id="header" style={{backgroundColor: "lightblue"}}  onClick={()=>managingClose()} closeButton>
        </Modal.Header>
        <Modal.Body className="header" style={{backgroundColor: "lightblue"}}>
        <img className="award3" src={Ai} alt="" />
       

        </Modal.Body>
        <Modal.Footer  style={{backgroundColor: "lightblue"}}  className="header d-flex justify-content-center">
        <h2 id="ngrehe">Ai Technology</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam ullam nobis ex eveniet minima repellendus autem hic aut. Aperiam saepe quibusdam quisquam, perferendis dolores enim incidunt tenetur ab sapiente!</p>
      
        </Modal.Footer>
      </Modal>
</div>


<div  onClick={()=>finaleClose()} className="modal-fade">
<Modal   id="second-modal" show={showi}  onHide={handleiClose}>
        <Modal.Header id="header" style={{backgroundColor: "lightblue"}}  onClick={()=>finaleClose()} closeButton>
        </Modal.Header>
        <Modal.Body className="header" style={{backgroundColor: "lightblue"}}>
        <img className="award3" src={Avatar} alt="" />
       

        </Modal.Body>
        <Modal.Footer  style={{backgroundColor: "lightblue"}}  className="header d-flex justify-content-center">
        <h2 id="ngrehe">4m Users</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam ullam nobis ex eveniet minima repellendus autem hic aut. Aperiam saepe quibusdam quisquam, perferendis dolores enim incidunt tenetur ab sapiente!</p>
      
        </Modal.Footer>
      </Modal>
</div>

<div className="empty"></div>
            <div className="empty"></div>
        </div>
        
     );
}
 
export default Third;