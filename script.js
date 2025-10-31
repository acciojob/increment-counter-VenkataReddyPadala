//your JS code here. If required.
const counter=document.querySelector('#counter');
const btn = document.querySelector("#incrementBtn");
let count=0;
counter.textContent=count;
btn.addEventListener("click",()=>{
	alert(count);
	count++;
	counter.textContent=count;
	
})