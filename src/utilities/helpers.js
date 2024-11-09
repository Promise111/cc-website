export const getAuthToken = () => {
  let userInfo = JSON.parse(localStorage.getItem("user"));
  if (userInfo) {
    return userInfo["auth_token"];
  } else {
    return "";
  }
};
export const getUserData = () => {
  let userInfo = JSON.parse(localStorage.getItem("user"));
  if (userInfo) {
    return userInfo;
  } else {
    return {};
  }
};
