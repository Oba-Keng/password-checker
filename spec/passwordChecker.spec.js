var password_is_valid = require('./password.js');
var passed = password_is_valid.password_is_valid;
var password_is_okay = require('./password.js');
var verified = password_is_okay.password_is_okay;




it('password should be longer than eight characters', function(){

 
 expect(function(){passed('heights')}).toThrow(new Error('password should be more than eight characters'));
 });

it('should not be null', function(){

    expect(function(){passed("")}).toThrow(new Error('please enter password'));

});

it('should have atleast one uppercase letter', function(){

    expect(function(){passed("denims")}).toThrow(new Error('password should contain atleast one Uppercase character'));

 });

it('should have atleast one lowercase letter', function(){
    
    expect(function() {passed('TODAY')}).toThrow(new Error("password should have atleast one lowercase letter"));
});

it('should have atleast one number', function(){

    expect(function() {passed('stoker6fire')}).toThrow(new Error("password should contain atleast one number"));
});
it('meets three of password given criteria', function(){

    expect(verified('Typo69Gravy').toBe(true));
})
