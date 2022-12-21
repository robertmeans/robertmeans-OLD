<?php $thisPage="home"; ?>
<?php include '_includes/header.php'; ?>       
<?php include '_includes/nav.php'; ?>

        <article>
        	<h1><script>
            var greeting = new Date()
            var hours = greeting.getHours()
            
            if (hours >= 5 && hours <= 11) //5a - 11a
            document.write('Good morning,')
            else if (hours >= 12 && hours <= 16) //noon - 4p
            document.write('Good afternoon,')
			else if (hours >= 17 && hours <= 18) //5p - 6p
            document.write('Good (late) afternoon,')
            else if (hours >= 19 && hours <= 23) //7p - 11p
            document.write('Good evening,')
            else //12a - 4a
            document.write('You sure are up late.')
            </script></h1>
			<p>If you're looking for Robert Means or Bobby Means or Robby or Rob or Bob Means of Evergreen, Colorado, here I am. I love to work creatively on the computer. I have put together a collection of projects that are suitable for the public here. Trust me, I've done a lot of bad things that I can't post online. We're talking exceptionally illegal stuff. I'm not afraid to go to the dark side. <a href="contact.php">Call</a> for a free consultation.</p>
        </article><!-- article -->

        <div class="promo_container">
        
        	<div class="promo one">
            	<div class="content">
                <a href="http://www.myscreenscene.com" border="0px" target="_blank"><img src="_images/promo_1.jpg" width="60" height="60" alt="My Screen Scene" /></a>
					<h3>My Screen Scene</h3>
                   	<p>This is a browser utility I created in order to organize my online routine. Here it is, available for everyone to use.</p>
                    <p><a class="cta" href="http://www.myscreenscene.com" target="_blank">Really neat</a></p>
                </div><!-- content -->
            </div><!-- promo one -->
            
            <div class="promo two">
            	<div class="content">
                <a href="websites.php" border="0px"><img src="_images/promo_2.jpg" width="60" height="60" alt="Website Projects" /></a>            
                    <h3>Websites</h3>
                    <p>My life of crime stops at the Internet. No nefarious sites here. Just good wholesome, useful, helpful, happy, friendly fun.</p>
                    <p><a class="cta" href="websites.php">Tour Projects</a></p>
            	</div><!-- content -->
            </div><!-- promo two -->
            
            <div class="promo three">
                <div class="content">
                <a href="video.php" border="0px"><img src="_images/promo_3.jpg" width="60" height="60" alt="Videos" /></a>            	
                    <h3>Video</h3>
                    <p>Oh yea, my life of crime doesn't involve video either. Ok, &quot;life of crime&quot; was sort of embellished and made up'ish. </p>
                    <p><a class="cta" href="video.php">View videos</a></p>
            	</div><!-- content -->
            </div><!-- promo three -->
            <div class="clear-fix"></div><!-- clear-fix -->
        
        </div><!-- promo_container --> 
                     
<?php include '_includes/footer.php'; ?>     

