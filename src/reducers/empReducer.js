export default function empReducer(state = [],action) {
    //yes / or -> condition statements......
    switch (action.type) {
        case 'EmpAction':
            return action.payload;

        default:
            return state
    }
}