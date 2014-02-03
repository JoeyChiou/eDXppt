var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player, player2;
function onYouTubeIframeAPIReady() {	
	player = createPlayer('player','JCQs6JROANE');
	player2 = createPlayer('player2','Ib7IMt0CUF4');
}

function createPlayer(divId,videoId){
	width = $('#'+divId).parent().width()-50;
	//height = $('#'+divId).parent().height();
	var player = new YT.Player(divId, {
		height : '95%',
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
	player.pauseVideo();
	player2.playVideo();
	player2.pauseVideo();
	setTimeout("player.playVideo()", 3000);
	setTimeout("player2.playVideo()", 3000);
}

function doNothing(){
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
	var ct = player.getCurrentTime();
	var move_tag = 0;
	
	for(var i=0;i<mark_list.length;i++){
		if(ct>mark_list[i]){
			move_tag = mark_list[i];
		}
	}
	goMark(move_tag);
}

function nextVideo() {
	var ct = player.getCurrentTime();
	var move_tag = 0;
	
	for(var i=(mark_list.length-1);i>=0;i--){
		if(ct<mark_list[i]){
			move_tag = mark_list[i];
		}
	}
	goMark(move_tag);
}

var mark_list = new Array();
function getMarks(){
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", "mark.xml", false);
	xmlhttp.send();
	xmlDoc = xmlhttp.responseXML;
				
	var marks = xmlDoc.getElementsByTagName("Mark");
	for(i=0;i<marks.length;i++){
		var button = document.createElement("button");
		button.type = "button";
		//button.textContent = marks[i].textContent + " 秒";
		button.textContent = "Section" + (i+1);
		//button.className = "ui-widget-content tag";
		button.setAttribute("onclick","javascript:goMark("+marks[i].textContent+")");
		mark_list[i] = marks[i].textContent;
		var tagContainer = document.getElementById("MVA_PPT_SUBIMAGE");
		tagContainer.appendChild(button);
		/*$(function() {
			$(button).button();
		});*/
	}
}

function goMark(second){
	player.seekTo(second, true);
	player.pauseVideo();
	player2.seekTo(second, true);
	player2.pauseVideo();
	playVideo();
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
	
	var input = document.createElement("input");
	input.type = "hidden";
	input.name = "tag_arr[]";
	input.value = ctime;
	var form = document.getElementById("form1");
	form.appendChild(input);
}

/*function saveAll() {
	var tag = document.getElementById("MVA_PPT_SUBIMAGE").childNodes;
	var tag_arr = new Array();
	for (var i = 0; i < tag.length; i++) {
		tag_arr[i] = tag[i].textContent;
	}
	alert("Save Success!");
	//var url = "../mark.php?"+tag_arr;
	//location.replace(url);
}*/

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
