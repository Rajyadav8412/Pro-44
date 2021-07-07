class System{

    constructor(){}

    // Add code to authenticate the given code and the access codes.
    authenticate(actualCode1,actualCode2,actualCode3,enteredCode){
        if(actualCode1===enteredCode || actualCode2===enteredCode || actualCode3===enteredCode){
            return true;
            }
            else{
                return false;
            }

    }

    

}