const init = {
    loading: false,
    posts: []
};

const reducer = (state = init, action) => {
    switch (action.type) {
        case "FETCHING_POSTS":
            return {
                ...state,
                loading: true
            }
        case "FETCHED_POSTS":
            return {
                ...state,
                loading: false,
                posts: [...action.payload],
            }
        default:
            return state;
    }
}

export default reducer;