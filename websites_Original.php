<?php $thisPage="projects"; ?><!-- this page has to be named projects in order for the navigation to remain consistent across all the pages -->
<?php include '_includes/header.php'; ?>  
<?php include '_includes/nav.php'; ?> 

<!-- <div id="large_screen">
    <ul>     
        <li class="no_menu"><a href="video.php" title="Videos">Videos</a></li>
        <li class="current"><a href="#" title="Current page: Websites">Websites</a></li> 
    </ul>   
</div> --><!-- div (video & website tabs) -->

	<div>
    <h1 class="website_header_text">Websites </h1>
    <a class="inline_link" href="video.php"> Click here for video projects</a>
   	</div>
    
    <div class="website_container clear-fix">
        <p>There are <u>plenty</u> more examples - just ask. If you're in need of Web development, let's talk!</p>
        <p>&nbsp;</p>
    
		<div class="website one"> 
        	<a href="http://www.robertmeans.com/fhl" target="_blank"><img src="_images/monitor_left.png" alt="Forest Heights Lodge"></a>
            <div class="content">
                <h3><a class="stealth" href="http://www.robertmeans.com/fhl" target="_blank">Forest Heights</a></h3>
                <p><a class="stealth" href="http://www.robertmeans.com/fhl" target="_blank">Fun project that showcases a lot of information styled into a custom site with the client driving every step of the development.</a></p>
            </div><!-- .content -->
        </div><!-- .website one -->
             
		<div class="website two"> 
      	<a href="http://www.wildflowerevergreen.com" target="_blank"><img src="_images/monitor_middle.png" alt="Wildflower Café Evergreen"></a>
            <div class="content">
                <h3><a class="stealth" href="http://www.wildflowerevergreen.com" target="_blank">Wildflower Café</a></h3>
                <p><a class="stealth" href="http://www.wildflowerevergreen.com" target="_blank">The first customer utilizing responsive design to provide a custom experience for visitors on a desktop, tablet or mobile device. If you're visiting from a computer you can resize your browser window to view the different styles.</a></p>  
            </div><!-- .content -->
        </div><!-- .website two -->
         
      	<div class="website three"> 
      	<a href="http://www.satillainc.com" target="_blank"><img src="_images/monitor_right.png" alt="Satilla, Inc."></a>
            <div class="content">
                <h3><a class="stealth" href="http://www.satillainc.com" target="_blank">Satilla, Inc.</a></h3>
                <p><a class="stealth" href="http://www.satillainc.com" target="_blank">This site wieghs heavier on images than on words to impart the client's information.</a></p>
            </div><!-- .content -->
        </div><!-- .website three -->
  
    </div><!-- .website_container -->

<?php include '_includes/footer.php'; ?>        
