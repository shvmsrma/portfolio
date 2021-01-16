import { SET_SELECTED_PAGE, SET_THEME } from "../Constants";

export const setSelectedPage = (page = "") => {
  return {
    type: SET_SELECTED_PAGE,
    payload: page,
  };
};

export const setTheme = (theme = "") => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};
