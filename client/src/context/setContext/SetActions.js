export const createSetStart = () => ({
  type: "CREATE_SET_START",
});

export const createSetSuccess = (set) => ({
  type: "CREATE_SET_SUCCESS",
  payload: set,
});

export const createSetFailure = () => ({
  type: "CREATE_SET_FAILURE",
});

export const updateSetStart = () => ({
  type: "UPDATE_SET_START",
});

export const updateSetSuccess = (id, set) => ({
  type: "UPDATE_SET_SUCCESS",
  payload: set,id
});

export const updateSetFailure = () => ({
  type: "UPDATE_SET_FAILURE",
});

export const shareSetStart = () => ({
  type: "SHARE_SET_START",
});

export const shareSetSuccess = (id, set) => ({
  type: "SHARE_SET_SUCCESS",
  payload: set,id
});

export const shareSetFailure = () => ({
  type: "SHARE_SET_FAILURE",
});

export const deleteSetStart = () => ({
  type: "DELETE_SET_START",
});

export const deleteSetSuccess = (id) => ({
  type: "DELETE_SET_SUCCESS",
  payload: id,
});

export const deleteSetFailure = () => ({
  type: "DELETE_SET_FAILURE",
});

export const getAllSetsPublicStart = () => ({
  type: "GET_ALL_SETS_PUBLIC_START",
});

export const getAllSetsPublicSuccess = (sets) => ({
  type: "GET_ALL_SETS_PUBLIC_SUCCESS",
  payload: sets,
});

export const getAllSetsPublicFailure = () => ({
  type: "GET_ALL_SETS_PUBLIC_FAILURE",
});

export const getAllSetsUserStart = () => ({
  type: "GET_ALL_SETS_USER_START",
});

export const getAllSetsUserSuccess = (sets) => ({
  type: "GET_ALL_SETS_USER_SUCCESS",
  payload: sets,
});

export const getAllSetsUserFailure = () => ({
  type: "GET_ALL_SETS_USER_FAILURE",
});

