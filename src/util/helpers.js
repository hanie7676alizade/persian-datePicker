export const updateObject = (object, update) => ({
    ...object,
    ...update,
});

export const textSlice = (str, characterCount = 100) => {
    return str.replace(/(<([^>]+)>)/gi, "").slice(0, characterCount);
};

export const handleBackHistory = (history) => {
    history.goBack();
};

export const convertDateToFa = (date, options) => {
    return new Date(date).toLocaleDateString("fa-IR", options);
};
export const convertDateToEng = (date, options) => {
    return new Date(date).toLocaleDateString("en-US", options);
};

export const convertToEnglishNumber = (number) => {
    let result = "";
    let textNumber = number.toString();

    textNumber.split("").forEach((str) => {
        switch (str) {
            case "۱":
                result = result + "1";
                break;
            case "۲":
                result = result + "2";
                break;
            case "۳":
                result = result + "3";
                break;
            case "۴":
                result = result + "4";
                break;
            case "۵":
                result = result + "5";
                break;
            case "۶":
                result = result + "6";
                break;
            case "۷":
                result = result + "7";
                break;
            case "۸":
                result = result + "8";
                break;
            case "۹":
                result = result + "9";
                break;
            case "۰":
                result = result + "0";
                break;

            default:
                result = result + str;
        }
    });
    return result;
};