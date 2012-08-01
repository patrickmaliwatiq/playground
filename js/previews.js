var images = ["lovers", "cross", "lovers", "cross", "lovers"];
var current = 0;
var timer;

function play() {
	var previews = document.getElementById("previews");
	var thumbs = new Array; 
	
	for (var i=0; i<5; i++) {
		var th = document.getElementById("previewTh" + i);
		th.style.backgroundImage = 'url(images/ss_' + images[i] + '_th_off.jpg)';
		
		thumbs[i] = th;
	}

	if (!previews) return;
	
	var imgStr = "images/ss_" + images[current] + ".jpg";
	var thStr = "images/ss_" + images[current] + "_th.jpg";

	previews.style.backgroundImage = 'url(' + imgStr + ')';
	thumbs[current].style.backgroundImage = 'url(' + thStr + ')';
	
	current++;

	if (current >= images.length) {
		current = 0;
	}

	timer = setTimeout("play()", 5000);
}

function forceplay(idx) {
	clearTimeout(timer);
	current = idx;
	this.play();
}

function goToPreview() {
	document.location.href = images[current - 1] + ".html";
}

