export default function empReducer(state={}, action)
{

    //yes / or -> conditional Statements......
    switch(action.type)
    {
        case 'EmpAction':
            return action.payload; breaks;

        default:
            return state

    }

}