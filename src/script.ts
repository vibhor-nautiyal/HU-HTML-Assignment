var title:string=document.title;
const data:any = require('../mock.json').issues;
console.log(data);
console.log(data.length);

if(title=="Issues"){

	var expToDo:HTMLElement=document.getElementById("expand-to-do");
	var expInProgress:HTMLElement=document.getElementById("expand-in-progress");
	var expDone:HTMLElement=document.getElementById("expand-done");
	var todo:HTMLElement=document.getElementById("to-do-list");
	var inProgress:HTMLElement=document.getElementById("in-progress-list");
	var done:HTMLElement=document.getElementById("done-list");
	var ham:HTMLElement=document.getElementById("hamburger");
	var nav:HTMLElement=document.getElementById("navigation");
	var navList:HTMLElement=document.getElementById("navigation-list");

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



	for(var i=0;i<data.length;i++){

		var curr=data[i];

		var li:HTMLLIElement=document.createElement("li");
		li.setAttribute("class","card");

		var cardId:HTMLDivElement=document.createElement("div");
		cardId.setAttribute("class","card-id");
		cardId.innerHTML=curr.id;
		
		var cardDate:HTMLDivElement=document.createElement("div");
		cardDate.setAttribute("class","card-date");
		cardDate.innerHTML=curr.created;
		
		var contentHeading:HTMLHeadingElement=document.createElement("h4");
		contentHeading.setAttribute("class","content-heading");
		contentHeading.innerHTML=curr.title;
		
		var contentText=document.createElement("p");
		contentText.setAttribute("class","content-heading");
		contentText.innerHTML=curr.description;		
		
		var cardContent=document.createElement("div");
		cardContent.setAttribute("class","card-content");
		cardContent.appendChild(contentHeading);
		cardContent.appendChild(contentText);
		
		var assigneeTag=document.createElement("div");
		assigneeTag.setAttribute("class","assignee-tag");
		assigneeTag.innerHTML="Assignee";

		var assigneeImg=document.createElement("div");
		assigneeImg.setAttribute("class","assignee-img");
		
		var assigneeName=document.createElement("div");
		assigneeName.setAttribute("class","assignee-name");
		assigneeName.innerHTML=curr.assignee;

		var assigneeDesig=document.createElement("div");
		assigneeDesig.setAttribute("class","assignee-desig");
		assigneeDesig.innerHTML=curr.assignee_desig;

		var cardAssignee=document.createElement("div");
		cardAssignee.setAttribute("class","card-assignee");
		cardAssignee.appendChild(assigneeName);
		cardAssignee.appendChild(assigneeDesig);
		
		var prior=document.createElement("div");
		prior.setAttribute("class","status");
		prior.innerHTML=curr.priority;

		var cardStatus=document.createElement("div");
		cardStatus.setAttribute("class","card-status");
		cardStatus.appendChild(prior);

		li.appendChild(cardId);
		li.appendChild(cardDate);
		li.appendChild(cardContent);
		li.appendChild(cardAssignee);
		li.appendChild(cardStatus);
	
		if(curr.status==="New"){
			todo.appendChild(li);
		}
		else if(curr.status==="inProgress"){
			inProgress.appendChild(li);
		}
		else{
			done.appendChild(li);
		}


	}


}
if(title==""){
	
}