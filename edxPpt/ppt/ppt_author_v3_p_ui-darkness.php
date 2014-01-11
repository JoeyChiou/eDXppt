<!DOCTYPE html>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<html>
	<!-- <link rel="stylesheet" type="text/css" href="style/jquery-ui-1.10.3.custom/css/dot-luv/jquery-ui-1.10.3.custom.css">
	<link rel="stylesheet" type="text/css" href="style/jquery-ui-1.10.3.custom/css/cupertino/jquery-ui-1.10.3.custom.css">
	<link rel="stylesheet" type="text/css" href="style/jquery-ui-1.10.3.custom/css/humanity/jquery-ui-1.10.3.custom.css"> -->
	<link rel="stylesheet" type="text/css" href="style/jquery-ui-1.10.3.custom/css/ui-darkness/jquery-ui-1.10.3.custom.css">
	
	<link rel="stylesheet" type="text/css" href="style/style.css">

	<script src="style/jquery-ui-1.10.3.custom/js/jquery-1.9.1.js"></script>
	<script src="style/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom.js"></script>
	<script src="js/author.js"></script>

	<body>
		<div id="mainDiv" class="ui-widget-content">
			<div id="Player1Div" class="ui-state-default">
				<div id="player" class="player"></div>
				<div id="TagsDiv" class="ui-widget-content">
					<p class="ui-labels ui-widget-header">Tag</p>
					<div id="tags">
						<ol id="tag"></ol>
					</div>
				</div>
			</div>
			<div id="Player2Div" class="ui-state-focus">
				<div id="player2" class="player"></div>
				<p class="ui-labels controls ui-widget-content">
					<button id="play" onclick="javascript:playVideo()">
						Play
					</button>
					<button id="stop" onclick="javascript:stopVideo()">
						Stop
					</button>
					<button id="pause" onclick="javascript:pauseVideo()">
						Pause
					</button>

					<button id="beginning" onclick="javascript:beginningVideo()">
						Beginning
					</button>
					<button id="end" onclick="javascript:endVideo()">
						End
					</button>

					<input type="button" value="Tag" onclick="javascript:newLink()">
					<button type="button" onclick="javascript:saveAll()">
						Save
					</button>
					<br>
					<br>
					<a class="ui-state-highlight"> 停留時間: </a>
					<a id="ctime" class="ui-state-error">0秒</a>
				</p>
			</div>
		</div>

	</body>
</html>