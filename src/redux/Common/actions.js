import * as actionTypes from "./actionTypes";

export const setAlert = (showAlert, messageAlert, typeAlert) => {
    return {
        type: actionTypes.COMMON_SET_ALERT,
        showAlert,
        messageAlert,
        typeAlert,
    };
};
export const setShowAlert = (showAlert) => {
    return {
        type: actionTypes.COMMON_SET_SHOW_ALERT,
        showAlert,
    };
};

export const setInputError = (showInputError, messageInputError) => {
    return {
        type: actionTypes.COMMON_SET_INPUT_ERR,
        showInputError,
        messageInputError,
    };
};
export const setShowInputError = (showInputError) => {
    return {
        type: actionTypes.COMMON_SET_SHOW_INPUT_ERR,
        showInputError,
    };
};

export const setRedirect = (redirectState, redirectURL) => {
    return {
        type: actionTypes.COMMON_SET_REDIRECT,
        redirectState,
        redirectURL,
    };
};

export const setPopUp = (popUpState, popUpText, popUpButtons) => {
    return {
        type: actionTypes.COMMON_SET_POP_UP,
        popUpState,
        popUpText,
        popUpButtons,
    };
};

export const setLoading = (loading) => {
    return {
        type: actionTypes.COMMON_SET_LOADING,
        data: { loading },
    };
};

export const setButtonLoading = (buttonLoading) => {
    return {
        type: actionTypes.COMMON_SET_BUTTON_LOADING,
        data: { buttonLoading },
    };
};

export const setDocumentTitle = (title) => {
    return {
        type: actionTypes.COMMON_SET_DOCUMENT_TITLE,
        data: { title },
    };
};

export const setShowSideMenu = (showSideMenu) => {
    return {
        type: actionTypes.COMMON_SET_SHOW_SIDE_MENU,
        showSideMenu,
    };
};