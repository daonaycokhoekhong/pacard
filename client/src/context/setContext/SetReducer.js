const SetReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_SET_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_SET_SUCCESS":
      return {
        sets: [...state.sets, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_SET_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPDATE_SET_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPDATE_SET_SUCCESS":
      return {
        sets: state.sets.map(
          (set) => set._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPDATE_SET_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "SHARE_SET_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "SHARE_SET_SUCCESS":
      return {
        sets: state.sets.map(
          (set) => set._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "SHARE_SET_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_SET_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_SET_SUCCESS":
      return {
        sets: state.sets.filter((set) => set._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_SET_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "GET_ALL_SETS_PUBLIC_START":
      return {
        sets: [],
        isFetching: true,
        error: false,
      };
    case "GET_ALL_SETS_PUBLIC_SUCCESS":
      return {
        sets: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_ALL_SETS_PUBLIC_FAILURE":
      return {
        sets: [],
        isFetching: false,
        error: true,
      };
    case "GET_ALL_SETS_USER_START":
      return {
        sets: [],
        isFetching: true,
        error: false,
      };
    case "GET_ALL_SETS_USER_SUCCESS":
      return {
        sets: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_ALL_SETS_USER_FAILURE":
      return {
        sets: [],
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default SetReducer;
