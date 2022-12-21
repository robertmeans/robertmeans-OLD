<!DOCTYPE html>
<?php
 	session_start(); 
	
	$countVisit = 0;
	// if cookie is set for the variable, it'll go to $countVisit and get added by 1; otherwise it'll show 0 for tha variable
	if(isset($_COOKIE['countVisit'])){
		$countVisit = $_COOKIE['countVisit'];
		$countVisit ++;
	}
	setcookie('countVisit', $countVisit, strtotime( '10 days' ));

	/* if this is the visitor's first visit set a variable called $first_visit based on the fact that a cookie named "bobs-message" does not exist but then set the cookie named "bobs-message". future visits will reveal that $first_visit does not exist because a cookie with the value "bobs-message" does. */
    $first_visit = !isset( $_COOKIE["first-visit"] );
    
    // setcookie( "bobs-message", 1, strtotime( '+365 days' ) );
    /* for testing */
    setcookie( "first-visit", 1, strtotime( '10 days' ) );
    // setcookie( "follow-visit", 1);

    // session_unset();
    // session_destroy();
?>
<html lang="en">
<!--
  Author:       Robert Means

  Contact:      robert@robertmeans.com
                (303) WEBSITE
                that's (303) 932.7483

  Comments:     You look very nice today! :)
-->
<head>
	<meta charset="UTF-8">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="expires" content="0">
	
	<title>Robert Means | (720) 934-1245</title>
	<link rel="icon" type="image/ico" href="_images/favicon.ico">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta name="description" content="Robert Means - Résumé">
	<meta name="format-detection" content="telephone=no">

	<meta property="og:url" content="http://www.robertmeans.com/r%C3%A9sum%C3%A9/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Robert Means | (720) 934-1245" />
	<meta property="og:image" content="http://www.robertmeans.com/_images/robert-means.png" />
	<meta property="og:image:alt" content="Robert Means" />
	<meta property="og:description" content="Robert Means - Résumé" />



	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css">
  	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/v4-shims.css">
	<link href="https://fonts.googleapis.com/css?family=Lato|Architects+Daughter|Crimson+Text&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="style.css?<?php echo time(); ?>" type="text/css">

	<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> -->
	<script src="https://code.jquery.com/jquery-latest.js"></script>

	<script src='https://www.google.com/recaptcha/api.js'></script>
	<script>
	    function recaptchaCallback() {
	        $('#confirm').addClass('display');
	        $('#send').removeAttr('disabled');
	        $('#send').removeClass('display');
	    };
    </script>	
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-140046709-4"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-140046709-4');
    </script>    
</head>