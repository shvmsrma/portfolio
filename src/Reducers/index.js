import { SET_SELECTED_PAGE } from "../Constants/index";

const initialState = {
  selectedpage: "app",
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SELECTED_PAGE:
      return {
        ...state,
        selectedpage: payload,
      };
    default:
      return state;
  }
};
