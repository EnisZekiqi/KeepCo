import Edited from '../images/Edited.jpg'
import { motion } from 'framer-motion';

const shfaqe ={
    initial:{
        opacity:0,
        scale:0
    },
    animate:{
        scale:1,
        opacity:1,
        transition:{
            duration:0.5,
            ease:"easeInOut"
        }
    }
}

const Effects = () => {
    return ( 
    <div>
        <div className="effecto">
            <h1>Effects</h1>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Lots of effects to edit your image to be more stylish</p>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>More than 10 effects are avaliable for you</p>
            <h2 style={{marginTop:30}} className='d-flex justify-content-start' > Featured</h2>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Select some effects to be aplied on the image </p>
            <div style={{marginTop:30}} className="effektet">
                <div className="d-flex justify-content-evenly">
                    <div className="d-flex flex-column">
                        <button style={{border:'none', backgroundColor:'#101419'}}>
                        <div className="d-flex">
                        <div className="image-container">
                            <img id='blackwhite' style={{ width: 30, height: 30, marginRight: 5 }} src={Edited} alt="" />
                        </div>
                            <p style={{color:'#ffffff'}} id='xx' className='text-center' >B&W Tones</p>
                        </div>
                        </button>
                            <button  style={{border:'none', backgroundColor:'#101419'}}>
                            <div  className="d-flex">
                            <div className="image-container2">
                                <img id='blackwhite' style={{ width: 30, height: 30, marginRight: 5 }} src={Edited} alt="" />
                            </div>
                            <p style={{color:'#ffffff'}} id='xx' className='text-center' >Warmer Tones</p>
                            </div>
                            </button>
                            <button  style={{border:'none', backgroundColor:'#101419'}}>
                            <div  className="d-flex">
                            <div className="image-container3">
                                <img id='blackwhite' style={{ width: 30, height: 30, marginRight: 5 }} src={Edited} alt="" />
                            </div>
                            <p style={{color:'#ffffff'}} id='xx' className='text-center' >Analog Tones</p>
                            </div>
                            </button>
                    </div>
                    <div className="d-flex flex-column">
                    <button style={{border:'none', backgroundColor:'#101419'}}>
                        <div className="d-flex">
                        <div className="image-container4">
                            <img id='blackwhite' style={{ width: 30, height: 30, marginRight: 5 }} src={Edited} alt="" />
                        </div>
                            <p style={{color:'#ffffff'}} id='xx' className='text-center' >Lens Flare</p>
                        </div>
                        </button>
                            <button  style={{border:'none', backgroundColor:'#101419'}}>
                            <div  className="d-flex">
                            <div className="image-container5">
                                <img id='blackwhite' style={{ width: 30, height: 30, marginRight: 5 }} src={Edited} alt="" />
                            </div>
                            <p style={{color:'#ffffff'}} id='xx' className='text-center' >Old Photo</p>
                            </div>
                            </button>
                            <button  style={{border:'none', backgroundColor:'#101419'}}>
                            <div  className="d-flex">
                            <div className="image-container6">
                                <img id='blackwhite' style={{ width: 30, height: 30, marginRight: 5 }} src={Edited} alt="" />
                            </div>
                            <p style={{color:'#ffffff'}} id='xx' className='text-center' >Holga Art</p>
                            </div>
                            </button>
                    </div>
                    <div className="d-flex flex-column">
                    <button style={{border:'none', backgroundColor:'#101419'}}>
                        <div className="d-flex">
                        <div className="image-container7">
                            <img id='blackwhite' style={{ width: 30, height: 30, marginRight: 5 }} src={Edited} alt="" />
                        </div>
                            <p style={{color:'#ffffff'}} id='xx' className='text-center' >Rainy Tones</p>
                        </div>
                        </button>
                            <button  style={{border:'none', backgroundColor:'#101419'}}>
                            <div  className="d-flex">
                            <div className="image-container8">
                                <img id='blackwhite' style={{ width: 30, height: 30, marginRight: 5 }} src={Edited} alt="" />
                            </div>
                            <p style={{color:'#ffffff'}} id='xx' className='text-center' >Old Photo2</p>
                            </div>
                            </button>
                            <button  style={{border:'none', backgroundColor:'#101419'}}>
                            <div  className="d-flex">
                            <div className="image-container9">
                                <img id='blackwhite' style={{ width: 30, height: 30, marginRight: 5 }} src={Edited} alt="" />
                            </div>
                            <p style={{color:'#ffffff'}} id='xx' className='text-center' >Color Pinhole</p>
                            </div>
                            </button>
                    </div>
                </div>
                <div style={{marginTop:40}} className="effekti-image d-flex justify-content-center">
                        <img style={{width:300}} src={Edited} alt="" />
                    </div>
            </div>
        </div>
        <div className="empty4"></div>
    </div> 
    );
}
 
export default Effects;<div>
</div>