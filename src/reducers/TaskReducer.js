const INITIAL_STATE = {
    tasks: [
        'fazer compras'
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            state.tasks.push(action.payload)
            return { ...state, tasks: state.tasks }
            break;

        default:
            return state;
            break;
    }
}
