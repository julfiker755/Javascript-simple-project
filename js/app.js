function getPin(){
    const pin=Math.round(Math.random()*10000);
    const pinString=pin+'';
    if(pinString.length == 4){
        return pin;
    }else{
        return getPin();
    }
}
function geneartepin(){
   const pin=getPin();
   document.querySelector("#display-pin").value=pin;
}
//key pad
document.querySelector("#key-pad").addEventListener("click",function(event){
    const num=event.target.innerText;
    const calcinput=document.querySelector("#type-number");
    if(isNaN(num)){
        if(num =='C'){
            calcinput.value='';
        }
    }else{
        const previousnum=calcinput.value;
        const newum=previousnum+num;
        calcinput.value=newum;
    }

})
//varity button
const successmassage=document.querySelector("#notify-success");
const errormassage=document.querySelector("#notify-fail");
function varify(){
   const pin=document.querySelector("#display-pin").value;
   const typenumber=document.querySelector("#type-number").value;
   if(pin==typenumber){
      successmassage.style.display='block';
      errormassage.style.display='none'; 
   }else{
    errormassage.style.display='block';  
    successmassage.style.display='none';
   }
}