import { PUBLISH_POST, SAVE_POST } from "../types";

const INITIAL_STATE = {
    posts: [],
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SAVE_POST:
           return {
             ...state, other: {},
           };
        case PUBLISH_POST:
           return {
              ...state, other: {},
           };
         default: return state;
    }
};
export default reducer;