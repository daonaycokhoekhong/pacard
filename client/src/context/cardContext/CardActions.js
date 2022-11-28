export const getCardToLearnStart = () => ({
  type: "GET_CARD_TO_LEARN_START",
});

export const getCardToLearnSuccess = (card, id) => ({
  type: "GET_CARD_TO_LEARN_SUCCESS",
  payload: card,id
});

export const getCardToLearnFailure = () => ({
  type: "GET_CARD_TO_LEARN_FAILURE",
});

export const getCardToReviewStart = () => ({
  type: "GET_CARD_TO_REVIEW_START",
});

export const getCardToReviewSuccess = (card, id) => ({
  type: "GET_CARD_TO_REVIEW_SUCCESS",
  payload: card, id
});

export const getCardToReviewFailure = () => ({
  type: "GET_CARD_TO_REVIEW_FAILURE",
});

export const createCardStart = () => ({
  type: "CREATE_CARD_START",
});

export const createCardSuccess = (todo) => ({
  type: "CREATE_CARD_SUCCESS",
  payload: todo,
});

export const createCardFailure = () => ({
  type: "CREATE_CARD_FAILURE",
});

export const updateCardStart = () => ({
  type: "UPDATE_CARD_START",
});

export const updateCardSuccess = (id, todo) => ({
  type: "UPDATE_CARD_SUCCESS",
  payload: todo,id
});

export const updateCardFailure = () => ({
  type: "UPDATE_CARD_FAILURE",
});

export const deleteCardStart = () => ({
  type: "DELETE_CARD_START",
});

export const deleteCardSuccess = (id) => ({
  type: "DELETE_CARD_SUCCESS",
  payload: id,
});

export const deleteCardFailure = () => ({
  type: "DELETE_CARD_FAILURE",
});
