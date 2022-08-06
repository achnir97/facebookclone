export const initialState = {  // intialization of the user as null just f
    user: null,
}

export const actionTypes = {
    SET_USER: "SET_USER",  // 
};

const reducer = (state, action) => {   // is an arrow function that takes the state and input as parameter, 
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    };
};
export default reducer;