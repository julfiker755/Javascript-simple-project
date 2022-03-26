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
//How to Extra code 
// function calculation(num){
// const outputscreen=document.querySelector("#inputvalue");
//  outputscreen.value += num;
// }

// const equalbtn=document.querySelector("#equal");
// equalbtn.addEventListener("click",function(){
//   const outputscreen=document.querySelector("#inputvalue").value;
//   const total=eval(outputscreen)
//   document.querySelector("#inputvalue").value=total;

// })
// const clearbtn=document.querySelector("#clearbtn");
// clearbtn.addEventListener("click",function(){
//   document.querySelector("#inputvalue").value='';
// })
// const deletebtn=document.querySelector("#deletbtn");
// deletebtn.addEventListener("click",function(){
//   const outputscreen=document.querySelector("#inputvalue");
//   outputscreen.value=outputscreen.value.slice(0,-1)
// })
