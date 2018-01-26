const ADD_TASK = 'ADD_TASK';
export const AddTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

