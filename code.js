function onclick(id,code) {
	document.getElementById(id).setAttribute("onclick",code);
}
onclick("button4",function() {
	alert("Hello, World!");
});