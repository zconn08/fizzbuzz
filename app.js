$(document).ready(function(){

//Find out number in textbox
$(".submit").click(function(){
	var a = $("input").val();
//Fizzbuzz Function
for (var i = 1; i <= a; i++) {
	if (i%15===0) {
		$("#listContainer").append("<li>fizzbuzz</li>");
	}
	else if (i%5===0){
		$("#listContainer").append("<li>buzz</li>");
	}
	else if (i%3===0){
		$("#listContainer").append("<li>fizz</li>");
	}
	else {
		$("#listContainer").append("<li>" + i + "</li>");
	}
}
});
});