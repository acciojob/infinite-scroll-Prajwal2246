//your code here!
document.addEventListener("DOMContentLoaded",()=>{
	const list = document.getElementById("infi-list");
	let counter=1;


	function addListItems(count){
		for(let i=0;i<count;i++){
			const li = document.createElement("li");
			li.textContent = `List Item ${counter++}`;
			list.appendChild(li);
		}
	}
	addListItems(10);

	window.addEventListener("scroll",()=>{
		if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
			addListItems(2);
		}
	})
})

