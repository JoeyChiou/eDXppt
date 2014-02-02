<?php
	$content = new DOMDocument("1.0", "utf-8");
	$content->formatOutput = true;
	$content->preserveWhiteSpace = false;
	$marks = $content->createElement("Marks");
	$content->appendChild($marks);
	
	$tags = $_POST["tag_arr"];
	for($i=0;$i<sizeof($tags);$i++){
		$mark = $content->createElement("Mark");
		$mark->nodeValue = $tags[$i];
		$marks->appendChild($mark);
	}
	
	$content->save("mark.xml");
	header('Location: lms.php');
?>