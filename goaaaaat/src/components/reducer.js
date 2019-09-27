import { FETCH_DATA_START, FETCH_DATA_FAIL, FETCH_DATA_SUCCEED } from "./action";


const initialState = { 
    catCount: 0, catImg: '', isFetching: false, error: "" 
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        
      default:
        return state;
    }
  };