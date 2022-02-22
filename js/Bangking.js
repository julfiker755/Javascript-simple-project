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