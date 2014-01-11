var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player, player2;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height : '240',
		width : '320',
		videoId : 'JCQs6JROANE',
		// playerVars :{
			// controls: 0
		// }
	});

	player2 = new YT.Player('player2', {
		height : '480',
		width : '640',
		videoId : 'Ib7IMt0CUF4',
		playerVars :{
			controls: 0
		}
	});
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

function beginningVideo() {
	// player.stopVideo();
	// player2.stopVideo();
}

function endVideo() {
	// player.stopVideo();
	// player2.stopVideo();
}

var ctime;
function getCurrentTime() {
	ctime = player.getCurrentTime();
	document.getElementById("ctime").textContent = ctime + " 秒";
}

// function newLink() {
// var button = document.createElement("button");
// button.type = "button";
// button.textContent = ctime + " 秒";
//
// var tag = document.getElementById("tag");
// tag.appendChild(button);
// }

function newLink() {
	var button = document.createElement("li");
	button.type = "button";
	button.textContent = ctime + " 秒";
	button.className = "ui-widget-content";
	var tag = document.getElementById("tag");
	tag.appendChild(button);
	setTagStyle();
}

function saveAll() {
	var tag = document.getElementById("tag").childNodes;
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

	$(function() {
		$("#beginning").button({
			text : false,
			icons : {
				primary : "ui-icon-seek-start"
			}
		});
		$("#play").button({
			text : false,
			icons : {
				primary : "ui-icon-play"
			}
		}).click(function() {
			var options;
			if ($(this).text() === "play") {
				options = {
					label : "pause",
					icons : {
						primary : "ui-icon-pause"
					}
				};
				playVideo();
			} else {
				options = {
					label : "play",
					icons : {
						primary : "ui-icon-play"
					}
				};
				pauseVideo();
			}
			$(this).button("option", options);
		});
		$("#pause").button({
			text : false,
			icons : {
				primary : "ui-icon-pause"
			}
		});
		$("#stop").button({
			text : false,
			icons : {
				primary : "ui-icon-stop"
			}
		}).click(function() {
			$("#play").button("option", {
				label : "play",
				icons : {
					primary : "ui-icon-play"
				}
			});
		});
		$("#end").button({
			text : false,
			icons : {
				primary : "ui-icon-seek-end"
			}
		});
	});

}

function setTagStyle() {
	$(function() {
		$("#tag").selectable();
		//$("#tag").disableSelection();
	});

	$("#tag li").hover(function() {
		$(this).addClass('ui-state-hover');
	}, function() {
		$(this).removeClass('ui-state-hover');
	});
}

setButtonStyle();
setTagStyle();
