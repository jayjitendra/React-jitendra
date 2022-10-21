export default function studentsReducer(state = [],action) {
    //yes / or -> condition statements......
    switch (action.type) {
        case 'StudentsAction':
            return action.payload;

        default:
            return state
    }
}