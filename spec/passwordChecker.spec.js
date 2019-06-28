var password_is_valid = require("./password.js");
var passed = password_is_valid.password_is_valid;
var password_is_okay = require("./password.js");
var verified = password_is_okay.password_is_okay;

describe("Password Checker", function() {
  it("should check password is not null", function() {
    expect(function() {
      passed("");
    }).toThrow(new Error("password should not be empty"));
  });

  it("should check password has atleast one Uppercase letter ", function() {
    expect(function() {
      passed("r");
    }).toThrow(
      new Error("password should contain atleast one Uppercase character")
    );
  });

  it("should check password has atleast one lowercase letter", function() {
    expect(function() {
      passed("K");
    }).toThrow(
      new Error("password should contain atleast one lowercase character")
    );
  });

  it("should check password has atleast one number", function() {
    expect(function() {
      passed("kS");
    }).toThrow(new Error("password should contain atleast one number"));
  });

  it("should check password has more than 8 characters", function() {
    expect(function() {
      passed("kK1");
    }).toThrow(new Error("password should be more than eight characters"));
  });

  it("meets three of password given criteria", function() {
    expect(verified("tYpo69gravy").toBe(true));
  });
});
