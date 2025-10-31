//your JS code here. If required.
const counter=document.querySelector('#counter');
const btn = document.querySelector("#incrementBtn");
let count=0;
counter.textContent=count;
btn.addEventListener("click",()=>{
	count++;
	counter.textContent=count;
	alert(count);
})