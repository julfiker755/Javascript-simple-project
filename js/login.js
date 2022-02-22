const btn=document.querySelector("#button");
btn.addEventListener("click",function(event){
    event.preventDefault();
    //input dom selection
    const uname=document.querySelector("#user-name");
    const upass=document.querySelector("#passwrod-name");
    if(uname.value === "Jim" && upass.value === "1122"){
        window.location.href="./success.html";
    }else{
        window.alert("Your information rong")
    }
})