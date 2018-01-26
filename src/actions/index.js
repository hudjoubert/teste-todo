const ADD_TASK = 'ADD_TASK';
const GET_TASK = 'GET_TASK';
export const AddTask = (task, currentTask) => {
 currentTask.push(task);
    return {
        type: ADD_TASK,
        payload: currentTask
    }
}

export const getTask = (get) => {
    return {
        type: GET_TASK,
        payload: get
    }
}

