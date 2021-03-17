document.addEventListener("DOMContentLoaded", function() {
	console.log("script has loaded");
	var title:string=document.body.id;
	const data:any = require('../mock.json').issues;
	console.log(title);
	console.log(data.length);

	if(title==="issues"){
		console.log("in issues");

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
			contentText.setAttribute("class","content-text");
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
			// var div=document.createElement("div");
			// div.appendChild(li);
			var a:HTMLAnchorElement=document.createElement("a");
			a.setAttribute("href","issueDetails.html");
			// a.style.textDecoration="none";
			// a.setAttribute("style","color:black");
			a.setAttribute("style","text-decoration:none; color:black;");
			a.style
			a.appendChild(li);
			if(curr.status==="New"){
				todo.appendChild(a);
			}
			else if(curr.status==="inProgress"){
				inProgress.appendChild(a);
			}
			else{
				done.appendChild(a);
			}


		}


	}

	else if(title==="dashboard"){

		console.log("in dashboard");
		var user1:string='url("src/images/user_1.svg");';
		var user2:string='url("src/images/user_2.svg");';
		var user3:string='url("src/images/user_3.svg");';
		var user4:string='url("src/images/user_4.svg");';
		// var users[:string]=["images/user_1.svg","images/user_2.svg","images/user_3.svg","images/user_4.svg"];
		var countHigh:number=0;
		var countRecent:number=0;
		var countAll:number=0;
		var highPriorList:HTMLElement=document.getElementById("high-prior")!;
		var recentList:HTMLElement=document.getElementById("recent")!;
		var allList:HTMLElement=document.getElementById("all")!;	

		for(var i:number =0;i<data.length;i++){
			var curr:any=data[i];
			var heading:string=curr.title;
			var content:string= curr.description;
			var date:string=curr.created;
			var cardType1:HTMLLIElement=document.createElement("li");
			cardType1.setAttribute("class","card-type-1");
			
			// var cartType2:HTMLLIElement=document.createElement("li");

			var cardHead:HTMLDivElement=document.createElement("div");
			cardHead.setAttribute("class","card-head");
			cardHead.innerHTML=heading;
			var cardDate:HTMLDivElement=document.createElement("div");
			cardDate.setAttribute("class","card-date");
			cardDate.innerHTML=date;
			var cardText:HTMLDivElement=document.createElement("div");
			cardText.setAttribute("class","card-text");
			cardText.innerHTML=content;

			

			cardType1.appendChild(cardHead);
			cardType1.appendChild(cardDate);
			cardType1.appendChild(cardText);
			
			var cloned1:HTMLElement = <HTMLElement>cardType1.cloneNode(true);
			var cloned2:HTMLElement = <HTMLElement>cardType1.cloneNode(true);


			if(countHigh<4 && curr.priority==="High"){
				highPriorList.appendChild(cardType1);
				countHigh++;
				console.log(i);
			}
			if(countRecent<4){
				recentList.appendChild(cloned1);
				countRecent++;
			}
			if(countAll<4){
				var cardType2:HTMLLIElement=document.createElement("li");
				cardType2.setAttribute("class","card-type-2");
				var person:HTMLDivElement=document.createElement("div");
				person.setAttribute("class","person");
				var personPic:HTMLDivElement=document.createElement("div");
				personPic.setAttribute("class","person-pic");
				var personDetails:HTMLDivElement=document.createElement("div");
				personDetails.setAttribute("class","person-details");			
				var name:HTMLDivElement=document.createElement("div");
				name.innerHTML=curr.assignee;
				name.setAttribute("style","font-size: 1.25rem; font-weight: bolder;");
				var desig:HTMLDivElement=document.createElement("div");
				desig.innerHTML=curr.assignee_desig;
				desig.setAttribute("style","color:grey;");
				personDetails.appendChild(name);
				personDetails.appendChild(desig);
				if(countAll==0){
					var prop:string="background-image:"+user1;
				}
				else if(countAll==1){
					var prop:string="background-image:"+user2;
				}
				
				else if(countAll==2){
					var prop:string="background-image:"+user3;
				}
				
				else{
					var prop:string="background-image:"+user4;
				}

				personPic.setAttribute("style",prop);
				
				person.appendChild(personPic);
				person.appendChild(personDetails);

				var progressBar:HTMLDivElement=document.createElement("div");
				progressBar.setAttribute("class","progress-bar");		
				var bar:HTMLDivElement=document.createElement("div");
				bar.setAttribute("style","height: 5px;background-color: blue;border-right:50px solid grey;margin-top: 20px;");
				progressBar.appendChild(bar);

				var highCount:HTMLDivElement=document.createElement("div");
				highCount.setAttribute("class","high-count");	
				highCount.setAttribute("style","margin-top:20px");		
				highCount.innerHTML="High Priority Issue : 8";

				var totalCount:HTMLDivElement=document.createElement("div");
				totalCount.setAttribute("class","total-count");
				totalCount.innerHTML="Total Issues : 10";
				totalCount.setAttribute("style","margin-top:20px; text-align:right;");

				cardType2.appendChild(person);
				cardType2.appendChild(progressBar);
				cardType2.appendChild(highCount);
				cardType2.appendChild(totalCount);
				allList.appendChild(cardType2);
				countAll++;
			}
			else if(countHigh<4){
				highPriorList.appendChild(cardType1);
				countHigh++;
				
			}

		} 
		var view=document.createElement("li");
		view.innerHTML="<a href='#'>View>> </a>";
		view.style.textAlign="right";
		view.style.paddingRight="0.8rem";
		var view2:HTMLElement=<HTMLElement>view.cloneNode(true);
		var view3:HTMLElement=<HTMLElement>view.cloneNode(true);
		highPriorList.appendChild(view);
		recentList.appendChild(view2);
		allList.appendChild(view3);
	}
	else{
		console.log("error");
	}	
});


// window.onload = function(){  

	
// }