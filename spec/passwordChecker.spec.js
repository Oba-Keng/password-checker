const password_is_valid = require("../password.js");
const password_is_okay = require("../password.js");

describe("A Password Checker", function() {
  it("checks password is not null", function() {
    expect(function() {
      password_is_valid("");
    }).toThrow(new Error("password should not be empty"));
  });

  it("checks password has atleast one Uppercase letter ", function() {
    expect(function() {
      password_is_valid("r");
    }).toThrow(
      new Error("password should contain atleast one Uppercase character")
    );
  });

  it("checks password has atleast one lowercase letter", function() {
    expect(function() {
      password_is_valid("K");
    }).toThrow(
      new Error("password should contain atleast one lowercase character")
    );
  });

  it("checks password has atleast one number", function() {
    expect(function() {
      password_is_valid("kS");
    }).toThrow(new Error("password should contain atleast one number"));
  });

  it("checks password has more than 8 characters", function() {
    expect(function() {
      password_is_valid("kK1");
    }).toThrow(new Error("password should be more than eight characters"));
  });

  it("meets three of password given criteria", function() {
    let allowed = true;
    expect(password_is_okay("tYpo69gravy")).toBe(allowed);
  });
});
