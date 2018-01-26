const INITIAL_STATE = {
    tasks: [
        'fazer compras'
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, tasks: action.payload }
            break;
        case 'GET_TASK':
            return { ...state, tasks: action.payload }
            break;

        default:
            return state;
            break;
    }
}
