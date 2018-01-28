const INITIAL_STATE = {
    tasks: [
        'estudar'
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            state.tasks.push(action.payload)
            return { ...state, tasks: state.tasks }
            break;

        case 'REMOVE_TASK':
            state.tasks.splice(action.payload, 1)
            return { ...state, tasks: state.tasks }
            break;

        default:
            return state;
            break;
    }
}
