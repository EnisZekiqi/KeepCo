import { motion,useAnimate } from "framer-motion";
import Button from '@mui/material/Button';
import { useState } from "react";
import ustahikinez from '../images/ustahikinez.jpg'
import ustahibrazil from '../images/ustahibrazil.jpg'
import Checkbox from '@mui/material/Checkbox';


const Staff = () => {

    const [isButtonClicked, setIsButtonClicked] = useState(null);

    const [scope,animate] =useAnimate();
    const [show,animato]=useAnimate();
    const[dont,animato1]=useAnimate();
    const[dont1,animato2]=useAnimate();
    const[scope1,animate1]=useAnimate();
    const [scope2,animate2] =useAnimate();
    const [hiqmu,animeqo] =useAnimate();


    const showmore = async (contentId) =>{
        animate(scope.current,{x:0});
        animate1(scope1.current,{opacity:1 ,visibility:'visible',display:''});
        animate2(scope2.current,{opacity:0 ,visibility:'hidden',display:'none'});
        animato1(dont.current,{opacity:0 ,visibility:'hidden',display:'none'});
        setIsButtonClicked(contentId);
        setTimeout(() => {
          
        }, 3000); 
       
        
    }
    const showmore2 = async (contentId) =>{
        animate2(scope2.current,{x:0});
        animate(scope.current,{opacity:0 ,visibility:'hidden',display:'none'});
        animato1(dont.current,{opacity:0 ,visibility:'hidden',display:'none'});
        animato2(dont1.current,{opacity:0 ,visibility:'hidden',display:'none'});
        animeqo(hiqmu.current,{opacity:0 ,visibility:'hidden',display:'none'});
        setIsButtonClicked(contentId);
        setTimeout(() => {
          
        }, 3000); 
       
        
    }
    

    const hidemore = async (contentId) =>{
        animate(scope.current,{x:0,opacity:1, visibility: 'visible', display: 'block'});
        animeqo(hiqmu.current,{opacity:1, visibility: 'visible', display: 'block'});
        animate1(scope1.current,{opacity:1 ,visibility:'visible',display:''});
        animate2(scope2.current,{opacity:1 ,visibility:'visible',display:''});
        animato1(dont.current,{opacity:1 ,visibility:'visible',display:''});
        animato2(dont1.current,{opacity:1 ,visibility:'visible',display:''});
        animate2(scope2.current,{x:0});
        setIsButtonClicked(contentId);

    }


    const [showProgrammer, setShowProgrammer] = useState(true);
    const [showDesigner, setShowDesigner] = useState(true);
    const [showMarketing, setShowMarketing] = useState(true);
    const [showService, setShowService] = useState(true);

    const handleCheckboxChange = (event) => {
       const { name, checked } = event.target;
      switch (name) {
        case 'programmer':
          setShowProgrammer(checked);
          break;
        case 'designer':
          setShowDesigner(checked);
          break;
        case 'marketing':
          setShowMarketing(checked);
          break;
        case 'service':
          setShowService(checked);
          break;
        default:
          break;
      }
    };
  
    const animationi={
      initial:{opacity:0},
      animate:{opacity:1,
      transition:{
        duration:0.2,
      }
      }
    }

    const [isButtonClicked2, setIsButtonClicked2] = useState(null);

    const showagent = async (contentId) =>{
      setIsButtonClicked2(contentId);
  }

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return ( 

        <div>
            <h1>Staff</h1>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Check all of our staff here</p>
            <h2 style={{marginTop:50,marginBottom:80}} className="text-center">Meet our Founders</h2>
            <div style={{marginTop:30}} className="founderat ">
                <div style={{marginLeft:30}} className={`row ${isButtonClicked === 'first' ? 'center' : ''} ${isButtonClicked === 'third' ? 'center' : ''}${isButtonClicked === 'second' ? 'center2' : ''}`}>
               
                    <div ref={scope}  className="col-lg-6 mb-4 mb-lg-0">
                    <div ref={hiqmu} className={`founderi1 ${isButtonClicked === 'first' ? 'clicked6' : ''} ${isButtonClicked === 'second' ? 'clicked7' : ''}${isButtonClicked === 'third' ? 'clickedn' : ''}`}>
                    <motion.div 
                    
                    whileHover={{ scale: 1.1,   transition:{
                       type: "spring",
                       stiffness: 200,
                       damping: 20
                     } }}
                     className={`photofounderi1 ${isButtonClicked === 'first' ? 'photofounderi3' : ''} ${isButtonClicked === 'second' ? 'photofounderi1' : ''}`}>
                      <img  className={`ustahi ${isButtonClicked === 'first' ? 'ustahi2' : ''} ${isButtonClicked === 'second' ? 'ustahi' : ''}`} src={ustahibrazil} alt="" />
                     </motion.div>
                    <h3  className={`text-center ${isButtonClicked === 'first' ? 'clicked5' : ''} ${isButtonClicked === 'second' ? 'clicked5x' : ''}`} style={{marginTop:-60}}>Enis Zekiqi</h3>
                    <h5 className="text-center" style={{marginTop:0}}>CEO and Co-Founder </h5>
                      <div className={`text-ceo2 ${isButtonClicked === 'first' ? 'clicked5xx' : ''} ${isButtonClicked === 'second' ? 'clicked5x' : ''}`} >
                        <p>Enis finished his studies in Computer Science and Technology in UBT Prishtina.</p>
                        <Button ref={dont}   id="first" onClick={()=>showmore('first')} style={{marginLeft:100,marginBottom:20}} className="xcx" variant="contained" color="five">Show More</Button>
                      </div>
                      <div ref={show} className={`expandable ${isButtonClicked === 'first' ? 'clicked52' : ''} ${isButtonClicked === 'second' ? 'clicked53' : ''}`}>
                        <div className="teksticeo">
                        <p>He has 4 years of experience of Front-End developer and he extended expertise in multiple technologies such as large-scale network technologies and software developing </p>
                        <p>After a long time of working he started to build the company KeepCo and is still working to open more companies in future </p>
                        </div>
                        <Button ref={scope1} id="second" onClick={()=>hidemore('second')} style={{marginLeft:110,marginBottom:20}} className="xcx" variant="contained" color="five">Show Less</Button>
                     </div>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div ref={scope2}  className={`founderi2 ${isButtonClicked === 'third' ? 'kk0' : ''} ${isButtonClicked === 'second' ? '' : ''}`}>
                    <motion.div
                     whileHover={{ scale: 1.1,   transition:{
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      } }}
                      className={`photofounderi1 ${isButtonClicked === 'third' ? 'photofounderi3' : ''} ${isButtonClicked === 'second' ? 'photofounderi1' : ''}`}>
                        <img  className={`ustahi ${isButtonClicked === 'third' ? 'ustahi2' : ''} ${isButtonClicked === 'second' ? 'ustahi' : ''}`} src={ustahikinez} alt="" />
                      </motion.div>
                    <h3  className={`text-center ${isButtonClicked === 'first' ? 'clicked5' : ''} ${isButtonClicked === 'second' ? 'clicked5x' : ''}`} style={{marginTop:-60}}>Ardian Krasniqi</h3>
                    <h5 className="text-center" style={{marginTop:0}}>CEO and Co-Founder </h5>
                      <div className={`text-ceo2 ${isButtonClicked === 'third' ? 'clicked5xxx' : ''} ${isButtonClicked === 'second' ? 'clicked5x' : ''}`} >
                        <p>Ardian finished his studies in Computer Science and Designer Graphic in UBT Prishtina.</p>
                        <Button ref={dont1} onClick={()=>showmore2('third')}  style={{marginLeft:100,marginBottom:20}} className="d-flex justify-content-center align-center" variant="contained" color="five">Show More</Button>
                      </div>
                      <div ref={show}  className={`expandable ${isButtonClicked === 'third' ? 'clicked52' : ''} ${isButtonClicked === 'second' ? 'clicked53' : ''}`}>
                        <div className="teksticeo">
                        <p>Ardian started as a front-end developer but he found himself in designer graphic more than programming , together </p>
                        <p>with Enis they learned together and achived all the glory together and in the present they run the company called KeepCo </p>
                        </div>
                        <Button  id="second" onClick={()=>hidemore('second')} style={{marginLeft:110,marginBottom:20}} className="xcx" variant="contained" color="five">Show Less</Button>
                     </div>
                    </div>
                    </div>

                    
                </div>
            </div>
            <h2 style={{marginTop:80,marginBottom:80}} className="text-center">Meet our Team</h2>
            <div className="team">
      <div className="row">
        <div className="col">
          <div style={{ width: '100%', backgroundColor: 'rgba(10, 12, 16,0.7)', borderRadius: '10px' }} className="d-flex justify-content-evenly mb-3 mb-md-0">
            <div className="d-flex">
              <Checkbox name="programmer" checked={showProgrammer} onChange={handleCheckboxChange} style={{ color: '#3399ff' }} />
              <p style={{ color: '#bbbbbb', marginTop: 10 }}>Programmer</p>
            </div>
            <div className="d-flex">
              <Checkbox name="designer" checked={showDesigner} onChange={handleCheckboxChange} style={{ color: '#3399ff' }} />
              <p style={{ color: '#bbbbbb', marginTop: 10 }}>Designer</p>
            </div>
            <div className="d-flex">
              <Checkbox name="marketing" checked={showMarketing} onChange={handleCheckboxChange} style={{ color: '#3399ff' }} />
              <p style={{ color: '#bbbbbb', marginTop: 10 }}>Marketing</p>
            </div>
            <div className="d-flex">
              <Checkbox name="service" checked={showService} onChange={handleCheckboxChange} style={{ color: '#3399ff' }} />
              <p style={{ color: '#bbbbbb', marginTop: 10 }}>Service</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div id="topofdrill" >
          <div className="d-flex flex-column">
            {/* Display marketi1 items based on checkbox state */}
            <div className="d-flex flex-wrap justify-content-evenly">
              {/* Display marketi1 items for Programmer */}
              {showProgrammer && (
                <>
                  <motion.div 
                   initial={{opacity:0 }}
                   whileInView={{opacity:1}}
                   transition={{
                    duration:1,
                  }}
                 
                  style={{ marginTop:20,marginBottom: 10 }} className={`marketi1 ${isButtonClicked2 === 'agent2' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent22' ? 'marketi1' : ''}${isButtonClicked2 === 'agent3' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent33' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent4' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent44' ? 'marketi1' : ''}${isButtonClicked2 === 'agent5' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent55' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent6' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent66' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent7' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent77' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent8' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent88' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent9' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent99' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent10' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent101' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent11' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent111' ? 'marketi1' : ''}
                  
                  `}>
                      <div className="d-flex flex-column justify-content-center">
                      <h3 style={{marginTop:20}} className="text-center">Natasha Smith</h3>
                       <h5 className="text-center">Programmer</h5>
                       <p className="text-center">Natasha joined our Company 3 years ago and her success has helped our company over the years</p>
                       <div className={`nops ${isButtonClicked2 === 'agent1' ? 'clickedm' : ''}${isButtonClicked2 === 'agent11o' ? 'nops' : ''}`}>
                       <Button id="agent1" onClick={()=>showagent('agent1')} style={{width:120,marginLeft:125}} variant="contained" color="five" >Show More</Button>
                       </div>
                       <motion.div 
                       variants={animationi}
                       initial="initial"
                       animate="animate"
                       className={`marketextend ${isButtonClicked2 === 'agent1' ? 'marketextend2' : ''}${isButtonClicked2 === 'agent11o' ? 'marketextend' : ''}`}>
                        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <p style={{marginTop:-20}} className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <Button id="agent11o" onClick={()=>showagent('agent11o')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show Less</Button>
                       </motion.div>
                      </div>
                  </motion.div>

                  <motion.div
                  initial={{opacity:0 }}
                  whileInView={{opacity:1}}
                  transition={{
                   duration:1,
                 }}
                  style={{marginTop:20 ,marginBottom: 10 }} className={`marketi1 ${isButtonClicked2 === 'agent1' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent11o' ? 'marketi1' : ''}${isButtonClicked2 === 'agent3' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent33' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent3' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent33' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent4' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent44' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent5' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent55' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent6' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent66' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent7' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent77' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent8' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent88' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent9' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent99' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent10' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent101' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent11' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent111' ? 'marketi1' : ''}
                  `}>
                  <div className="d-flex flex-column justify-content-center">
                      <h3 style={{marginTop:20}} className="text-center">Josh Stavn</h3>
                       <h5 className="text-center">Programmer</h5>
                       <p className="text-center">Josh is very skilled programer that's the reason he's in our company and we're glad that he's our employee</p>
                       <div  className={`nops ${isButtonClicked2 === 'agent2' ? 'clickedm' : ''}${isButtonClicked2 === 'agent22' ? 'nops' : ''}`}>
                       <Button id="agent2" onClick={()=>showagent('agent2')} style={{width:120,marginLeft:125,}} variant="contained" color="five">Show More</Button>
                       </div>
                       <motion.div 
                       variants={animationi}
                       initial="initial"
                       animate="animate"
                       className={`marketextend ${isButtonClicked2 === 'agent2' ? 'marketextend2' : ''}${isButtonClicked2 === 'agent22' ? 'marketextend' : ''}`}>
                        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <p style={{marginTop:-20}} className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <Button id="agent22" onClick={()=>showagent('agent22')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show Less</Button>
                       </motion.div>
                      </div>
                  </motion.div>
                  <motion.div
                  initial={{opacity:0 }}
                  whileInView={{opacity:1}} 
                  transition={{
                   duration:1,
                 }}
                 
                  style={{marginTop:20  ,marginBottom: 10 }}  className={`marketi1 ${isButtonClicked2 === 'agent1' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent11o' ? 'marketi1' : ''}${isButtonClicked2 === 'agent2' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent22' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent4' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent44' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent5' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent55' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent6' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent66' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent7' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent77' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent8' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent88' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent9' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent99' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent10' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent101' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent11' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent111' ? 'marketi1' : ''}
                  `} >
                  <div className="d-flex flex-column justify-content-center">
                      <h3 style={{marginTop:20}} className="text-center">Chandler Dave</h3>
                       <h5 className="text-center">Programmer</h5>
                       <p className="text-center">Chandler is the first programmer in our company he was helpful for the design of the website  </p>
                       <div className={`nops ${isButtonClicked2 === 'agent3' ? 'clickedm' : ''}${isButtonClicked2 === 'agent33' ? 'nops' : ''}`}>
                       <Button id="agent3" onClick={()=>showagent('agent3')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show More</Button>
                       </div>
                       <motion.div 
                       variants={animationi}
                       initial="initial"
                       animate="animate"
                       className={`marketextend ${isButtonClicked2 === 'agent3' ? 'marketextend2' : ''}${isButtonClicked2 === 'agent33' ? 'marketextend' : ''}`}>
                        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <p style={{marginTop:-20}} className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <Button id="agent33" onClick={()=>showagent('agent33')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show Less</Button>
                       </motion.div>
                      </div>
                  </motion.div>
                </>
              )}
              {/* Repeat similar logic for other categories */}
              {/* Display marketi1 items for Designer */}
              {showDesigner && (
                <>
                  <motion.div 
                  initial={{opacity:0 }}
                  whileInView={{opacity:1}} 
                  transition={{
                   duration:1,
                 }}
                  style={{ marginTop:10, marginBottom: 10 }}  className={`marketi1 ${isButtonClicked2 === 'agent1' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent11o' ? 'marketi1' : ''}${isButtonClicked2 === 'agent2' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent22' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent3' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent33' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent5' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent55' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent6' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent66' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent7' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent77' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent8' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent88' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent9' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent99' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent10' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent101' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent11' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent111' ? 'marketi1' : ''}
                  `}>
                  <div className="d-flex flex-column justify-content-center">
                      <h3 style={{marginTop:20}} className="text-center">Steven Josh</h3>
                       <h5 className="text-center">Designer</h5>
                       <p className="text-center">Steven is responsible for the design of the website in terms of the logo , colors and much more </p>
                       <div className={`nops ${isButtonClicked2 === 'agent4' ? 'clickedm' : ''}${isButtonClicked2 === 'agent44' ? 'nops' : ''}`}>
                       <Button id="agent4" onClick={()=>showagent('agent4')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show More</Button>
                       </div>
                       <motion.div 
                       variants={animationi}
                       initial="initial"
                       animate="animate"
                       className={`marketextend ${isButtonClicked2 === 'agent4' ? 'marketextend2' : ''}${isButtonClicked2 === 'agent44' ? 'marketextend' : ''}`}>
                        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <p style={{marginTop:-20}} className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <Button id="agent44" onClick={()=>showagent('agent44')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show Less</Button>
                       </motion.div>
                      </div>
                  </motion.div>
                  <motion.div 
                  initial={{opacity:0 }}
                  whileInView={{opacity:1}} 
                  transition={{
                   duration:1,
                 }}
                  style={{marginTop:10,  marginBottom: 10 }}  className={`marketi1 ${isButtonClicked2 === 'agent1' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent11o' ? 'marketi1' : ''}${isButtonClicked2 === 'agent2' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent22' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent3' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent33' ? 'marketi1' : ''}  ${isButtonClicked2 === 'agent4' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent44' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent6' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent66' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent7' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent77' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent8' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent88' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent9' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent99' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent10' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent101' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent11' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent111' ? 'marketi1' : ''}
                  `}>
                  <div className="d-flex flex-column justify-content-center">
                      <h3 style={{marginTop:20}} className="text-center">Selena Rodriguez</h3>
                       <h5 className="text-center">Designer</h5>
                       <p className="text-center">Selena is our new designer in the field of our company her ideas for design are very impressive</p>
                       <div className={`nops ${isButtonClicked2 === 'agent5' ? 'clickedm' : ''}${isButtonClicked2 === 'agent55' ? 'nops' : ''}`}>
                       <Button id="agent5" onClick={()=>showagent('agent5')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show More</Button>
                       </div>
                       <motion.div 
                       variants={animationi}
                       initial="initial"
                       animate="animate"
                       className={`marketextend ${isButtonClicked2 === 'agent5' ? 'marketextend2' : ''}${isButtonClicked2 === 'agent55' ? 'marketextend' : ''}`}>
                        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <p style={{marginTop:-20}} className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <Button id="agent55" onClick={()=>showagent('agent55')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show Less</Button>
                       </motion.div>
                      </div>
                  </motion.div>
                  <motion.div
                  initial={{opacity:0 }}
                  whileInView={{opacity:1}} 
                  transition={{
                   duration:1,
                 }}
                  style={{marginTop:10,  marginBottom: 10 }}  className={`marketi1 ${isButtonClicked2 === 'agent1' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent11o' ? 'marketi1' : ''}${isButtonClicked2 === 'agent2' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent22' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent3' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent33' ? 'marketi1' : ''} ${isButtonClicked2 === 'agent4' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent44' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent5' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent55' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent7' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent77' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent8' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent88' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent9' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent99' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent10' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent101' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent11' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent111' ? 'marketi1' : ''}
                  `}>
                  <div className="d-flex flex-column justify-content-center">
                      <h3 style={{marginTop:20}} className="text-center">Veronica Max</h3>
                       <h5 className="text-center">Designer</h5>
                       <p className="text-center">Veronica joined in our team 2 years ago and her skills and ideas as a designer are remarkable   </p>
                       <div className={`nops ${isButtonClicked2 === 'agent6' ? 'clickedm' : ''}${isButtonClicked2 === 'agent66' ? 'nops' : ''}`}>
                       <Button id="agent6" onClick={()=>showagent('agent6')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show More</Button>
                       </div>
                       <motion.div 
                       variants={animationi}
                       initial="initial"
                       animate="animate"
                       className={`marketextend ${isButtonClicked2 === 'agent6' ? 'marketextend2' : ''}${isButtonClicked2 === 'agent66' ? 'marketextend' : ''}`}>
                        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <p style={{marginTop:-20}} className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <Button id="agent66" onClick={()=>showagent('agent66')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show Less</Button>
                       </motion.div>
                      </div>
                  </motion.div>
                </>
              )}
              {/* Display marketi1 items for Marketing */}
              {showMarketing && (
                <>
                  <motion.div
                  initial={{opacity:0 }}
                  whileInView={{opacity:1}} 
                  transition={{
                   duration:1,
                 }}
                  style={{ marginTop:10, marginBottom: 10 }} className={`marketi1 ${isButtonClicked2 === 'agent1' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent11o' ? 'marketi1' : ''}${isButtonClicked2 === 'agent2' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent22' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent3' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent33' ? 'marketi1' : ''} ${isButtonClicked2 === 'agent4' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent44' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent5' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent55' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent6' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent66' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent8' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent88' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent9' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent99' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent10' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent101' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent11' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent111' ? 'marketi1' : ''}
                  `}>
                  <div className="d-flex flex-column justify-content-center">
                      <h3 style={{marginTop:20}} className="text-center">Alan Camora </h3>
                       <h5 className="text-center">Marketing</h5>
                       <p className="text-center">Alan is responsible for marketing in social media to tell people what we do and we can achive together</p>
                       <div  className={`nops ${isButtonClicked2 === 'agent7' ? 'clickedm' : ''}${isButtonClicked2 === 'agent77' ? 'nops' : ''}`}>
                       <Button id="agent7" onClick={()=>showagent('agent7')} style={{width:120 ,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show More</Button>
                       </div>
                       <motion.div 
                       variants={animationi}
                       initial="initial"
                       animate="animate"
                       className={`marketextend ${isButtonClicked2 === 'agent7' ? 'marketextend2' : ''}${isButtonClicked2 === 'agent77' ? 'marketextend' : ''}`}>
                        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <p style={{marginTop:-20}} className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <Button id="agent77" onClick={()=>showagent('agent77')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show Less</Button>
                       </motion.div>
                      </div>
                  </motion.div>
                  <motion.div 
                   initial={{opacity:0 }}
                   whileInView={{opacity:1}} 
                   transition={{
                    duration:1,
                  }}
                  style={{ marginTop:10, marginBottom: 10 }} className={`marketi1 ${isButtonClicked2 === 'agent1' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent11o' ? 'marketi1' : ''}${isButtonClicked2 === 'agent2' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent22' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent3' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent33' ? 'marketi1' : ''} ${isButtonClicked2 === 'agent4' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent44' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent5' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent55' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent6' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent66' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent7' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent77' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent9' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent99' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent10' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent101' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent11' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent111' ? 'marketi1' : ''}
                  `}>
                  <div className="d-flex flex-column justify-content-center">
                      <h3 style={{marginTop:20}} className="text-center">Sasha Sloane</h3>
                       <h5 className="text-center">Marketing</h5>
                       <p className="text-center">Sasha is responsible for handling the website in all social medias post daily and much more </p>
                       <div className={`nops ${isButtonClicked2 === 'agent8' ? 'clickedm' : ''}${isButtonClicked2 === 'agent88' ? 'nops' : ''}`}>
                       <Button id="agent8" onClick={()=>showagent('agent8')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show More</Button>
                       </div>
                       <motion.div 
                       variants={animationi}
                       initial="initial"
                       animate="animate"
                       className={`marketextend ${isButtonClicked2 === 'agent8' ? 'marketextend2' : ''}${isButtonClicked2 === 'agent88' ? 'marketextend' : ''}`}>
                        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <p style={{marginTop:-20}} className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <Button id="agent88" onClick={()=>showagent('agent88')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show Less</Button>
                       </motion.div>
                      </div>
                  </motion.div>
                  <motion.div
                   initial={{opacity:0 }}
                   whileInView={{opacity:1}} 
                   transition={{
                  }}
                  style={{marginTop:10, marginBottom: 10 }} className={`marketi1 ${isButtonClicked2 === 'agent1' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent11o' ? 'marketi1' : ''}${isButtonClicked2 === 'agent2' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent22' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent3' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent33' ? 'marketi1' : ''} ${isButtonClicked2 === 'agent4' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent44' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent5' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent55' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent6' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent66' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent7' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent77' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent8' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent88' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent10' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent101' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent11' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent111' ? 'marketi1' : ''}
                  `}>
                  <div className="d-flex flex-column justify-content-center">
                      <h3 style={{marginTop:20}} className="text-center">Josh Grayson</h3>
                       <h5 className="text-center">Marketing</h5>
                       <p className="text-center">Josh has joned our company a year ago and he helps his team with his skills  </p>
                       <div className={`nops ${isButtonClicked2 === 'agent9' ? 'clickedm' : ''}${isButtonClicked2 === 'agent99' ? 'nops' : ''}`}>
                       <Button id="agent9" onClick={()=>showagent('agent9')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show More</Button>
                       </div>
                       <motion.div 
                       variants={animationi}
                       initial="initial"
                       animate="animate"
                       className={`marketextend ${isButtonClicked2 === 'agent9' ? 'marketextend2' : ''}${isButtonClicked2 === 'agent99' ? 'marketextend' : ''}`}>
                        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <p style={{marginTop:-20}} className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <Button id="agent99" onClick={()=>showagent('agent99')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show Less</Button>
                       </motion.div>
                      </div>
                  </motion.div>
                </>
              )}
              {/* Display marketi1 items for Service */}
              {showService && (
                <>
                  <motion.div
                   initial={{opacity:0 }}
                   whileInView={{opacity:1}} 
                   transition={{
                    duration:1,
                  }}
                  style={{ marginTop:10, marginBottom: 10 }} className={`marketi1 ${isButtonClicked2 === 'agent1' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent11o' ? 'marketi1' : ''}${isButtonClicked2 === 'agent2' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent22' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent3' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent33' ? 'marketi1' : ''} ${isButtonClicked2 === 'agent4' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent44' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent5' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent55' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent6' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent66' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent7' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent77' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent8' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent88' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent9' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent99' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent11' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent111' ? 'marketi1' : ''}
                  `} >
                  <div className="d-flex flex-column justify-content-center">
                      <h3 style={{marginTop:20}} className="text-center">Kate Cardona</h3>
                       <h5 className="text-center">Service</h5>
                       <p className="text-center">Kate is responsible for communicating with users 24/7 in our website for more support</p>
                       <div className={`nops ${isButtonClicked2 === 'agent10' ? 'clickedm' : ''}${isButtonClicked2 === 'agent101' ? 'nops' : ''}`}>
                       <Button id="agent10" onClick={()=>showagent('agent10')}  style={{width:120 ,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show More</Button>
                       </div>
                       <motion.div 
                       variants={animationi}
                       initial="initial"
                       animate="animate"
                       className={`marketextend ${isButtonClicked2 === 'agent10' ? 'marketextend2' : ''}${isButtonClicked2 === 'agent101' ? 'marketextend' : ''}`}>
                        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <p style={{marginTop:-20}} className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <Button id="agent101" onClick={()=>showagent('agent101')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show Less</Button>
                       </motion.div>
                      </div>
                  </motion.div>
                  <motion.div
                   initial={{opacity:0 }}
                   whileInView={{opacity:1}} 
                   transition={{
                    duration:1,
                  }}
                   style={{ marginTop:10, marginBottom: 10 }} className={`marketi1 ${isButtonClicked2 === 'agent1' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent11o' ? 'marketi1' : ''}${isButtonClicked2 === 'agent2' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent22' ? 'marketi1' : ''}
                   ${isButtonClicked2 === 'agent3' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent33' ? 'marketi1' : ''} ${isButtonClicked2 === 'agent4' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent44' ? 'marketi1' : ''}
                   ${isButtonClicked2 === 'agent5' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent55' ? 'marketi1' : ''}
                   ${isButtonClicked2 === 'agent6' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent66' ? 'marketi1' : ''}
                   ${isButtonClicked2 === 'agent7' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent77' ? 'marketi1' : ''}
                   ${isButtonClicked2 === 'agent8' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent88' ? 'marketi1' : ''}
                   ${isButtonClicked2 === 'agent9' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent99' ? 'marketi1' : ''}
                   ${isButtonClicked2 === 'agent10' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent101' ? 'marketi1' : ''}
                   `}>
                  <div className="d-flex flex-column justify-content-center">
                      <h3 style={{marginTop:20}} className="text-center">Maria Rodruigez</h3>
                       <h5 className="text-center">Service</h5>
                       <p className="text-center">Marie checks for our website if it is running smoothly and responsive for the users</p>
                       <div className={`nops ${isButtonClicked2 === 'agent11' ? 'clickedm' : ''}${isButtonClicked2 === 'agent111' ? 'nops' : ''}`}>
                       <Button id="agent11" onClick={()=>showagent('agent11')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show More</Button>
                       </div>
                       <motion.div 
                       variants={animationi}
                       initial="initial"
                       animate="animate"
                       className={`marketextend ${isButtonClicked2 === 'agent11' ? 'marketextend2' : ''}${isButtonClicked2 === 'agent111' ? 'marketextend' : ''}`}>
                        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <p style={{marginTop:-20}} className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <Button id="agent111" onClick={()=>showagent('agent111')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show Less</Button>
                       </motion.div>
                      </div>
                  </motion.div>
                  <motion.div
                   initial={{opacity:0 }}
                   whileInView={{opacity:1}} 
                   transition={{
                    duration:1,
                  }}
                  style={{ marginTop:10, marginBottom: 10 }} className={`marketi1 ${isButtonClicked2 === 'agent1' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent11o' ? 'marketi1' : ''}${isButtonClicked2 === 'agent2' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent22' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent3' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent33' ? 'marketi1' : ''} ${isButtonClicked2 === 'agent4' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent44' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent5' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent55' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent6' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent66' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent7' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent77' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent8' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent88' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent9' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent99' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent10' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent101' ? 'marketi1' : ''}
                  ${isButtonClicked2 === 'agent11' ? 'marketi2' : ''} ${isButtonClicked2 === 'agent111' ? 'marketi1' : ''}
                  `}>
                  <div className="d-flex flex-column justify-content-center">
                      <h3 style={{marginTop:20}} className="text-center">Nolan Kobi </h3>
                       <h5 className="text-center">Service</h5>
                       <p className="text-center">Nolan checks if our website is in contact with our users and if they gets every answer asked</p>
                       <div className={`nops ${isButtonClicked2 === 'agent12' ? 'clickedm' : ''}${isButtonClicked2 === 'agent112' ? 'nops' : ''}`}>
                       <Button id="agent12" onClick={()=>showagent('agent12')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show More</Button>
                       </div>
                       <motion.div 
                       variants={animationi}
                       initial="initial"
                       animate="animate"
                       className={`marketextend ${isButtonClicked2 === 'agent12' ? 'marketextend2' : ''}${isButtonClicked2 === 'agent112' ? 'marketextend' : ''}`}>
                        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <p style={{marginTop:-20}} className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, provident?</p>
                        <Button id="agent112" onClick={()=>showagent('agent112')} style={{width:120,marginLeft:125,marginBottom:10}} variant="contained" color="five">Show Less</Button>
                       </motion.div>
                      </div>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

            <div className="empty4"></div>
            <div className="empty4"></div>
        </div>
     );
}
 
export default Staff;