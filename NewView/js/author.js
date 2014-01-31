var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player, player2;
function onYouTubeIframeAPIReady() {	
	player =createPlayer('player','JCQs6JROANE');
	player2 =createPlayer('player2','Ib7IMt0CUF4');
}

function createPlayer(divId,videoId){
	width = $('#'+divId).parent().width();
	//height = $('#'+divId).parent().height();
	var player = new YT.Player(divId, {
		height : '100%',
		width : width,
		videoId : videoId,
		playerVars : {
			controls : 0
		}
	});
	return player;
}

function playVideo() {
	player.playVideo();
	player2.playVideo();
}

function pauseVideo() {
	player.pauseVideo();
	player2.pauseVideo();
	getCurrentTime();
}

function stopVideo() {
	player.stopVideo();
	player2.stopVideo();
}

function previousVideo() {
	alert("previousVideo");
}

function nextVideo() {
	alert("nextVideo");
}

var ctime;
function getCurrentTime() {
	ctime = player.getCurrentTime();
	document.getElementById("MVA_TIME").textContent = ctime + " 秒";
}

function newLink() {
	var button = document.createElement("div");
	button.type = "button";
	button.textContent = ctime + " 秒";
	button.className = "ui-widget-content tag";
	// button.id="tag";
	var tagContainer = document.getElementById("MVA_PPT_SUBIMAGE");
	tagContainer.appendChild(button);
	$(function() {
		$(button).button();
	});
}

function saveAll() {
	var tag = document.getElementById("MVA_PPT_SUBIMAGE").childNodes;
	var tag_arr = new Array();
	for (var i = 0; i < tag.length; i++) {
		tag_arr[i] = tag[i].textContent;
	}
	alert("Save Success!");
	//var url = "mark.php?"+tag_arr;
	//location.replace(url);
}

function setButtonStyle() {
	$(function() {
		$("input[type=button], a, button").button();
	});
}

window.onload = function() {
	document.getElementById("Play").onclick = playVideo;
	document.getElementById("Pause").onclick = pauseVideo;
	document.getElementById("Stop").onclick = stopVideo;
	document.getElementById("Previous").onclick = previousVideo;
	document.getElementById("Next").onclick = nextVideo;
};

setButtonStyle();
