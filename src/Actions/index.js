import { SET_SELECTED_PAGE } from "../Constants";

export const setSelectedPage = (page = "") => {
  return {
    type: SET_SELECTED_PAGE,
    payload: page,
  };
};
