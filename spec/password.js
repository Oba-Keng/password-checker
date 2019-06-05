
function password_is_valid(password){


    
    var password;

    

//to check if a password strength is competent
try {

    
   

        if(password < 8) throw new Error('password should be more than eight characters');
        
        if (password=="") throw new Error("enter password");

        if (!/[A-Z]/.test(password)) throw new Error('password should contain atleast one Uppercase character');

        if(!/[a-z]/.test(password)) throw new Error('password should have atleast one lowercase letter');  
        
        if(!/[0-9]/.test(password)) throw new Error ('password should contain atleast one number');
        

        
        
    

    

   
} catch (error) {
    console.log('caught', error)
}

    
    

}
function password_is_okay(password){
   var passer = new password_is_valid();

    if(password >= 8&&!password.match(/[A-Z]/)&&password.match(/[0-9]/)){
        return true;
    }else{
        return false;
    }

}

module.exports =   {
    
    password_is_valid:password_is_valid,
    password_is_okay:password_is_okay

}

password_is_valid('tOdayawayplay1');
password_is_okay('Toni6ghTa');