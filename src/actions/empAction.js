export default function EmpAction()
{
    return ({
        type: 'EmpAction',
        
        payload:
        [ 
            {
            id:1,
            name:'sam',
            email: 'samwilson@gmail.com'
            },
            {
            id:2,
            name:'peter',
            email: 'parker@gmail.com'
            },
            {
            id:3,
            name:'selvi',
            email: 'selvi@gmail.com'
            },   
    
        ]  
    })
}