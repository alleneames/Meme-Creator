let defaultState = {
    top: "",
    bottom: "",
    url: ""
}

const mainReducer = (state = defaultState , action) => {
    if(action.type === "MAKE_MEME") {
        console.log("Somebody made a meme", action.meme);
        return {
            ...state,
            top: action.meme.top,
            bottom: action.meme.bottom,
            url: action.meme.url
        }
    } else {
        return {
        ...state
        }
    }
}

export default mainReducer;