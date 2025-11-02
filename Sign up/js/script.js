var signUpForm = document.getElementById("registerForm");
var signName = document.getElementById("signName");
var signEmail = document.getElementById("signEmail");
var signPassword = document.getElementById("signPassword");
var nameAlert = document.getElementById("nameAlert");
var emailAlert = document.getElementById("emailAlert");
var passwordAlert = document.getElementById("passwordAlert");
var existAlert = document.getElementById("existAlert");
var successAlert = document.getElementById("successAlert");

var allUsers=[];

if (localStorage.getItem("allUsers")!=null) {
    allUsers = JSON.parse(localStorage.getItem("allUsers"))
}


//console.log(signUpForm);

signUpForm.addEventListener("submit" , function(e){
    e.preventDefault();
    if (checkAllInputAreValid ()){
        addUser()
        
    }
    //validateInput(/^[a-zA-z0-9$_]{2,}$/ ,signName , nameAlert);
    //validateInput(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, signEmail , emailAlert);
    //validateInput(/^(?=.*[A-Z])(?=.*[\W_])(?=.*\d).*$/ , signPassword , passwordAlert);
})

function addUser(){
    var newUser ={
        name : signName.value ,
        email : signEmail.value ,
        password : signPassword.value ,

    }
    if(isAlreadyExist(newUser)==true ){
        console.log(" user already exist");
        existAlert.classList.replace("d-none","d-block")
    }else{
        existAlert.classList.replace("d-block","d-none");
        successAlert.classList.replace("d-none","d-block");
        window.location.href="../Login/login.html";
        allUsers.push(newUser);
        console.log(allUsers);
        localStorage.setItem("allUsers" , JSON.stringify(allUsers));
    }

}


function isAlreadyExist(newUser){
    for(var i=0 ; i<allUsers.length ; i++){
        if(allUsers[i].email.toLowerCase()== newUser.email.toLowerCase()){
            console.log('Email is Already Exist');
            return true ;
        }
    }

}
//validate inputs
function validateInput(Regex,element,alertE1){
    var pattern = Regex 
    if(pattern.test(element.value)){
        //alertE1.classList.replace("d-block","d-none");
        element.classList.remove("is-invalid")
        element.classList.add("is-valid");
        return true;
    }else{
        //alertE1.classList.replace("d-none","d-block");
        element.classList.add("is-invalid");
        return false;
    }
}

//validate inputs together
function checkAllInputAreValid (){
    if(validateInput(/^[a-zA-z0-9$_]{2,}$/ ,signName , nameAlert)==true &&
    validateInput(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, signEmail , emailAlert)==true&&
    validateInput(/^(?=.*[A-Z])(?=.*[\W_])(?=.*\d).*$/ , signPassword , passwordAlert)==true 
)
{
    console.log("All Input are valid");
    return true;
}else{
    console.log("Something Went wrong");
    return false;
}
}
