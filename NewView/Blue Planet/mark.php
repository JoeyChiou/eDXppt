<?php
	$content = new DOMDocument("1.0", "utf-8");
	$content->formatOutput = true;
	$content->preserveWhiteSpace = false;
	
	/*$players = $content->createElement("Players");
	$content->appendChild($players);
	
	$code = $_POST["player"];
	$player = $content->createElement("player");
	$player->nodeValue = $code;
	$players->appendChild($player);
	
	$code = $_POST["player2"];
	$player = $content->createElement("player");
	$player->nodeValue = $code;
	$players->appendChild($player);*/
	
	$marks = $content->createElement("Marks");
	$content->appendChild($marks);
	
	$code = $_POST["player"];
	$player = $content->createElement("player");
	$player->nodeValue = $code;
	$marks->appendChild($player);
	
	$code = $_POST["player2"];
	$player = $content->createElement("player");
	$player->nodeValue = $code;
	$marks->appendChild($player);
	
	$tags = $_POST["tag_arr"];
	for($i=0;$i<sizeof($tags);$i++){
		$mark = $content->createElement("Mark");
		$mark->nodeValue = $tags[$i];
		$marks->appendChild($mark);
	}
	
	$content->save("mark.xml");
	header('Location: lms.html');
?>