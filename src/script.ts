var title:string=document.title;
const data:any = require('../mock.json').issues;
console.log(data);
console.log(data.length);

if(title==="Issues"){

	var expToDo:HTMLElement=document.getElementById("expand-to-do")!;
	var expInProgress:HTMLElement=document.getElementById("expand-in-progress")!;
	var expDone:HTMLElement=document.getElementById("expand-done")!;
	var todo:HTMLElement=document.getElementById("to-do-list")!;
	var inProgress:HTMLElement=document.getElementById("in-progress-list")!;
	var done:HTMLElement=document.getElementById("done-list")!;
	var ham:HTMLElement=document.getElementById("hamburger")!;
	var nav:HTMLElement=document.getElementById("navigation")!;
	var navList:HTMLElement=document.getElementById("navigation-list")!;

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



	for(var i:number =0;i<data.length;i++){

		var curr:any=data[i];

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
		
		var contentText:HTMLParagraphElement=document.createElement("p");
		contentText.setAttribute("class","content-heading");
		contentText.innerHTML=curr.description;		
		
		var cardContent:HTMLDivElement=document.createElement("div");
		cardContent.setAttribute("class","card-content");
		cardContent.appendChild(contentHeading);
		cardContent.appendChild(contentText);
		
		var assigneeTag:HTMLDivElement=document.createElement("div");
		assigneeTag.setAttribute("class","assignee-tag");
		assigneeTag.innerHTML="Assignee";

		var assigneeImg:HTMLDivElement=document.createElement("div");
		assigneeImg.setAttribute("class","assignee-img");
		
		var assigneeName:HTMLDivElement=document.createElement("div");
		assigneeName.setAttribute("class","assignee-name");
		assigneeName.innerHTML=curr.assignee;

		var assigneeDesig:HTMLDivElement=document.createElement("div");
		assigneeDesig.setAttribute("class","assignee-desig");
		assigneeDesig.innerHTML=curr.assignee_desig;

		var cardAssignee:HTMLDivElement=document.createElement("div");
		cardAssignee.setAttribute("class","card-assignee");
		cardAssignee.appendChild(assigneeName);
		cardAssignee.appendChild(assigneeDesig);
		cardAssignee.appendChild(assigneeTag);
		cardAssignee.appendChild(assigneeImg);

		var prior:HTMLDivElement=document.createElement("div");
		prior.setAttribute("class","status");
		prior.innerHTML=curr.priority;

		var cardStatus:HTMLDivElement=document.createElement("div");
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
if(title==="Dashboard"){
	
	for(var i:number =0;i<data.length;i++){
		var curr:any=data[i];
		var heading:string=curr.title;
		var content:string= curr.description;
		var date:string=data.created;
		var card:HTMLLIElement=document.createElement("li");
		// card.setAttribute("class","dashboard-card-type-1");
		
		var cardHead:HTMLDivElement=document.createElement("div");
		
		var cardDate:HTMLDivElement=document.createElement("div");
		var cardText:HTMLDivElement=document.createElement("div");
		
	} 
}