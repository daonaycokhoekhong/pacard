import axios from "axios";
import {
  createCardFailure,
  createCardStart,
  createCardSuccess,
  updateCardFailure,
  updateCardStart,
  updateCardSuccess,
  deleteCardFailure,
  deleteCardStart,
  deleteCardSuccess,
  getCardToLearnStart,
  getCardToLearnFailure,
  getCardToLearnSuccess,
  getCardToReviewFailure,
  getCardToReviewStart,
  getCardToReviewSuccess
} from "./CardActions";

// export const getCards = async (dispatch) => {
//   dispatch(getCardsStart());
//   try {
//     const res = await axios.get("/api/cardItem", {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(getCardsSuccess(res.data));
//   } catch (err) {
//     dispatch(getCardsFailure());
//   }
// };

// Get Card to Learn
export const getCardToLearn = async (set_id, dispatch) => {
  dispatch(getCardToLearnStart());
  try {
    const res = await axios.get("/api/sets/" + set_id + "/learn", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getCardToLearnSuccess(res.data));
  } catch (err) {
    dispatch(getCardToLearnFailure());
  }
};

// Get Card to Review
export const getCardToReview = async (dispatch) => {
  dispatch(getCardToReviewStart());
  try {
    const res = await axios.get("/api/sets/review", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getCardToReviewSuccess(res.data));
  } catch (err) {
    dispatch(getCardToReviewFailure());
  }
};


//create
export const createCard = async (set_id, cards, dispatch) => {
  dispatch(createCardStart());
  try {
    const res = await axios.post("/api/sets/"+ set_id + "/addCard", cards, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createCardSuccess(res.data));
  } catch (err) {
    dispatch(createCardFailure());
  }
};

//update
export const updateCard = async (id, card, dispatch) => {
  dispatch(updateCardStart());
  try {
    const res = await axios.put("/api/cards/" + id, card, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateCardSuccess(res.data));
  } catch (err) {
    dispatch(updateCardFailure());
  }
};


//delete
export const deleteCard = async (set_id, id, dispatch) => {
  dispatch(deleteCardStart());
  try {
    await axios.delete("/api/sets/" + set_id + "/deleteCard/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteCardSuccess(id));
  } catch (err) {
    dispatch(deleteCardFailure());
  }
};
