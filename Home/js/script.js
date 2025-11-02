var userName = localStorage.getItem('userName');
var logBtn = document.getElementById('logBtn');
console.log(userName);

userNameappar.innerHTML = userName


logBtn.addEventListener('click', function() {

    localStorage.removeItem('userName')
})
/*script*/