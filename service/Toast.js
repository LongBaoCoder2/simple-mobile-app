import Toast from "react-native-toast-message";

export const showSuccess = (message) => {
  Toast.show({
    type: "success",
    text1: message,
  });
};

export const showError = (message) => {
  Toast.show({
    type: "error",
    text1: message,
  });
};
