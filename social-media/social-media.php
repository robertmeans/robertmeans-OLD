<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Social Media Page</title>
<style type="text/css">
body {
	width: 500px;
	margin: 100px auto;
	text-align: center;
	font-family: Calibri, Tahoma, Verdana;
	font-size: 16px;
}
a.mylink{
	padding: 20px;
	background: #757575;
	color: #fff;
	border: 1px solid #757575;
	text-decoration: none;
	border-radius: 5px;
}
a.mylink:hover {
	background: #fff;
	color: #999;
	text-decoration: none;
}
.social-network-icons {

	margin-top: 20px;
	margin-left: 5px;
	padding-left: 0;
}
.social-network-icons img {
	margin: 0px 20px 0px 20px;
	max-width: 50px;
	max-height: 50px;
	border: none;
}

.facebook-square {
	border-radius: 50%;
	-webkit-animation: in .2s 2 linear;
	-moz-animation: in .2s 2 linear;
	-ms-animation: in .2s 2 linear;
	animation: in .2s 2 linear;
	
}
.facebook-square:hover {
		-webkit-animation: out .2s 2 linear;
		-moz-animation: out .2s 2 linear;
		-ms-animation: out .2s 2 linear;
		animation: out .2s 2 linear;

	}
.twitter-square {
	border-radius: 50%;
	-webkit-animation: in .2s 2 linear;
	-moz-animation: in .2s 2 linear;
	-ms-animation: in .2s 2 linear;
	animation: in .2s 2 linear;
}
	.twitter-square:hover {
		-webkit-animation: out .2s 2 linear;
		-moz-animation: out .2s 2 linear;
		-ms-animation: out .2s 2 linear;
		animation: out .2s 2 linear;

	}
.google-plus-square {
	border-radius: 50%;
	-webkit-animation: in .2s 2 linear;
	-moz-animation: in .2s 2 linear;
	-ms-animation: in .2s 2 linear;
	animation: in .2s 2 linear;
}
	.google-plus-square:hover {
		-webkit-animation: out .2s 2 linear;
		-moz-animation: out .2s 2 linear;
		-ms-animation: out .2s 2 linear;
		animation: out .2s 2 linear;

	}

@keyframes in {
    0%   { transform: rotate(360deg); }
    100% { transform: rotate(0deg); }
}
@keyframes out {
    from   { transform: rotate(0deg); }
    to { transform: rotate(360deg);}
}
@-webkit-keyframes in {
    0%   { -webkit-transform: rotate(360deg); }
    100% { -webkit-transform: rotate(0deg); }
}
@-webkit-keyframes out {
    from   { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(360deg);}
}
@-moz-keyframes in {
    0%   { -moz-transform: rotate(360deg); }
    100% { -moz-transform: rotate(0deg); }
}
@-moz-keyframes out {
    from   { -moz-transform: rotate(0deg); }
    to { -moz-transform: rotate(360deg);}
}
@-ms-keyframes in {
    0%   { -ms-transform: rotate(360deg); }
    100% { -ms-transform: rotate(0deg); }
}
@-ms-keyframes out {
    from   { -ms-transform: rotate(0deg); }
    to { -ms-transform: rotate(360deg);}
}

	</style>
	
</head>
<body>
	<a href="#" target="_blank" class="mylink">open all 3</a>
	<br>
	<br>
	<br>
<div class="social-network-icons"><a href="https://www.facebook.com/evergreenwebdesign01" target="_blank"><img class="facebook-square" src="_images/facebook-icon.jpg" alt="Facebook"></a> <a href="https://twitter.com/EWDLLC" target="_blank"><img class="twitter-square" src="_images/twitter-icon.jpg" alt="Twitter"></a> <a href="https://plus.google.com/+Evergreenwebdesignllc" target="_blank"><img class="google-plus-square" src="_images/google-plus-icon.jpg" alt="Google+"></a></div



<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

	<script>
	$('a.mylink').click(function(e) {
    e.preventDefault();
    window.open('http://www.facebook.com/evergreenwebdesign01');
    window.open('http://www.twitter.com/EWDLLC');
    window.open('http://www.plus.google.com/+Evergreenwebdesignllc');
});
	</script>
</body>
</html>