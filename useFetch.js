
import { useEffect ,useState } from 'react';



const useFetch = () => {


const [blogs, setBlogs] = useState(null); 
const [isPending , setIsPending] = useState(true);
const [error , setError] = useState(null);
const [LastBlogs ,setLastBlogs] = useState('');
const [textBlog , setTextBlog] = useState('');
const [website ,setWebsite] = useState('');




    useEffect(() => {
        setTimeout(() => {
          fetch( 'http://localhost:8000/blogs' )
    
          .then(res => {
            if (!res.ok) {
              throw Error('could not fetch the data for that resource');
            }
            return res.json()
          }) 
            .then(data =>
              {
                
                setWebsite('Our Website')
                setLastBlogs('Last Blogs')
                setTextBlog('Create  Blogs in our Website it is free and easy')
                setBlogs(data);
                setIsPending(false);
                setError(null);
                
              })
              .catch(err =>{
                setIsPending(false)
              setError(err.message);
              })
    
        } , 1000);
       
      }, [])

      return{
        blogs,isPending,error ,LastBlogs,textBlog, website
      }
}
 
export default useFetch;