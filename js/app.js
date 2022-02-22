var btn=document.getElementById("button");
btn.addEventListener("click",function(event){
    event.preventDefault();
//   var nameField=document.querySelector("#user-name").value;
//   var passField=document.querySelector("#passwrod-name").value;
//   console.log(nameField,passField)
var nameField=document.querySelector("#user-name")
var passField=document.querySelector("#passwrod-name")
if(nameField.value === 'Julfiker' && passField.value === '123'){
   window.location.href="success.html"
}else{
    window.alert("You password rong")
}
})
