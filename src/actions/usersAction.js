import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users"

export default function usersAction()
{
    return ({
        type: 'usersAction',
        
        payload: axios.get(url).then( (result) => result.data)
        
    })
}