const btn=document.querySelector("#button");
btn.addEventListener("click",function(event){
   event.preventDefault();
  const inputname=document.querySelector("#user-name");
  const inputpass=document.querySelector("#passwrod-name");
  if(inputname.value==='Julfiker' && inputpass.value==='1234'){
    window.location.href="./success.html";
  }else{
      window.alert("Your information not match")
  }
    
})