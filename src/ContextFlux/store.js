const initialStore = {
  storedata: [],
  title: "Default title",
  isLoading: false,
  error: null,
  errorMesssage: null
};

const actions = {
  FETCH_DATA: "FETCH_DATA",
  FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
  FETCH_DATA_FAILURE: "FETCH_DATA_FAILURE",
  CHANGE_TITLE: "CHANGE_TITLE"
};

const actionReducer = (state, action) => {
  switch (action.type) {
    case actions.FETCH_DATA:
      return {
        ...state,
        isLoading: true
      };
    case actions.CHANGE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    case actions.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        storedata: action.payload
      };
    case actions.FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export { initialStore, actions, actionReducer };
