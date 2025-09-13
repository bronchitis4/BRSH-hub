export const fetchedPosts = (value) => {
    return {
        type: "FETCHED_POSTS",
        payload: value
    }
}

export const fetchingPosts = () => {
    return {
        type: "FETCHING_POSTS"
    }
}
