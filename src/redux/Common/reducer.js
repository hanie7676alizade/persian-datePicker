import * as actionTypes from "./actionTypes";
import { updateObject } from "util/helpers";

const initialState = {
  loading: false,
  buttonLoading: false,
  //input Error = = = = = = = = = = > cancled for now
  showInputError: false,
  messageInputError: "",
  //Alert
  showAlert: false,
  messageAlert: "",
  typeAlert: "",
  //Redirect
  redirectState: false,
  redirectURL: "",
  //Pop up
  popUpState: false,
  popUpText: "",
  popUpButtons: [],
  //
  showSideMenu: false,
  documentTitle: "موبایل کانکت",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COMMON_SET_POP_UP:
      return updateObject(state, {
        popUpState: action.popUpState,
        popUpText: action.popUpText,
        popUpButtons: action.popUpButtons,
      });

    case actionTypes.COMMON_SET_REDIRECT:
      return updateObject(state, {
        redirectState: action.redirectState,
        redirectURL: action.redirectURL,
      });

    case actionTypes.COMMON_SET_ALERT:
      return updateObject(state, {
        showAlert: action.showAlert,
        messageAlert: action.messageAlert,
        typeAlert: action.typeAlert,
      });
    case actionTypes.COMMON_SET_INPUT_ERR:
      return updateObject(state, {
        showInputError: action.showInputError,
        messageInputError: action.messageInputError,
      });
    case actionTypes.COMMON_SET_SHOW_INPUT_ERR:
      return updateObject(state, {
        showInputError: action.showInputError,
      });
    case actionTypes.COMMON_SET_SHOW_ALERT:
      return updateObject(state, {
        showAlert: action.showAlert,
      });

    case actionTypes.COMMON_SET_LOADING:
      return updateObject(state, { loading: action.data.loading });

    case actionTypes.COMMON_SET_BUTTON_LOADING:
      return updateObject(state, { buttonLoading: action.data.buttonLoading });

    case actionTypes.COMMON_SET_DOCUMENT_TITLE:
      return updateObject(state, { documentTitle: action.data.title });

    case actionTypes.COMMON_SET_SHOW_SIDE_MENU:
      return updateObject(state, {
        showSideMenu: action.showSideMenu,
      });
    default:
      return state;
  }
};

export default reducer;
