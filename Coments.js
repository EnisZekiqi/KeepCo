
import Avatar from '@mui/material/Avatar';
import images from './images/images.jpg'
import images2 from './images/images 2.jpg'
import images3 from './images/images 3.jpg'
import images4 from './images/images 4.jpg'
import images5 from './images/images 5.jpg'
import images6 from './images/images 6.jpg'
import images7 from './images/images7.jpg'
import images8 from './images/images8.jpg'
import images9 from './images/images 9.jpg'
import images10 from './images/images 10.png'
import images11 from './images/images 11.jpg'
import images12 from './images/images 12.jpg'
import images13 from './images/images 13.jpg'
import Button from '@mui/material/Button';
import {motion,useAnimate} from 'framer-motion';
import { useState } from 'react';



const fadeIn ={ 
    initial:{
        y:-50,
        opacity:0
    },
    animate:{
        y:10,
        opacity:1,
        tranisition:{duration:1},
        transition:{delay:1}

    }

}

const Coments = () => {
    const [scope, animate] = useAnimate()
    const [skupi,animati] =useAnimate()
    const [hija,animacioni] =useAnimate()
    const [movi,manga] =useAnimate()

    const  handleAnimate = async () => {
        animate(scope.current,{opacity:1, visibility: 'visible',display:''})

        animati(skupi.current,{opacity:0})

        animacioni(hija.current,{opacity:0})

        manga(movi.current,{y:200})
        
      }

      const hideContent = async () =>{
animate(scope.current,{opacity:0,visibility:'hidden',display:''})

animati(skupi.current,{opacity:1})

        animacioni(hija.current,{opacity:1})
      }
     
      
      

    return ( 
        <div className="coments">
            <div style={{marginRight:0}} className="row ">
                <div className="ul1 col-lg-4 col-md-6 col-12  mb-3 d-flex justify-content-sm-center">
                    <ul>
                        <li className="li ">
                        <div className="gapi3"></div>
                            <div className='pamu d-flex '>
                            <Avatar style={{marginLeft:20,marginTop:10}} alt="Remy Sharp" src={images2} />
                            <div style={{marginLeft:10 ,marginTop:10}} className="d-flex row">
                            <h5 id='rayan'>Rayan Florence</h5>
                            <p id='remix'> Remix & React Training</p>
                            </div>
                            </div>
                            <div className="texti-pllo container-lg">
                                <p id='idiot'>i feel like an idiot for not using KeepCo untill now</p>
                            </div>
                        </li>
                        <div className="gapi2"></div>
                        <li className="li3">
                        <div className="gapi3"></div>
                            <div className='pamu d-flex '>
                            <Avatar style={{marginLeft:20,marginTop:10}} alt="Remy Sharp" src={images3} />
                            <div style={{marginLeft:10 ,marginTop:10}} className="d-flex row">
                            <h5 id='rayan'>Guillermo Rauch</h5>
                            <p id='remix'> Vercel</p>
                            </div>
                            </div>
                            <div className="texti-pllo container-lg">
                                <p id='idiot'>If i had to recomment a way of getting files more organized it would be KeepCo. If you combine KeepCo with any technological job it would help you a lot </p>
                            </div>
                        </li>
                        <div className="gapi2"></div>
                        
                        <li className="li" style={{height:170}}>
                        <div className="gapi3"></div>
                            <div className='pamu d-flex '>
                            <Avatar style={{marginLeft:20,marginTop:10}} alt="Remy Sharp" src={images8} />
                            <div style={{marginLeft:10 ,marginTop:10}} className="d-flex row">
                            <h5 id='rayan'>Christine Smith</h5>
                            <p id='remix'>Staff Software Engineer</p>
                            </div>
                            </div>
                            <div className="texti-pllo container-lg">
                                <p id='idiot'>I will keep it simple , want to keep files in check use KeepCo</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="ul2 col-lg-4 col-md-6 col-12  mb-3 d-flex justify-content-sm-center">
                <ul>
                        <li className="li2 ">
                        <div className="gapi3"></div>
                            <div className='pamu d-flex '>
                            <Avatar style={{marginLeft:20,marginTop:10}} alt="Remy Sharp" src={images} />
                            <div style={{marginLeft:10 ,marginTop:10}} className="d-flex row">
                            <h5 id='rayan'>Shruti Balasa</h5>
                            <p id='remix'>Full Stack Developer</p>
                            </div>
                            </div>
                            <div className="texti-pllo container-lg">
                                <p id='idiot'>I was bad at front-end untill i discovered KeepCo which helped me organize files better and simpler.Those files helped me save even more time for more learning</p>
                            </div>
                        </li>
                        <div className="gapi2"></div>
                        <li className="li2">
                        <div className="gapi3"></div>
                            <div className='pamu d-flex '>
                            <Avatar style={{marginLeft:20,marginTop:10}} alt="Remy Sharp" src={images4} />
                            <div style={{marginLeft:10 ,marginTop:10}} className="d-flex row">
                            <h5 id='rayan'>Ben Furfie</h5>
                            <p id='remix'> Developer</p>
                            </div>
                            </div>
                            <div className="texti-pllo container-lg">
                                <p id='idiot'>I use all kind of files everyday and it was a mess untill i discovered KeepCo , it made my job more easier and time-saving.Reason of the comment was to recommend you using the app, it will help you much than you think</p>
                            </div>
                        </li>
                        <div className="gapi2"></div>
                        
                        <li className="li" style={{height:170}}>
                        <div className="gapi3"></div>
                            <div className='pamu d-flex '>
                            <Avatar style={{marginLeft:20,marginTop:10}} alt="Remy Sharp" src={images10}/>
                            <div style={{marginLeft:10 ,marginTop:10}} className="d-flex row">
                            <h5 id='rayan'>Andy Tee</h5>
                            <p id='remix'>CEO Speex</p>
                            </div>
                            </div>
                            <div className="texti-pllo container-lg">
                                <p id='idiot'>In my Bussiness ive partnership with KeepCo to help each other </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id='ul33' className="ul3 col-lg-4 col-md-6 col-12 mb-3 ">
                <li className="li4">
                        <div className="gapi3"></div>
                            <div className='pamu d-flex '>
                            <Avatar style={{marginLeft:20,marginTop:10}} alt="Remy Sharp" src={images5} />
                            <div style={{marginLeft:10 ,marginTop:10}} className="d-flex row">
                            <h5 id='rayan'>Kent C. Dodds</h5>
                            <p id='remix'> Teacher and Educator</p>
                            </div>
                            </div>
                            <div className="texti-pllo container-lg">
                                <p style={{marginLeft:20}} id='idiot'>Skip to the end and use KeepCo</p>
                            </div>
                        </li>
                        <div className="gapi2"></div>
                        <li className="li2">
                        <div className="gapi3"></div>
                            <div className='pamu d-flex '>
                            <Avatar style={{marginLeft:20,marginTop:10}} alt="Remy Sharp" src={images6} />
                            <div style={{marginLeft:10 ,marginTop:10}} className="d-flex row">
                            <h5 id='rayan'>Debbie O'Brien</h5>
                            <p id='remix'> Senior Program Manager at Microsoft</p>
                            </div>
                            </div>
                            <div className="texti-pllo container-lg">
                                <p  id='idiot'>I have been working with Files for over ten years and KeepCo helped me so much in every aspect,starting from setting up files by order and made the work 5x faster now. Its very good how people create those time saving apps</p>
                            </div>
                        </li>
                        <div className="gapi2"></div>
                        <li className="li3" style={{height:200}}>
                        <div className="gapi3"></div>
                            <div className='pamu d-flex '>
                            <Avatar style={{marginLeft:20,marginTop:10}} alt="Remy Sharp" src={images7} />
                            <div style={{marginLeft:10 ,marginTop:10}} className="d-flex row">
                            <h5 id='rayan'>Dren Jonson</h5>
                            <p id='remix'> Teacher and Educator</p>
                            </div>
                            </div>
                            <div className="texti-pllo container-lg">
                                <p id='idiot'>I don't usually express things in internet but KeepCo was something that i couldn't stay without telling everyone to use it</p>
                            </div>
                        </li>
                </div>
            </div>
            
            
            <div ref={hija} className="hija d-flex justify-content-center">
            
                
            <Button className='show' ref={skupi} onClick={() => handleAnimate ()} style={{height:40}} variant="outlined">Show more...</Button>
            <div className="empty4"></div>
            </div>
            <div ref={scope} className="more-comments" style={{visibility:'hidden',display:'none'}}>
                <div style={{marginRight:0}} className="row">
                <div className="ul1 col-lg-4 col-md-6 col-12   mb-3 d-flex justify-content-sm-center">
                    <ul>
                        <li className="li6 " style={{height:240}}>
                        <div className="gapi3"></div>
                            <div className='pamu d-flex '>
                            <Avatar style={{marginLeft:20,marginTop:10}} alt="Remy Sharp" src={images9} />
                            <div style={{marginLeft:10 ,marginTop:10}} className="d-flex row">
                            <h5 id='rayan'>Pieter Levels</h5>
                            <p id='remix'> Maker</p>
                            </div>
                            </div>
                            <div className="texti-pllo container-lg">
                                <p id='idiot'>I dont use it but if i would use something related with files in the future i would use KeepCo because its the best right now. In every job related with technology files are important so i would recommend using this</p>
                            </div>
                        </li>
                        <div className="gapi2"></div>
                        <li className="li3" style={{height:190}}>
                        <div className="gapi3"></div>
                            <div className='pamu d-flex '>
                            <Avatar style={{marginLeft:20,marginTop:10}} alt="Remy Sharp" src={images13} />
                            <div style={{marginLeft:10 ,marginTop:10}} className="d-flex row">
                            <h5 id='rayan'>Nora Morgan</h5>
                            <p id='remix'> System Architect</p>
                            </div>
                            </div>
                            <div className="texti-pllo container-lg">
                                <p id='idiot'>Every job require a regulation to make the job more easy so that is where the KeepCo comes to help you </p>
                            </div>
                        </li>
                        <div className="gapi2"></div>
                        
                        <li className="li ">
                        <div className="gapi3"></div>
                            <div className='pamu d-flex '>
                            <Avatar style={{marginLeft:20,marginTop:10}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <div style={{marginLeft:10 ,marginTop:10}} className="d-flex row">
                            <h5 id='rayan'>Rayani Florence</h5>
                            <p id='remix'> Remix & React Training</p>
                            </div>
                            </div>
                            <div className="texti-pllo container-lg">
                                <p id='idiot'>i feel like an idiot for not using KeepCo untill now</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="ul2 col-lg-4 col-md-6 col-12   mb-3 d-flex justify-content-sm-center">
                <ul>
                        <li className="li2 " style={{marginTop:20,height:190}}>
                        <div className="gapi3"></div>
                            <div className='pamu d-flex '>
                            <Avatar style={{marginLeft:20,marginTop:10}} alt="Remy Sharp" src={images12} />
                            <div style={{marginLeft:10 ,marginTop:10}} className="d-flex row">
                            <h5 id='rayan'>Ahmed Stawn</h5>
                            <p id='remix'>UX Designer</p>
                            </div>
                            </div>
                            <div className="texti-pllo container-lg">
                                <p id='idiot'>As a designer i do to much prototypes and want to see the changes and results so KeepCo helps me with that</p>
                            </div>
                        </li>
                        <div className="gapi2"></div>
                        <li className="li2">
                        <div className="gapi3"></div>
                            <div className='pamu d-flex '>
                            <Avatar style={{marginLeft:20,marginTop:10}} alt="Remy Sharp" src={images4} />
                            <div style={{marginLeft:10 ,marginTop:10}} className="d-flex row">
                            <h5 id='rayan'>Ben Furfie</h5>
                            <p id='remix'> Developer</p>
                            </div>
                            </div>
                            <div className="texti-pllo container-lg">
                                <p id='idiot'>I use all kind of files everyday and it was a mess untill i discovered KeepCo , it made my job more easier and time-saving.Reason of the comment was to recommend you using the app, it will help you much than you think</p>
                            </div>
                        </li>
                        <div className="gapi2"></div>
                        
                        <li className="li">
                        <div className="gapi3"></div>
                            <div className='pamu d-flex '>
                            <Avatar style={{marginLeft:20,marginTop:10}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <div style={{marginLeft:10 ,marginTop:10}} className="d-flex row">
                            <h5 id='rayan'>Rayani Florence</h5>
                            <p id='remix'> Remix & React Training</p>
                            </div>
                            </div>
                            <div className="texti-pllo container-lg">
                                <p id='idiot'>i feel like an idiot for not using KeepCo untill now</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="ul3 col-lg-4 col-md-6 col-12  mb-3 ">
                <li className="li7">
                        <div className="gapi3"></div>
                            <div className='pamu d-flex '>
                            <Avatar style={{marginLeft:20,marginTop:10}} alt="Remy Sharp" src={images11} />
                            <div style={{marginLeft:10 ,marginTop:10}} className="d-flex row">
                            <h5 id='rayan'>Kent C. Dodds</h5>
                            <p id='remix'>Computer Science Teacher</p>
                            </div>
                            </div>
                            <div className="texti-pllo container-lg">
                                <p style={{marginLeft:0}} id='idiot'>Most of my Classes are Online due to some school rules and to keep all my student grades in check i use KeepCo and im grateful</p>
                            </div>
                        </li>
                        <div className="gapi2"></div>
                        <li className="li2">
                        <div className="gapi3"></div>
                            <div className='pamu d-flex '>
                            <Avatar style={{marginLeft:20,marginTop:10}} alt="Remy Sharp" src={images6} />
                            <div style={{marginLeft:10 ,marginTop:10}} className="d-flex row">
                            <h5 id='rayan'>Debbie O'Brien</h5>
                            <p id='remix'> Senior Program Manager at Microsoft</p>
                            </div>
                            </div>
                            <div className="texti-pllo container-lg">
                                <p  id='idiot'>I have been working with Files for over ten years and KeepCo helped me so much in every aspect,starting from setting up files by order and made the work 5x faster now. Its very good how people create those time saving apps</p>
                            </div>
                        </li>
                        <div className="gapi2"></div>
                        <li className="li4">
                        <div className="gapi3"></div>
                            <div className='pamu d-flex '>
                            <Avatar style={{marginLeft:20,marginTop:10}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <div style={{marginLeft:10 ,marginTop:10}} className="d-flex row">
                            <h5 id='rayan'>Rayanp Florence</h5>
                            <p id='remix'> Remix & React Training</p>
                            </div>
                            </div>
                            <div className="texti-pllo container-lg">
                                <p id='idiot'>i feel like an idiot for not using KeepCo untill now</p>
                            </div>
                        </li>
                </div>
            </div>
            <motion.div 
             variants={fadeIn}
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
            className="d-flex justify-content-center">
            <Button 
                variant="outlined"
                onClick={() => hideContent ()}
                 >
                  
                 I got the point
             </Button>
            </motion.div>
            <div ref={movi} className="movirate"></div>
         </div>
           
    </div>
     );
}
 
export default Coments;