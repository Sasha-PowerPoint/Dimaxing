

window.onbeforeunload = function(){
	var loader = document.createElement("div");
	var style = document.createElement("style");
	loader.className = "loader";
	document.body.appendChild(loader);
	loader.style.animation = "loader 0.8s";
}