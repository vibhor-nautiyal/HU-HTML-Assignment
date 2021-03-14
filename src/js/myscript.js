var expToDo=document.getElementById("expand-to-do");
var expInProgress=document.getElementById("expand-in-progress");
var expDone=document.getElementById("expand-done");
var todo=document.getElementById("to-do-list");
var inProgress=document.getElementById("in-progress-list");
var done=document.getElementById("done-list");
var ham=document.getElementById("hamburger");
var nav=document.getElementById("navigation");
var navList=document.getElementById("navigation-list");

// if(screen.width>800){
// 	expToDo.style.display="none";
// 	expInProgress.style.display="none";
// 	expDone.style.display="none";
// 	todo.style.display="block";
// 	inProgress.style.display="block";
// 	done.style.display="block";
// 	navList.style.display="block";
// }
// if(screen.width<=800){
// 	expToDo.style.display="inline-block";
// 	expInProgress.style.display="inline-block";
// 	expDone.style.display="inline-block";
// 	todo.style.display="none";
// 	inProgress.style.display="none";
// 	done.style.display="none";
// 	navList.style.display="none";
// }

expToDo.addEventListener("click",function(){

	
	if(todo.style.display==="block"){
		todo.style.display="none";
	}
	else{
		todo.style.display="block";
	}
});

expInProgress.addEventListener("click",function(){

	
	if(inProgress.style.display==="block"){
		inProgress.style.display="none";
	}
	else{
		inProgress.style.display="block";
	}
});
expDone.addEventListener("click",function(){

	
	if(done.style.display==="block"){
		done.style.display="none";
	}
	else{
		done.style.display="block";
	}
});


ham.addEventListener("click",function(){

	
	if(nav.style.width=="0px"){
		nav.style.width="87.5%";
		navList.style.display="block";
	}
	else{
		nav.style.width="0px";
		navList.style.display="none";	
	}
	
	
});