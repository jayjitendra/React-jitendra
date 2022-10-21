import {React,useState,useEffect} from 'react'
import axios from 'axios'
import Pager from './Pager'

const apiurl = `https://jsonplaceholder.typicode.com/posts`

export default (props) =>{


 {
    //state Object Implementations by HOOKS
    var [posts, setStatePosts] =useState([]);
   
    //Select default Max posts per Action
    var [DefaultMaxDisplayposts] = useState(10);


    //API CALLS by HOOKS
    useEffect(()=>
    {
      axios.get(apiurl).then((result)=>setStatePosts(result.data))
    },[])
    
    //Total posts from API
    var totalPosts = posts.length


    return(<>
             

       <div className='container p-5'>

        <h1 className='text-center py-3'>REACT Hooks Pagination</h1>
      
         <br/> <br/>


         <Pager totalPostsInAPI= {totalPosts}  
         maxDisplayrecordsPerButton={DefaultMaxDisplayposts}/>
         
         
         <br/> <br/>

        {

            posts.map((res,i)=>
            {
                return(<ul key={i}>
                           <li>
                               <h4>{res.id}.{res.title}</h4>
                               <p>{res.body}</p>
                           </li>
                    </ul>)
                })

        }


         

       </div>
       
      

      </>)
 }
}