//Fizzbuzz Function
var fizzBuzz = function(a){
for (var i = 1; i <= a; i++) {
	if (i%15===0) {
		$("#listContainer").append("<li>fizz buzz</li>");
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
};

$(document).ready(function(){

//Find out number in textbox
$(".submit").click(function(){
	var num = $("input").val();

if (num % 1 === 0) {
	fizzBuzz(num);
} else{
	alert("Please enter a whole number!");
}
});
});