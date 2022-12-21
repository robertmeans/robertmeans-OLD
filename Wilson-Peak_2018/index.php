<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

	<!--
		Core Functionality Developed By:
		Supersized - Fullscreen Slideshow jQuery Plugin
		Author	: Sam Dunn
		Company : One Mighty Roar (www.onemightyroar.com)
		Site	: www.buildinternet.com/project/supersized
		Version : 3.2.7
		License : MIT License / GPL License
		-----------------------------------
		Styles and Additional Functionality By:
		Author  : Robert Means
		Site    : www.robertmeans.com
		Company : Evergreen Web Design (www.evergreenwebdesign.com)
		Version : 1.0.5
	-->

<head>
	<link rel="icon" type="image/ico" href="http://www.robertmeans.com/San_Juan_Camping_Trip_2015/_images/favicon.ico">
	
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
	<title>Stanton &amp; Dad - Wilson Peak, San Juan Mountains, August 6-9, 2018</title>
	
	<link rel="stylesheet" type="text/css" href="style.css?<?php echo time(); ?>" />

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/scripts.js"></script>
		
</head>
	
<body>
	<!--Slide captions displayed here-->
	<a href="#" id="hideo"><i class="fa fa-times"></i></a>
	<div class="caption-wrap">
		<div id="slidecaption" class="fade"></div>
	</div>

	<!--Thumbnail Navigation-->
	<div id="prevthumb"></div>
	<div id="nextthumb"></div>
	
	<!--Arrow Navigation-->
	<a id="prevslide" class="load-item"></a>
	<a id="nextslide" class="load-item"></a>
	
	<div id="thumb-tray" class="load-item">
		<div id="thumb-back"></div>
		<div id="thumb-forward"></div>
	</div>
	
	<!--Time Bar-->
	<div id="progress-back" class="load-item">
		<div id="progress-bar"></div>
	</div>
	
	<!--Control Bar-->
	<div id="controls-wrapper" class="load-item">
		<div id="controls">
			
			<a id="play-button"><img id="pauseplay" src="img/pause.png"/></a>
		
			<!--Slide counter-->
			<div id="slidecounter">
				<span class="slidenumber"></span> / <span class="totalslides"></span>
			</div>
		
			<!--Thumb Tray button-->
			<a id="tray-button"><img id="tray-arrow" src="img/button-tray-up.png"/></a>
			
			<!--Navigation-->
			<ul id="slide-list"></ul>
			
		</div>
	</div>
<script type="text/javascript" src="js/captions.js"></script>
<script src="http://localhost:35729/livereload.js"></script>


</body>
</html>
