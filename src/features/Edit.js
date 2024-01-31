
import Text from '../features/Text'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
const Edit = () => {
    return ( 
        <div className="edito">
            <h1>Text</h1>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Edit your files with a lot of costumization</p>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>All the features of Edit will be shown here</p>
            <h2 style={{marginTop:30}} className='d-flex justify-content-start' > Features</h2>
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
                    <div className="d-flex">
                    <div className="d-flex flex-column">
                        <h6 style={{marginTop:30}} className='text-start'>Primary</h6>
                        <div className="d-flex">
                            <button className='redi'></button>
                            <button className='pinki'></button>
                            <button className='purpli'></button>
                            <button className='purpli2'></button>
                        </div>
                        <div className="d-flex">
                            <button className='blui'></button>
                            <button className='blui2'></button>
                            <button className='blui3'></button>
                            <button className='blui4'></button>
                        </div>
                        <div className="d-flex">
                            <button className='greni'></button>
                            <button className='greni2'></button>
                            <button className='greni3'></button>
                            <button className='greni4'></button>
                        </div>
                    </div>
                    <div style={{marginLeft:50}} className="d-flex flex-column">
                        <h6 style={{marginTop:30}} className='text-start'>Secondary</h6>
                        <div className="d-flex">
                            <button className='redi'></button>
                            <button className='pinki'></button>
                            <button className='purpli'></button>
                            <button className='purpli2'></button>
                        </div>
                        <div className="d-flex">
                            <button className='blui'></button>
                            <button className='blui2'></button>
                            <button className='blui3'></button>
                            <button className='blui4'></button>
                        </div>
                        <div className="d-flex">
                            <button className='greni'></button>
                            <button className='greni2'></button>
                            <button className='greni3'></button>
                            <button className='greni4'></button>
                        </div>
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
 
export default Edit;