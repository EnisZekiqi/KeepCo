import CustomList from '../features/CustomList'
const Transfer = () => {
    return ( 
        <div>
            <h1>Transfer</h1>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>Explore your features</p>
            <h2 style={{marginTop:30}} className='d-flex justify-content-start' > Quickstart</h2>
            <p className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>This feature allows you to choose between features </p>
            <p  className='d-flex justify-content-start' style={{color:'#bbbbbb'}}>So you can edit your file and have the most used feature you chose in one place </p>
            <CustomList/>
        </div>
     );
}
 
export default Transfer;