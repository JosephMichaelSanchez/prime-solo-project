const podReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_POD':
            return action.payload[0];
        default:
            return state;
    }
};

export default podReducer;