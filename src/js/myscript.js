var exp=document.getElementsByClassName("category-name");

for(var i=0;i<exp.length;i++){

	exp[i].addEventListener("click", function() {
   
    var content = this.nextElementSibling;
    if (content.style.display === "grid") {
      content.style.display = "none";
    } else {
      content.style.display = "grid";
    }
  });
}