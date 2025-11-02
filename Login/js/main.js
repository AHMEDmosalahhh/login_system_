var loginform = document.getElementById("loginform");
var signEmail = document.getElementById("signEmail");
var signPassword = document.getElementById("signPassword");


var allUsers=[];
if(localStorage.getItem("allUsers") != null){
    allUsers = JSON.parse(localStorage.getItem("allUsers"));
}
console.log(allUsers)


loginform.addEventListener('submit' , function(e){
    e.preventDefault();
    login();
})
function login (){
    var userData ={
        email: signEmail.value,
        password: signPassword.value
    }
    if(isLoginValid(userData)==true){
        console.log("Login successful!");
        alertLogin.classList.replace("d-block" , "d-none")
        window.location.href="../Home/home.html"
        
    }else{
        console.log("Invalid login credentials.");
        alertLogin.classList.replace("d-none" , "d-block")
    }
}

function isLoginValid(userData){
    for(var i=0 ; i<allUsers.length; i++){
        if(allUsers[i].email.toLowerCase()==userData.email.toLowerCase() && allUsers[i].password ==userData.password ){
            console.log("userFound")
            localStorage.setItem("userName" ,allUsers[i].name)
            return true;
        }
    }
    

}