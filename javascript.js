function calculator(num){
   const inputbtn=document.querySelector("#type-input").value;
   const calv=inputbtn+num;
   const inputvalue=document.querySelector("#type-input").value=calv;
   return inputvalue;
}
const equalbtn=document.querySelector("#equal-btn");
equalbtn.addEventListener("click",function(){
 const equalnum=document.querySelector("#type-input").value;
 const totalnum=eval(equalnum);
 document.querySelector("#type-input").value=totalnum;
})

const clearbtn=document.querySelector("#clear-btn");
clearbtn.addEventListener("click",function(){
    document.querySelector("#type-input").value='';
})
