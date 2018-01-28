const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
export const AddTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const removeTask = (task) => {
    return {
        type: REMOVE_TASK,
        payload: task
    }
}

