
import Text from '../features/Text'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';
import { useAnimate } from 'framer-motion';
const Edit = () => {

    const [scope,animate] =useAnimate();

    const [isButtonClicked, setIsButtonClicked] = useState(null);

    const handleButtonClick = (contentId) => {
      setIsButtonClicked(contentId);
    };
  

    return ( 
        <div className="edito">
            <h1>Text</h1>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Edit your files with a lot of costumization</p>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>All the features of Edit will be shown here</p>
            <h2 style={{marginTop:30}} className='d-flex justify-content-start' > Text Aligment</h2>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Those features works only in JPG , PNG , SVG </p>
            <div style={{marginTop:30}} className="kallxoju">
                <div className="row  justify-content-between">
                    <div className="col-md-6">
                    <div className="d-flex flex-column">
                            <div className="d-flex">
                            <FormatAlignLeftIcon style={{color:'#3399ff'}}/>
                            <p style={{color:'#bbbbbb',marginLeft:20}}>Can align text to the <b className='bold'>start</b>  of the image</p>
                            </div>
                            <div className="d-flex">
                            <FormatAlignCenterIcon style={{color:'#3399ff',marginTop:0}}/>
                            <p style={{color:'#bbbbbb',marginLeft:20}}>Can align text to the <b className='bold'>center</b>  of the image</p>
                            </div>
                            <div className="d-flex">
                            <FormatAlignRightIcon style={{color:'#3399ff',marginTop:0}} />
                            <p style={{color:'#bbbbbb',marginLeft:20}}>Can align text to the <b className='bold'>end</b>  of the image</p>
                            </div>
                            <div className="d-flex">
                            <FormatAlignJustifyIcon style={{color:'#3399ff',marginTop:0}}/>
                            <p style={{color:'#bbbbbb',marginLeft:20}}>Can align text in <b className='bold'>columns</b>  on the image</p>
                            </div>
                            <div className="d-flex">
                            <FormatBoldIcon style={{color:'#3399ff',marginTop:0}}/>
                            <p style={{color:'#bbbbbb',marginLeft:20}}>Changes the text in <b className='bold'>bold</b> format</p>
                            </div>
                            <div className="d-flex">
                            <FormatItalicIcon style={{color:'#3399ff',marginTop:0}} />
                            <p style={{color:'#bbbbbb',marginLeft:20}}>Changes the text in <b className='bold'>italic</b> format</p>
                            </div>
                            <div className="d-flex">
                            <FormatUnderlinedIcon style={{color:'#3399ff',marginTop:0}}/>
                            <p style={{color:'#bbbbbb',marginLeft:20}}>Changes the text in <b className='bold'>underlined</b> format</p>
                            </div>
                    </div>
                    </div>
            
                <div style={{marginTop:40}} className="tragoju col-md-6 d-flex justify-content-start justify-content-lg-center">
                <div style={{marginTop:40}} className="">
                     <Text style={{display:'flex' ,justifyContent:'center'}} /> 
                </div>
                </div>
                <div className='plajgrandi'>
                    <h2 style={{marginTop:50}}>Playground</h2>
                    <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Costumize text with a lot of different colors </p>
                    <div className="primary-secondary d-flex">
                    <div className="d-flex flex-column">
                        <h6 style={{marginTop:30}} className='text-start'>Primary</h6>
                        <div className="d-flex">
                            <button style={{marginRight:0}} id='first' className={`redi ${isButtonClicked === 'first' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('first')} >
                           <span></span>
                            </button>
                            <button style={{marginRight:0}} id='second' className={`pinki ${isButtonClicked === 'second' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('second')} >
                            <span></span>
                            </button>
                            <button style={{marginRight:0}} id='third' className={`purpli ${isButtonClicked === 'third' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('third')} >
                            <span></span>
                            </button>
                            <button style={{marginRight:0}} id='four' className={`purpli2 ${isButtonClicked === 'four' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('four')} >
                            <span></span>
                            </button>
                        </div>
                        <div className="d-flex">
                            <button style={{marginRight:0}} id='five' className={`blui ${isButtonClicked === 'five' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('five')} >
                            <span></span>
                            </button>
                            <button style={{marginRight:0}} id='six' className={`blui2 ${isButtonClicked === 'six' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('six')} >
                            <span></span>
                            </button>
                            <button style={{marginRight:0}} id='seven' className={`blui3 ${isButtonClicked === 'seven' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('seven')} >
                            <span></span>
                            </button>
                            <button style={{marginRight:0}} id='eight' className={`blui4 ${isButtonClicked === 'eight' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('eight')} >
                            <span></span>
                            </button>
                        </div>
                        <div className="d-flex">
                            <button style={{marginRight:0}} id='nine' className={`greni ${isButtonClicked === 'nine' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('nine')} >
                            <span></span>
                            </button>
                            <button style={{marginRight:0}} id='ten' className={`greni2 ${isButtonClicked === 'ten' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('ten')} >
                            <span></span>
                            </button>
                            <button style={{marginRight:0}} id='ten2' className={`greni3 ${isButtonClicked === 'ten2' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('ten2')} >
                            <span></span>
                            </button>
                            <button  style={{marginRight:0}} id='ten2' className={`greni4 ${isButtonClicked === 'ten3' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('ten3')} >
                            <span></span>
                            </button>
                        </div>
                    </div>
                    <div className="secondin  d-flex flex-column">
                        <h6 style={{marginTop:30}} className='text-start'>Secondary</h6>
                        <div className="d-flex">
                            <button style={{marginRight:0}} id='ten4' className={`redi-replicant ${isButtonClicked === 'ten4' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('ten4')} >
                            <span></span>
                            </button>
                            <button style={{marginRight:0}} id='ten5' className={`pinki-replicant ${isButtonClicked === 'ten5' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('ten5')}>
                            <span></span>
                            </button>
                            <button style={{marginRight:0}} id='ten6' className={`purpli-replicant ${isButtonClicked === 'ten6' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('ten6')} >
                            <span></span>
                            </button>
                            <button style={{marginRight:0}} id='ten7' className={`purpli2-replicant ${isButtonClicked === 'ten7' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('ten7')} >
                            <span></span>
                            </button>
                        </div>
                        <div className="d-flex">
                            <button style={{marginRight:0}} id='ten8' className={`blui-replicant ${isButtonClicked === 'ten8' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('ten8')} >
                            <span></span>
                            </button>
                            <button style={{marginRight:0}} id='ten9' className={`blui2-replicant ${isButtonClicked === 'ten9' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('ten9')} >
                            <span></span>
                            </button>
                            <button style={{marginRight:0}} id='ten10' className={`blui3-replicant ${isButtonClicked === 'ten10' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('ten10')} >
                            <span></span>
                            </button>
                            <button style={{marginRight:0}} id='ten11' className={`blui4-replicant ${isButtonClicked === 'ten11' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('ten11')}>
                            <span></span>
                            </button>
                        </div>
                        <div className="d-flex">
                            <button style={{marginRight:0}} id='ten12' className={`greni-replicant ${isButtonClicked === 'ten12' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('ten12')} >
                            <span></span>
                            </button>
                            <button style={{marginRight:0}} id='ten13' className={`greni2-replicant ${isButtonClicked === 'ten13' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('ten13')} >
                            <span></span>
                            </button>
                            <button style={{marginRight:0}} id='ten14' className={`greni3-replicant ${isButtonClicked === 'ten14' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('ten14')} >
                            <span></span>
                            </button>
                            <button style={{marginRight:0}} id='ten15' className={`greni4-replicant ${isButtonClicked === 'ten15' ? 'clicked' : ''}`}  onClick={() => handleButtonClick('ten15')} >
                            <span></span>
                            </button>
                        </div>
                    </div>
                        
                        <div className="colori-text d-flex justify-content-end">
                        <h5 className={`btno ${isButtonClicked === 'first' ? 'redi-color' : ''} ${isButtonClicked === 'second' ? 'pinki-color' : ''}${isButtonClicked === 'third' ? 'purpli-color' : ''}${isButtonClicked === 'four' ? 'purpli2-color' : ''}${isButtonClicked === 'five' ? 'blui-color' : ''}${isButtonClicked === 'six' ? 'blui2-color' : ''}${isButtonClicked === 'seven' ? 'blui3-color' : ''}${isButtonClicked === 'eight' ? 'blui4-color' : ''}${isButtonClicked === 'nine' ? 'greni-color' : ''}${isButtonClicked === 'ten' ? 'greni2-color' : ''}${isButtonClicked === 'ten2' ? 'greni3-color' : ''}${isButtonClicked === 'ten3' ? 'greni4-color' : ''}${isButtonClicked === 'ten4' ? 'redi-replicant-color' : ''}${isButtonClicked === 'ten5' ? 'pinki-replicant-color' : ''}${isButtonClicked === 'ten6' ? 'purpli-replicant-color' : ''}${isButtonClicked === 'ten7' ? 'purpli2-replicant-color' : ''}${isButtonClicked === 'ten8' ? 'blui-replicant-color' : ''}${isButtonClicked === 'ten9' ? 'blui2-replicant-color' : ''}${isButtonClicked === 'ten10' ? 'blui3-replicant-color' : ''}${isButtonClicked === 'ten11' ? 'blui4-replicant-color' : ''}${isButtonClicked === 'ten12' ? 'greni-replicant-color' : ''}${isButtonClicked === 'ten13' ? 'greni2-replicant-color' : ''}${isButtonClicked === 'ten14' ? 'greni3-replicant-color' : ''}${isButtonClicked === 'ten15' ? 'greni4-replicant-color' : ''}`}   style={{fontSize:40}}>Text</h5>
                        </div>
                  
                    </div>
                    <h2 className='size-style'>Size and Style</h2>
                    <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Costumize text with a lot of different colors </p>
                </div>
            </div>
                
            </div>
            <div className="empty4"></div>
            <div className="empty4"></div>
        </div>
     );
}
 
export default Edit;