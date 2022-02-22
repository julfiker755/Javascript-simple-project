var title=document.querySelector("#title");
var author=document.querySelector("#author");
var year=document.querySelector("#year");
var btn=document.querySelector(".how");
var booklist=document.querySelector("#book-list");

btn.addEventListener("click",function(e){
  e.preventDefault();
  if(title.value === "" && author.value=== "" && year.value===""){
    window.alert("Give Your information")
  }else{
    var newrow=document.createElement("tr");
     //createting new title
     var newtitle=document.createElement('th');
       newtitle.innerHTML=title.value;
       newrow.appendChild(newtitle);

    //createing new author
    var newauthor=document.createElement("th")
    newauthor.innerHTML=author.value;
    newrow.appendChild(newauthor);
    //creation new year
    var newyear=document.createElement('th')
     newyear.innerHTML=year.value;
     newrow.appendChild(newyear)

     booklist.appendChild(newrow)
  }
})