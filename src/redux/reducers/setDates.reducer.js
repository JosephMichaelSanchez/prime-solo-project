const setDatesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DATES':
            return action.payload;
        default:
            return state;
    }
};

export default setDatesReducer;