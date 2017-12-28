function onclick(id,code) {
	document.getElementById(id).setAttribute("onclick",code);
}
function onhover(id,code) {
	document.getElementById(id).setAttribute("onhover",code);
}
function screenshot() {
	// Use Html2Canvas
	html2canvas(document.querySelector("#frame")).then(canvas => {
		document.body.appendChild(canvas);
		var screenshot = document.getElementsByTagName('canvas')[0].toDataURL("image/png");
		document.getElementsByTagName('canvas')[0].outerHTML = "";
		return screenshot
	});
}

