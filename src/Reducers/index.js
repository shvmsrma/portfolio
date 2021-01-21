import { SET_SELECTED_PAGE, SET_THEME } from "../Constants/index";

const initialState = {
  selectedpage: "app",
  theme: "Dark",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SELECTED_PAGE:
      return {
        ...state,
        selectedpage: payload,
      };
    case SET_THEME:
      return {
        ...state,
        theme: payload,
      };
    default:
      return state;
  }
};

export default reducer;
