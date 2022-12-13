


 let heading=document.querySelector("h2");
 let body=document.querySelector("body");
 let button=document.querySelector(".remove-color");
 let hidebtn=document.querySelector("#show-yellow");
 let showbtn=document.querySelector("#show-green");
let box1=document.querySelector(".box");
 let btnbutton=document.querySelector(".remove-color-btn")
 heading.addEventListener("click", () => {
  body.style.backgroundColor="yellow";   
 });

 button.addEventListener("click",() =>{
     body.style.backgroundColor="transparent";
 });


hidebtn.addEventListener("click",() => {
    box1.style.backgroundColor="yellow";

 });
 showbtn.addEventListener("click",() =>{
     box1.style.backgroundColor="green" });
 btnbutton.addEventListener("click", () =>{
    box1.style.display="none"
});


































// hidebtn.document.addeventlistener("click",function(){
//     mysqure.style.background.display="yellow";
// });
// showbtn.document.addeventlistener("click",function(){
//     mysqure.style.background.display="transparent";
// });