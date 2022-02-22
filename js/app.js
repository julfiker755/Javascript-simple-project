// const cbtn1=document.querySelector("#case-push");
// cbtn1.addEventListener("click",function(){
//   const caseinput=document.querySelector("#case-number");
//   const casevalue=caseinput.value;
//    caseinput.value=parseFloat(casevalue)+1;
// })
// const cbtn2=document.querySelector("#case-mins");
// cbtn2.addEventListener("click",function(){
// const caseinput=document.querySelector("#case-number");
// const casevalue=caseinput.value;
// caseinput.value=parseFloat(casevalue)-1;
// });

//subtotal
function gettotalinput(product){
    const productinput=document.getElementById(product +"-number");
    const productnumber=parseFloat(productinput.value);
    return productnumber;
}
function calculatetotal(){
 const phonetotal=gettotalinput("phone")*200;
 const casetotal=gettotalinput("case")*60;
 const subtotal=phonetotal+casetotal;
 const tax=subtotal*10/100;
 const total=subtotal+tax;
 //subtotal
 document.querySelector("#subtotal").innerHTML=subtotal;
 document.querySelector("#tax").innerHTML=tax;
 document.querySelector("#total").innerHTML=total;
}

//phone case function
function updateproductnumber(product,price,incrysing){
    const caseinput=document.getElementById(product+"-number");
    let casenumber=caseinput.value;
    if(incrysing){
        casenumber=parseFloat(casenumber)+1;
    }else if(casenumber>0){
        casenumber=parseFloat(casenumber)-1;
    }
    caseinput.value=casenumber;
    const ctotal=document.getElementById(product +"-total");
    ctotal.innerHTML=casenumber*price;
    //subtoal//calculate total
    calculatetotal()
}
const cbtn1=document.querySelector("#case-push");
cbtn1.addEventListener("click",function(){
    updateproductnumber('case',60,true)
})
const cbtn2=document.querySelector("#case-mins");
cbtn2.addEventListener("click",function(){
    updateproductnumber('case',60,false)
});
 const pbtn1=document.querySelector("#phone-push");
 pbtn1.addEventListener("click",function(){
    updateproductnumber('phone',200,true)
 })
 const pbtn2=document.querySelector("#phone-mins");
 pbtn2.addEventListener("click",function(){
    updateproductnumber('phone',200,false)
 })