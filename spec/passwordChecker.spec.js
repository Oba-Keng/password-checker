const PasswordChecker = require("../password.js");

describe("A Password Checker", function() {
  it("checks password is not null", function() {
    let validator = new PasswordChecker();
    expect(function() {
      validator.password_is_valid("");
    }).toThrow(new Error("password should not be empty"));
  });

  it("checks password has atleast one Uppercase letter ", function() {
    let validator = new PasswordChecker();
    expect(function() {
      validator.password_is_valid("r");
    }).toThrow(
      new Error("password should contain atleast one Uppercase character")
    );
  });

  it("checks password has atleast one lowercase letter", function() {
    let validator = new PasswordChecker();
    expect(function() {
      validator.password_is_valid("K");
    }).toThrow(
      new Error("password should contain atleast one lowercase character")
    );
  });

  it("checks password has atleast one number", function() {
    let validator = new PasswordChecker();
    expect(function() {
      validator.password_is_valid("kS");
    }).toThrow(new Error("password should contain atleast one number"));
  });

  it("checks password has more than 8 characters", function() {
    let validator = new PasswordChecker();
    expect(function() {
      validator.password_is_valid("Kk1");
    }).toThrow(new Error("password should be more than eight characters"));
  });

  it("meets three of password given criteria", function() {
    let validator = new PasswordChecker();
    expect(validator.password_is_okay("Greatwh1te")).toBe(true);
  });
  it("password is never okay if first two conditions are not met", function() {
    let validator = new PasswordChecker();
    expect(validator.password_is_okay("Ghg1whity")).toBe(true);
  });
});
