export const emailValidation = (email) => {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return !regex.test(email);
};

export const passwordValidation = (password) => {
  if (password === null) return true;
  if (password.length < 6) return true;

  return false;
};
