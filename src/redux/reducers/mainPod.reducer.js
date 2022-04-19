const mainPodReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MAIN_POD':
            return action.payload;
        default:
            return state;
    }
};

export default mainPodReducer;