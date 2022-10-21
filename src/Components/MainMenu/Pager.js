import { React } from 'react'

//pager
export default (props) =>{
   
    var numbers = []

    var { totalPostsInAPI, maxDisplayrecordsPerButton } = props

    var numberofButtons = Math.ceil(totalPostsInAPI / maxDisplayrecordsPerButton);

    for (let i=1; i<=numberofButtons; i++)
    {
        numbers.push(i)//defined Array
    }

    return (<>
             

       <div className='container p-5'>

           <ul class="pagination">
                {
                    numbers.map((res,i)=> <li class="page-item">
                                             <a class="page-link" href="#">${res}</a>
                                          </li>)
                }
           </ul>

       

       </div>
       
      

      </>)
 
}