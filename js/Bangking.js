function allvalue(inputid){
   const depositinput=document.querySelector(inputid);
   const depsitinputva=parseFloat(depositinput.value);
   depositinput.value='';
   return depsitinputva;
}
function amoutadd(inerid,depsitinputv){
 const depostwidthtotal=document.querySelector(inerid);
 const deposwidthcon=parseFloat(depostwidthtotal.innerText);
 const depostwidthupdate=deposwidthcon+depsitinputv;
 depostwidthtotal.innerHTML=depostwidthupdate;

}
function balance(widthdrowval,adda){
 if(adda==true){
   const totalbalance=document.querySelector(".balance-total");
   const totalbalancecon=parseFloat(totalbalance.innerHTML);
   const totalbal=totalbalancecon+widthdrowval;
   totalbalance.innerHTML=totalbal;
 }else{
   const totalbalance=document.querySelector(".balance-total");
   const totalbalancecon=parseFloat(totalbalance.innerHTML);
   const totalbal=totalbalancecon-widthdrowval;
   totalbalance.innerHTML=totalbal;
 }
}

const depositbtn=document.querySelector("#deposit");
depositbtn.addEventListener("click",function(){
 const depsitinputv=allvalue("#deposit-input");
 if(depsitinputv >0){
   amoutadd(".diposit-total",depsitinputv);
   balance(depsitinputv,true);
 }else{
   window.alert("Your Balance negative amout")
   
 }
});
const widthbtn=document.querySelector("#widthdrow");
widthbtn.addEventListener("click",function(){
  const widthdrowval=allvalue('#windrow-input');
  if(widthdrowval>0){
   amoutadd("#widthdrow-total",widthdrowval);
   balance(widthdrowval,false);
  }else{
     window.alert("Your Balance negative amout")
  }
  
})

//banck  start code
//-----------------------------------------------------------------
//index.html code
 <button onclick="addcard('deposit-input','diposit-total',true)" class="btn btn-danger">Deposit</button>
<button onclick="addcard('windrow-input','widthdrow-total',false)" class="btn btn-danger">Windrow</button>
//-----------------------------------------------------------------

//How to your project Easy short code you account
function addcard(diposit,totalid,add){
//input value
 let inputname=document.getElementById(diposit)
 let inputvalue=parseFloat(inputname.value);
 //How to your empty value
 inputname.value="";
 //how tw dipost and windows banance
 let outputval=document.getElementById(totalid)
 let outputvall=parseFloat(outputval.innerHTML);
 let totaloutput=outputvall+inputvalue;
 outputval.innerHTML=totaloutput;
 //up the totalbanance
 if(add){
    let totalbanance=document.querySelector(".balance-total")
    let totalbananceval=parseFloat(totalbanance.innerHTML);
    let totalbanval=totalbananceval+inputvalue;
    totalbanance.innerHTML=totalbanval
 }else{
    let totalbanance=document.querySelector(".balance-total")
    let totalbananceval=parseFloat(totalbanance.innerHTML);
    let totalbanval=totalbananceval-inputvalue;
    totalbanance.innerHTML=totalbanval
 }
}
//banck  end code

