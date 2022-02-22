const depositbtn=document.querySelector("#deposit");
depositbtn.addEventListener("click",function(){
   //deposit button
  const depositinput=document.querySelector("#deposit-input");
  const depositv=depositinput.value;
  const depositvc=parseFloat(depositv);
  const depostotal=document.querySelector(".diposit-total");
  const depostotalv=depostotal.innerText;
  const depositotalc=parseFloat(depostotalv);
  const depositotall=depositotalc+depositvc;
  depostotal.innerHTML=depositotall;
  //deposit strigs start
  depositinput.value='';
  //balance total right
  const totalbal=document.querySelector(".balance-total");
  const totalbalv=totalbal.innerHTML;
  const totalbalcon=parseFloat(totalbalv);
  const totalbalset=totalbalcon+depositvc;
  totalbal.innerHTML=totalbalset;


})
//widthdrow button
const widthdrow=document.querySelector("#widthdrow");
widthdrow.addEventListener("click",function(){
   const windowinput=document.querySelector("#windrow-input");
   const windowinputvalue=windowinput.value;
   const windowinputvaluec=parseFloat(windowinputvalue);
   const windowtotal=document.querySelector("#widthdrow-total");
   const windowtotalText=windowtotal.innerText;
   const windowtotalTextc=parseFloat(windowtotalText);
   const widthdrowtotal=windowtotalTextc+windowinputvaluec;
   windowtotal.innerHTML=widthdrowtotal;
   windowinput.value='';
   //window balce
   const totalbal=document.querySelector(".balance-total");
   const totalbalv=totalbal.innerHTML;
   const totalbalcon=parseFloat(totalbalv);
   const totalwindowset=totalbalcon-windowinputvaluec;
   totalbal.innerHTML=totalwindowset;
})
