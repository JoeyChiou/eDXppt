<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<title>Blue Planet</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<!--MVA_SCRIPT-->
		<script src="../style/jquery-ui-1.10.3.custom/js/jquery-1.9.1.js"></script>
		<script src="../style/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom.js"></script>
		<script src="../js/author.js"></script>
		<link rel="stylesheet" type="text/css" href="../style/jquery-ui-1.10.3.custom/css/ui-darkness/jquery-ui-1.10.3.custom.css">
		<link rel="stylesheet" type="text/css" href="../style/style.css">
	</head>

	<body LEFTMARGIN="0" TOPMARGIN="0" MARGINWIDTH="0" MARGINHEIGHT="0">
		<table width="800" height="600" border="0" cellpadding="0" cellspacing="0" background="Skin_Img/blue_planet.jpg">
			<tr>
				<td width="197" height="76">&nbsp;</td>
				<td width="603" rowspan="3" align="center" valign="middle">
				<div align="center" id="player2">
					<!--MVA_PPT-->
				</div></td>
			</tr>
			<tr>
				<td height="141" align="center" valign="middle">
				<div align="center" id="player">
					<!--MVA_VIDEO-->
				</div></td>
			</tr>
			<tr>
				<td height="253">&nbsp;</td>
			</tr>
			<tr>
				<td colspan="2">&nbsp;</td>
			</tr>
		</table>
		<div id="MVA_TIME" name="MVA_TIME" style="position:absolute; width:159px; height:20px; z-index:7; left: 20px; top: 239px;"></div>
		<div class="button" id="Play" name="MVA_BTN_PLAY" style="position:absolute; width:82px; height:82px; z-index:1; left: 7px; top: 283px;"><img src="Skin_Img/btn_play.gif" width="82" height="82">
		</div>
		<div class="button" id="Stop" name="MVA_BTN_STOP" style="position:absolute; width:50px; height:50px; z-index:2; left: 90px; top: 297px;"><img src="Skin_Img/btn_stop.gif" width="50" height="50">
		</div>
		<div class="button" id="Pause" name="MVA_BTN_PAUSE" style="position:absolute; width:50px; height:50px; z-index:3; left: 141px; top: 297px;"><img src="Skin_Img/btn_pause.gif" width="50" height="50">
		</div>
		<div class="button" id="Previous" name="MVA_BTN_PREVIOUS" style="position:absolute; width:52px; height:52px; z-index:4; left: 82px; top: 358px;"><img src="Skin_Img/btn_previous.gif" width="52" height="52">
		</div>
		<div class="button" id="Next" name="MVA_BTN_NEXT" style="position:absolute; width:52px; height:52px; z-index:5; left: 135px; top: 358px;"><img src="Skin_Img/btn_next.gif" width="52" height="52">
		</div>
		<div id="AdditionalButton" style="left: 15px;top: 420px;">
			<input type="button" value="Tag" onclick="javascript:newLink()">
			<button type="button" onclick="javascript:saveAll()">
				Save
			</button>
		</div>
		<div id="MVA_PPT_SUBIMAGE" name="MVA_PPT_SUBIMAGE" style="width:686px; height:125px;  left: 57px; top: 485px;"></div>
	</body>
</html>
