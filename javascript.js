var element = 0;
var current;
function properties(identifier) {
	current = identifier;
	document.getElementById('p_element').innerHTML = "Selected " + identifier;
	document.getElementById('name').value = identifier;
	if (document.getElementById(current).className == "window") {
		document.getElementById('text').value = "";
	} else {
		document.getElementById('text').value = document.getElementById(identifier).innerHTML;
	}
}
function designer() {
	document.getElementById('code').style.display = 'none';
	document.getElementById("settings").style.display = 'none';
	document.getElementById("settings1").style.borderBottom = "1px solid black";
	document.getElementById("designer").style.borderBottom = "transparent";
	document.getElementById("code1").style.borderBottom = "1px solid black";
}
function code() {
	document.getElementById('code').style.display = 'block';
	document.getElementById("settings").style.display = 'none';
	document.getElementById("settings1").style.borderBottom = "1px solid black";
	document.getElementById("code1").style.borderBottom = "transparent";
	document.getElementById("designer").style.border = "1px solid black";
}
function save_p() {
	document.getElementById(current).id = document.getElementById('name').value;
	if (document.getElementById(document.getElementById('name').value).className == "window") {

	} else {
		document.getElementById(document.getElementById('name').value).innerHTML = document.getElementById('text').value;
	}	
	current = document.getElementById('name').value;
}
function settings() {
	document.getElementById('code').style.display = 'none';
	document.getElementById("settings").style.display = 'block';
	document.getElementById("settings1").style.borderBottom = "transparent";
	document.getElementById("code1").style.borderBottom = "1px solid black";
	document.getElementById("designer").style.border = "1px solid black";
}
function run() {
	var testwindow = window.open("","window","width="+document.getElementById("windowwidth").value+",height="+document.getElementById("windowheight").value+"");
	testwindow.innerHTML = "";
	testwindow.document.write("<head><title>"+document.getElementById("appname").value+"</title><script>function onclick(id,code) { document.getElementById(id).setAttribute('onclick',code); }"+document.getElementById("javascriptcode").value+"</script></head><body>"+document.getElementById("window").innerHTML+"</body>");
}
function button() {
	document.getElementsByClassName("window")[0].innerHTML += "<button class='button' id='element"+element+"' onclick='properties(this.id)'>Element"+element+"</button";
	element++
	draggable();
}
function text() {
	document.getElementsByClassName("window")[0].innerHTML += "<span class='text' id='element"+element+"' onclick='properties(this.id)'>Element"+element+"</span>";
	draggable()
	element++
}
function draggable() {
	$(function() {
		$(".text").draggable({containment: "#window"});
	});
	$(function() {
		$(".button").draggable({cancel: false, containment: "#window"});
	});
}
function dele() {
	if (document.getElementById(current).className == "window") {
		alert("You can't delete the window!");
	} else {
		document.getElementById(current).outerHTML = "";
	}
}