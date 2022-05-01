function showTab(tabNum){
	console.log(tabNum)
	document.getElementsByClassName("show")[0].classList.add("hide");
	document.getElementsByClassName("show")[0].classList.remove("show");
	document.getElementById("tabcontent-" + tabNum).classList.add("show");
	document.getElementById("tabcontent-" + tabNum).classList.remove("hide");
	document.getElementsByClassName("active")[0].classList.remove("active");
	document.getElementById("tab-" + tabNum).classList.add("active");
	
}

var fname = document.forms["vform"]["fname"];
var lname = document.forms["vform"]["lname"];
var email = document.forms["vform"]["email"];
var username = document.forms["vform"]["username"];
var password = document.forms["vform"]["password"];
var conformPassword = document.forms["vform"]["conformPassword"];
var checkbox = document.forms["vform"]["checkbox"];

var fn_error=document.getElementById("fn_error");
var ln_error=document.getElementById("ln_error");
var un_error=document.getElementById("un_error");
var em_error=document.getElementById("em_error");
var p_error=document.getElementById("p_error");
var cp_error=document.getElementById("cp_error");
var cb_error=document.getElementById("cb_error");
