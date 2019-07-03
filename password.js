class PasswordChecker {
  constructor() {
    this.upperCase = /[A-Z]/;
    this.lowerCase = /[a-z]/;
    this.number = /[0-9]/;
  }

  password_is_valid(password) {
    // try {
    //conditions that check various validation requirements for the password
    if (password == "") throw new Error("password should not be empty");

    if (!this.upperCase.test(password))
      throw new Error(
        "password should contain atleast one Uppercase character"
      );

    if (!this.lowerCase.test(password))
      throw new Error(
        "password should contain atleast one lowercase character"
      );

    if (!this.number.test(password))
      throw new Error("password should contain atleast one number");

    if (password.length < 8)
      throw new Error("password should be more than eight characters");

    // } catch (error) {
    //     console.log('caught', error)
    // }
  }

  //checks three different password requirements and returns true if stleast three are met
  password_is_okay(password) {
    if (
      password.length >= 8 &&
      this.upperCase.test(password) &&
      this.number.test(password)
    )
      return true;

    if (
      this.lowerCase.test(password) &&
      password == "" &&
      this.number.test(password)
    ) {
      return true;
    }
  }
}
module.exports = PasswordChecker;

// password_is_valid('Todayawayplay1');
// password_is_okay('Toni6ghTa');
