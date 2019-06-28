function password_is_valid(password) {
  const upperCase = /[A-Z]/;
  const lowerCase = /[a-z]/;
  const number = /[0-9]/;

  // try {
  //conditions that check various validation requirements for the password
  if (password == "") throw new Error("password should not be empty");

  if (!upperCase.test(password))
    throw new Error("password should contain atleast one Uppercase character");

  if (!lowerCase.test(password))
    throw new Error("password should contain atleast one lowercase character");

  if (!number.test(password))
    throw new Error("password should contain atleast one number");

  if (password.length < 8)
    throw new Error("password should be more than eight characters");

  // } catch (error) {
  //     console.log('caught', error)
  // }
}
//checks three different password requirements and returns true if stleast three are met
function password_is_okay(password) {
  var passer = new password_is_valid();

  if (
    password.length < 8 &&
    !upperCase.test(this.password) &&
    !number.test(this.password)
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  password_is_valid: password_is_valid,
  password_is_okay: password_is_okay
};

// password_is_valid('Todayawayplay1');
// password_is_okay('Toni6ghTa');
