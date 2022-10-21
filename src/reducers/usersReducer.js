export default function usersReducer(state = [],action) {
    //yes / or -> condition statements......
    switch (action.type) {
        case 'usersAction':
            return action.payload;

        default:
            return state
    }
}