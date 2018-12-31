var loginForm = document.login;

loginForm.onsubmit = function(e){
    if(FormCheck()){
        e.preventDefault();
        if(loginForm.code.value == "1"){
            $.cookie("person", "admin");
        }else{
            $.cookie("person", "employee");
        }
        location.href = "main.html";
    }else{
        e.preventDefault();
    }
};

function FormCheck(){
    if((loginForm.code.value == "")||(loginForm.code.value == "")){
        return false;
    }
    return true;
}