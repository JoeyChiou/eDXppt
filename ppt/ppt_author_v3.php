<!DOCTYPE html>

<html>
  <body>	
	<script>
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";

      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player, player2;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
		  height: '240',
          width: '320',
		  videoId: 'JCQs6JROANE',
        });
		
		player2 = new YT.Player('player2', {
		  height: '480',
          width: '640',
		  videoId: 'Ib7IMt0CUF4',
        });
      }
	  
      function playVideo(){
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
	  
	  var ctime;
	  function getCurrentTime(){
		ctime = player.getCurrentTime();
		document.getElementById("ctime").textContent = ctime + " 秒";
	  }
	  
	  function newLink(){
		var button = document.createElement("button");
		button.type = "button";
		button.textContent = ctime + " 秒";
		
		var tag = document.getElementById("tag");
		tag.appendChild(button);
	  }
	  
	  function saveAll(){
		var tag = document.getElementById("tag").childNodes;
		var tag_arr = new Array();
				for(var i=0;i<tag.length;i++){
			tag_arr[i] = tag[i].textContent;
		}
		alert("Save Success!");
		//var url = "mark.php?"+tag_arr;
		//location.replace(url);
	  }
    </script>
	
	<table border="1">
		<tr>
			<td><div id="player"></div></td>
			<td rowspan="2"><div id="player2"></div></td>			
		</tr>
		<tr>
			<td>
			<p>
			<input type="button" value="Play" onclick="javascript:playVideo()">
			<input type="button" value="Pause" onclick="javascript:pauseVideo()">
			<input type="button" value="Tag" onclick="javascript:newLink()">
			<button type="button" onclick="javascript:saveAll()">Save</button>
			<br>
			</p>
			<p>
			停留時間:<div id="ctime"></div>
			</p>
			<p>
			Tag:<br>
			<div id="tag"></div>
			</p>
			</td>
		</tr>
	</table>
  </body>
</html>