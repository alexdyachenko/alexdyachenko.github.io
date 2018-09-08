function sort(){
	var colors = [];
	for (var i = 0; i < document.body.childNodes.length; i++) {
		if(document.body.childNodes[i].nodeName == "DIV"){
			for(var j = 0; j < document.body.childNodes[i].style.length; j++){
				console.log(document.body.childNodes[i].style[i]);
			}
			colors.push(document.body.childNodes[i].style.backgroundColor);
		}
	}
	colors.sort();
	for (var i = 0, j = 0; i < document.body.childNodes.length; i++) {
		if(document.body.childNodes[i].nodeName == "DIV"){
			document.body.childNodes[i].style.backgroundColor = colors[j];
			j++;
		}
    }
}