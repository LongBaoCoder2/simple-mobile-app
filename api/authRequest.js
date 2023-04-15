let { dummyUser } = require("../model/User");

const verifyUsername = (string) => {
  string = string.trim();

  let list = string.split(" ");
  if (list.length > 1) return false;

  return string.length > 6;
};

export default authRequest = {
  // Login
  loginRequest: ({ username, password }) => {
    const user = dummyUser.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) return false;

    return verifyUsername(username) && verifyUsername(password);
  },

  registerRequest: ({ username, email, password }) => {
    console.log(dummyUser);

    const isExisting = dummyUser.find(
      (user) => user.username === username || user.email === email
    );

    if (isExisting) return false;

    const isValid =
      verifyUsername(username) &&
      verifyUsername(password) &&
      email.split("@").length === 2;

    if (!isValid) return false;

    dummyUser.push({ username, email, password });
    return true;
  },
};
