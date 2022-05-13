function redirect()
{
    alert("print");
    window.location.href="./index.html";
}
function validate(callback){
     username = document.getElementById("username");
     password = document.getElementById("Password");
   if(username.value =="admin" || password.value =="12345"){
       callback();
   } else
   {
       alert("invalid user");
       return false;
   }

}
