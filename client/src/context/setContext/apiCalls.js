import axios from "axios";
import {
  createSetFailure,
  createSetStart,
  createSetSuccess,
  updateSetFailure,
  updateSetStart,
  updateSetSuccess,
  shareSetFailure,
  shareSetStart,
  shareSetSuccess,
  deleteSetFailure,
  deleteSetStart,
  deleteSetSuccess,
  // getSetsByClassifyFailure,
  // getSetsByClassifyStart,
  // getSetsByClassifySuccess,
  // getSetByIdPublicFailure,
  // getSetByIdPublicStart,
  // getSetByIdPublicSuccess,
  getAllSetsPublicFailure,
  getAllSetsPublicStart,
  getAllSetsPublicSuccess,
  // getSetByIdUserFailure,
  // getSetByIdUserStart,
  // getSetByIdUserSuccess,
  getAllSetsUserFailure,
  getAllSetsUserStart,
  getAllSetsUserSuccess,
  voteStarFailure,
  voteStarStart,
  voteStarSuccess,
  addSetFailure,
  addSetStart,
  addSetSuccess,
  getResultFailure,
  getResultStart,
  getResultSuccess,
  // createCardFailure,
  // createCardStart,
  // createCardSuccess,
  // updateCardFailure,
  // updateCardStart,
  // updateCardSuccess,
  // deleteCardFailure,
  // deleteCardStart,
  // deleteCardSuccess,
} from "./SetActions";

// Create Set
export const createSet = async (set, dispatch) => {
  dispatch(createSetStart());
  try {
    const res = await axios.post("/api/sets", set, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createSetSuccess(res.data));
  } catch (err) {
    dispatch(createSetFailure());
  }
};

// Update Set
export const updateSet = async (id, set, dispatch) => {
  dispatch(updateSetStart());
  try {
    const res = await axios.put("/api/sets/update/" + id, set, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateSetSuccess(res.data));
  } catch (err) {
    dispatch(updateSetFailure());
  }
};


// Delete Set
export const deleteSet = async (id, dispatch) => {
  dispatch(deleteSetStart());
  try {
    await axios.delete("/api/sets/delete/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteSetSuccess(id));
  } catch (err) {
    dispatch(deleteSetFailure());
  }
};

// Share set
export const shareSet = async (id, set, dispatch) => {
  dispatch(shareSetStart());
  try {
    const res = await axios.put("/api/sets/update/" + id, set, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(shareSetSuccess(res.data));
  } catch (err) {
    dispatch(shareSetFailure());
  }
};

// Add Sets to User

// Get Sets By Classify

// Get Sets By ID Public

// Get All Sets Public
export const getAllSetsPublic = async (dispatch) => {
  dispatch(getAllSetsPublicStart());
  try {
    const res = await axios.get("/api/sets/library", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getAllSetsPublicSuccess(res.data));
  } catch (err) {
    dispatch(getAllSetsPublicFailure());
  }
};

// Get Sets By ID User

// Get All Sets User
export const getAllSetsUser = async (dispatch) => {
  dispatch(getAllSetsUserStart());
  try {
    const res = await axios.get("/api/sets/view", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getAllSetsUserSuccess(res.data));
  } catch (err) {
    dispatch(getAllSetsUserFailure());
  }
};

// Vote Star

// Get Result
// export const getResult = async (dispatch) => {
//   dispatch(getResultStart());
//   try {
//     const res = await axios.get("/api/sets/view", {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(getResultSuccess(res.data));
//   } catch (err) {
//     dispatch(getResultFailure());
//   }
// };
// Get Card to Learn
// export const getCardToLearn = async (set_id, dispatch) => {
//   dispatch(getCardToLearnStart());
//   try {
//     const res = await axios.get("/api/sets/" + set_id + "/learn", {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(getCardToLearnSuccess(res.data));
//   } catch (err) {
//     dispatch(getCardToLearnFailure());
//   }
// };
//
// // Get Card to Review
// export const getCardToReview = async (dispatch) => {
//   dispatch(getCardToReviewStart());
//   try {
//     const res = await axios.get("/api/sets/review", {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(getCardToReviewSuccess(res.data));
//   } catch (err) {
//     dispatch(getCardToReviewFailure());
//   }
// };

// Create Card
// export const createCard = async (set_id, cards, dispatch) => {
//   dispatch(createCardStart());
//   try {
//     const res = await axios.post("/api/sets/"+ set_id + "/addCard", cards, {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(createCardSuccess(res.data));
//   } catch (err) {
//     dispatch(createCardFailure());
//   }
// };

//update
// export const updateCard = async (id, card, dispatch) => {
//   dispatch(updateCardStart());
//   try {
//     const res = await axios.put("/api/cards/" + id, card, {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(updateCardSuccess(res.data));
//   } catch (err) {
//     dispatch(updateCardFailure());
//   }
// };
//

//delete (Dang gap chut van de)
// export const deleteCard = async (set_id, id, dispatch) => {
//   dispatch(deleteCardStart());
//   try {
//     await axios.delete("/api/sets/" + set_id + "/deleteCard/" + id, {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(deleteCardSuccess(id));
//   } catch (err) {
//     dispatch(deleteCardFailure());
//   }
// };
