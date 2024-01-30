import Text from '../features/Text'
const Edit = () => {
    return ( 
        <div className="edito">
            <h1>Edit</h1>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Edit your files with a lot of costumization</p>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>All the features of Edit will be shown here</p>
            <h2 style={{marginTop:30}} className='d-flex justify-content-start' > Quickstart</h2>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Remember that all the Files don't have the same features</p>
            <div style={{marginTop:30}} className="kallxoju">
                <div className="d-flex">
                    <div className="d-flex flex-column">
                        <h6>JPG</h6>
                        <h6>PNG</h6>
                        <h6>SVG</h6>
                    </div>
                    <svg className='tist1' style={{marginLeft:30,marginTop:10}} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#3399ff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <div className="d-flex align-items-center">
                        <h5 style={{marginLeft:30,color:'#3399ff'}}>16 Features</h5>
                    </div>
                </div>
                <div style={{marginTop:30}} className="d-flex">
                <div className="d-flex flex-column">
                        <h6>PDF</h6>
                        <h6>GIF</h6>
                    </div>
                    <svg className='tist1' style={{marginLeft:30,marginTop:0}} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#3399ff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <div className="d-flex align-items-center">
                        <h5 style={{marginLeft:30,color:'#3399ff'}}>10 Features</h5>
                    </div>
                </div>
            </div>
                <h2 style={{marginTop:40}}>The features</h2>
                <h5 style={{ marginLeft:5}}>Text Editor</h5>
            <div style={{marginTop:40}} className="tragoju d-flex justify-content-center">
                <div style={{marginTop:40}} className="">
                     <Text style={{display:'flex' ,justifyContent:'center'}} /> 
                </div>
            </div>
            <div className="empty4"></div>
            <div className="empty4"></div>
        </div>
     );
}
 
export default Edit;