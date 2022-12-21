<?php require_once('_includes/popup-contactform.php'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Robert Means - Website Development Evergreen, Colorado</title>
  <link rel="icon" type="image/ico" href="_images/favicon.ico">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta name="description" content="I provide website concept, design, development and SEO services featuring current specifications within a responsive framework.">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <script src="_scripts/coolclock-breakpoints.js?<?php echo time(); ?>"></script>
  <script src="_scripts/modernizr.js?<?php echo time(); ?>"></script> 
  <link rel="stylesheet" href="_css/style.css?<?php echo time(); ?>">

<!-- Google Analytics code -->
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-38678515-1', 'auto');
    ga('send', 'pageview');

  </script>
<!-- end Google Analytics code -->
</head>

<body onload="javascript:fg_hideform('fg_formContainer','fg_backgroundpopup');">
<div id="top-of-page"></div>
<div id="wrapper">

<a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>

<header id="intro">
<a class="mobile_menu"></a>
<nav id="mainNav">
  <div id="center-nav">
  <h2>Site Navigation</h2>
  <ul>
    <li><a href="#" class="first-nav-item no-active-nav back-to-top2"><i class="fa fa-angle-up"></i></a></li>
    <li><a href="#div-two" class="placeholder">services</a></li>
    <li><a href="#div-three" class="placeholder">about</a></li>
    <li><a href='javascript:fg_popup_form("fg_formContainer","fg_form_InnerContainer","fg_backgroundpopup");' class="last-nav-item">contact</a></li>
    <li><a class="first-nav-item no-active-nav large-screen-gone mobile_menu2"><i class="fa fa-times-circle"></i></a></li>
  </ul>
  </div>
</nav>

<div id="bg-div-one">
  <img src="_images/sky.jpg" alt="blue sky">
</div>
<section id="div-one">

<div id="clockScene">
  <div class="text-box cf">
  <canvas id="clockid" class="CoolClock"></canvas>
  
  <h3>
    <script>
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
      </script>
    </h3>

    <p><span id="time"></span> on a <span id="day"></span> is the perfect time to <a class="hmpg-contact" href='javascript:fg_popup_form("fg_formContainer","fg_form_InnerContainer","fg_backgroundpopup");'>contact</a> Robert and discover how pain free your website project can be.</p>
    <p>With options to suit your vision, budget and deadline, the solution to your online needs is right here.</p>

  </div>

  <article id="nameScene">
    <div id="EWD">
      <span class="title-text">Robert Means</span>
      <div class="website-solutions-badge">
        <h2>Website Solutions</h2>
        <h4>Evergreen, Colorado</h4>
        </div>
      <div id="scrollDownSprite"><a href="#div-two" class="no-active-nav"></a></div>
    </div><!-- name -->
  </article>

</div><!-- #clockScene --> 
</section><!-- #div-one -->
</header>

<section id="div-two">
  <div class="tabs">
      <ul class="tab-links">
          <li class="active"><a href="#tab1" class="static"><i class="fa fa-eye"></i> <span class="mobile-gone">Overview</span></a></li>
          <li><a href="#tab2" class="static"><i class="fa fa-desktop desktop-only"></i> <span class="mobile-gone">Websites</span></a></li>
          <li><a href="#tab3" class="static"><i class="fa fa-wordpress desktop-only"></i> <span class="mobile-gone">WordPress</span></a></li>
      </ul> 

  <div class="tab-content">

        <div id="tab1" class="tab active cf"><!-- Overview tab -->
          <h2 class="mobile">Overview</h2>
            <p>At the risk of limiting the available services to websites it should be noted that Website Solutions loosly translates to any computer related task you can't do, don't have time to do or don't want to do.</p>
            <p>Past projects, aside from website concept, design &amp; development include:</p>
            <div class="project-col">
              <ul class="past-projects">
                <li>WordPress recovery &amp migration</li>
                <li>Automating data entry tasks</li>
                <li>Technical support</li>
                <li>Illustrations</li>
                <li>Scanning and cataloging</li>
                <li>Creating banner ads</li>
                <li>Designing &amp; authoring technical instructions</li>
              </ul>
              </div>

              <div class="project-col">
              <ul class="past-projects second-column">
                <li>Updates/Modifications to existing websites</li>
                <li>Editing video testimony for court trial</li>
                <li>Editing audio testimony</li>
                <li>Designing restaurant menus</li>
                <li>Developing online shopping cart</li>
                <li>Preparing newsletters</li>
                <li>Photographing &amp; cataloging inventory</li>
              </ul>
              </div>

          <div class="container">
            <p class="social-network-icons"><a href="https://www.facebook.com/evergreenwebdesign01" target="_blank"><img class="facebook-square" src="_images/facebook-icon.jpg" alt="Facebook"></a> <a href="https://twitter.com/EWDLLC" target="_blank"><img class="twitter-square" src="_images/twitter-icon.jpg" alt="Twitter"></a> <a href="https://plus.google.com/+Evergreenwebdesignllc" target="_blank"><img class="google-plus-square" src="_images/google-plus-icon.jpg" alt="Google+"></a> please share</p>
            
            <a href="#" class="click no-default"><i class="fa fa-angle-down"></i> SEO Strategies</a>

            <div class="expand">
              <p class="seo-strategies">Your Search Engine Optimization stragety starts with the big 3 social networking giants and continues all the way into the code of your website.</p>
              <p>Gone are the days when you could just plop a few keywords into a meta tag in the code of your website and let the search engines do the rest. Today the algorithms search engines use to index your site into their database rely on a number of facets pertaining to your website address and they all ignore the keyword meta tag.</p>
              <p>The playing field has changed and if you're not keeping up, you're quickly getting left beind. It's an aggressive campaign that needs to be viewed through the perspective of a long term endeavor and not a quick fix. I will draft a course for your business in order to navigate an efficient strategy best suited to draw attention to <em>your</em> site.</p>
            </div><!-- .expand !-->
          </div><!-- #container -->

          <div class="container2">
             <a href="#" class="click no-default"><i class="fa fa-angle-down"></i> Pricing</a>
            <div class="expand">
              <p>Pricing options are available to suit virtually every budget and project. Let's discuss your idea and outline a plan that works for you.</p>
            </div><!-- .expand !-->
          </div><!-- #container2 -->

        </div><!-- #tab1 .tab .active .cf -->

      <div id="tab2" class="tab cf"><!-- Websites tab -->
      <h2 class="mobile">Websites</h2>
        <p>A custom website can help rediscover your business image in the Internet marketplace.</p>
        <p>With Internet traffic <a class="txt-a" href="http://techcrunch.com/2014/08/21/majority-of-digital-media-consumption-now-takes-place-in-mobile-apps/" target="_blank">more heavily consumed</a> through cell phones, you can't afford to have an online presence without a strong mobile interface.</p>
        <p>Utilizing the latest specifications in HTML5, CSS3 and jQuery with a focus on viewport-independent, fluid design, you can rest assured your your site looks great and functions flawlessly no matter how your visitors get there.</p>

    <ul class="list moresites cf">

      <li>
        <a href="http://www.rookiesevergreen.com" target="_blank"><img src="_images/rookiesevergreen-website.jpg" alt="Rookies - Batting Cages Evergreen, Colorado"></a>
        <h3>Rookies</h3>
        <p>Evergreen, Colorado's premiere batting cages with online managed booking system.</p>
      </li>
      <li>
        <a href="http://www.evergreensigns.com" target="_blank"><img src="_images/evergreen-signs-website.jpg" alt="Evergreen Signs Website"></a>
        <h3>Evergreen Signs</h3>
        <p>Advertising in various mediums. With a mobile-optimized website they are now reaching more customers than ever.</p>
      </li>
      <li>
        <a href="http://www.wildflowerevergreen.com" target="_blank"><img src="_images/wildflower-website.jpg" alt="Wildflower Café"></a>
        <h3>The Wildflower Café</h3>
        <p>Located in historic downtown Evergreen, Colorado with a menu that brings folks in from miles around.</p>
      </li> 
      <li>
        <a href="http://www.mbeachlegal.com" target="_blank"><img src="_images/mbeachlegal-website.jpg" alt="Matthew Beach ESQ, LLC"></a>
        <h3>Matthew Beach ESQ, LLC</h3>
        <p>Trial attorney practicing along the Front Range of Colorado.</p>
      </li>
      <li>
        <a href="http://www.myscreenscene.com" target="_blank"><img src="_images/myscreenscene-website.jpg" alt="MyScreenScene.com"></a>
        <h3>MyScreenScene</h3>
        <p>This is a browser utility I created using PHP &amp; mySQL that should revolutionize the world! ...Or at least be incredibly useful.</p>
      </li>      
      <li>
        <a href="http://www.evergreenwildernessguides.com" target="_blank"><img src="_images/evergreen-wilderness-guides-website.jpg" alt="Evergreen Wilderness Guides"></a>
        <h3>Evergreen Wilderness Guides</h3>
        <p>Outdoor instruction with courses ranging from rock climbing to mountain biking to survival skills.</p>
      </li>
      <li>
        <a href="http://www.evergreenwebdesign.com/offline-sites/colt-green/" target="_blank"><img src="_images/colt-green-website.jpg" alt="Colt Green Construction"></a>
        <h3>Colt Green Construction</h3>
        <p>Construction and project management company, Jacksonville, Florida</p>
      </li> 
     
    </ul><!-- .list .moresites .cf -->

    <div class="centerDisplay">
    <button id="toggleMoreSites">Show more websites</button>
    </div><!-- .centerDisplay -->

    <div id="addSites01">
      <h2>Static Website Samples</h2>
        <p>The sites below reflect an era before fluid/responsive design was a thing. While these examples do not play well with mobile devices you can still appreciate the attention to detail reflected in each unique design and content management.</p>

    <ul class="list moresites staticsites cf">
      <li>
        <a href="http://www.robertmeans.com/fhl" target="_blank"><img src="_images/fhl-website.jpg" alt="Forest Heights Lodge"></a>
        <h3>Forest Heights Lodge</h3>
        <p>Lots of custom features stiched flawlessly into a custom design.</p>
      </li>
      <li>
        <a href="http://www.robertmeans.com/theburn2012" target="_blank"><img src="_images/theburn2012-website.jpg" alt="The Burn Mountain Bike Time Trial"></a>
        <h3>The Burn MTB TT</h3>
        <p>Bike race that I Directed in 2010 &amp; 2012</p>
      </li>
      <li>
        <a href="http://www.evergreenwebdesign.com/offline-sites/acts/" target="_blank"><img src="_images/acts-church-website.jpg" alt="Acts Church Website"></a>
        <h3>Acts Church</h3>
        <p>Cover image was a composite of several images provided by customer.</p>
        
      </li>
      <li>
        <a href="http://www.evergreenwebdesign.com/offline-sites/satillainc" target="_blank"><img src="_images/satilla-website.jpg" alt="Satilla, Inc"></a>
        <h3>Satilla, Inc.</h3>
        <p>Construction management company.</p>
      </li>
      <li>
        <a href="http://www.evergreenwebdesign.com/offline-sites/bennmediation" target="_blank"><img src="_images/bennmediation-website.jpg" alt="Benn Mediation"></a>
        <h3>Benn Mediation</h3>
        <p>Family law attorney practicing in Denver.</p>
      </li>
      <li>
        <p>Services include a lot more than just websites. Got a project? Just ask!</p>
      </li>
    </ul><!-- .list .moresites .cf -->
    </div><!-- #addSites01 -->

    </div><!-- #tab2 .tab .cf --><!-- Websites tab -->

    <div id="tab3" class="tab cf"><!-- $? tab -->
      <h2 class="mobile"><i class="fa fa-wordpress"></i> WordPress</h2>
      <p>WordPress is the newest option available to customers and one that is exciting to provide. WordPress is an open source framework originally designed as a blogging platform but that can be tailored to your specific tastes while harnessing the incredible power and stability of thousands of lines of code engineered by the brightest folks in the industry. It's kind of like someone giving you a Ferrari engine - now, who are you going to hire to build you a car around that engine?</p>
    </div><!-- #tab3 .tab cf -->

  </div><!-- .tab-content -->

  </div><!-- .tabs -->

</section><!-- #div-two -->

<article id="div-three">
  <div class="about cf">

    <h1>Meet the Team</h1>
    <div class="about-content">
      <div class="about-profile-img">
        <img src="_images/Robert-Means-Developer.png" alt="Robert Means">
      </div>
      <div class="about-profile">
      <h3>Robert Means<span class="about-gone">,</span> <br class="large-screen-gone">Developer</h3>
      <!-- <h2>PHP, HTML5, CSS3, jQuery, Javascript</h2> -->
        <p>I have been developing websites since the '90's with a passion for integrating complex features within custom designs.</p>
        <p>The skills I bring to your project include PHP, HTML5, CSS3, jQuery and Javascript. A strong command of these languages is the very foundation of a solid product and one that you can feel confident will display across multiple browsers and devices in a consistent, reliable manner.</p>

        <p class="mail"><a href='javascript:fg_popup_form("fg_formContainer","fg_form_InnerContainer","fg_backgroundpopup");' class="env"><i class="fa fa-envelope-o"></i></a> <a href='javascript:fg_popup_form("fg_formContainer","fg_form_InnerContainer","fg_backgroundpopup");' class="about-contact">Contact Robert</a></p>
      </div>
    </div><!-- .about-content -->

    <div class="about-content">
      <div class="about-profile-img">
        <img src="_images/Bobby-Means-Designer.jpg" alt="Bobby Means">
      </div>
      <div class="about-profile">
      <h3>Bobby Means<span class="about-gone">,</span> <br class="large-screen-gone">Designer</h3>
      <!-- <h2>Photoshop, Illustrator, Premiere</h2> -->
        <p>Basking in the RGB color spectrum and designing unique, beautiful websites has been a joy of mine since my first Windows 95 computer shortly after the GUI went mainstream.</p>
        <p>I wield Photoshop like a samuri ninja and Illustrator like a middleweight contender. ...I'm working on that.</p>

        <p class="mail"><a href='javascript:fg_popup_form("fg_formContainer","fg_form_InnerContainer","fg_backgroundpopup");' class="env"><i class="fa fa-envelope-o"></i></a> <a href='javascript:fg_popup_form("fg_formContainer","fg_form_InnerContainer","fg_backgroundpopup");' class="about-contact">Contact Bobby</a></p>
      </div>
    </div><!-- .about-content -->      

    <div class="about-content">
      <div class="about-profile-img">
        <img src="_images/Bob-Means-Sales.jpg" alt="Bob Means">
      </div>
      <div class="about-profile">
      <h3>Bob Means<span class="about-gone">,</span> <br class="large-screen-gone">Sales &amp; Support</h3>
        <p>My mission is to understand your goals and vision and convey that to Bobby, our designer. He's a bit of a flake sometimes as designers can be so you'll want someone focused and persistent to keep him on task. Together we can outline a plan that works for you.</p>

        <p class="mail"><a href='javascript:fg_popup_form("fg_formContainer","fg_form_InnerContainer","fg_backgroundpopup");' class="env"><i class="fa fa-envelope-o"></i></a> <a href='javascript:fg_popup_form("fg_formContainer","fg_form_InnerContainer","fg_backgroundpopup");' class="about-contact">Contact Bob</a></p>
      </div>
    </div><!-- .about-content -->

    <div class="about-content about-btm">
      <div class="about-profile-img">
        <img src="_images/Rob-Means-Accounting.jpg" alt="Rob Means">
      </div>
      <div class="about-profile">
      <h3>Rob Means<span class="about-gone">,</span> <br class="large-screen-gone">Internetual Webanaut</h3>
        <p>Don't let any of the others here fool you - I keep this circus in order and am The Pillar of resolute and steadfast integrity overseeing the entire operation and ensuring every last detail is maintained to immaculate perfection.</p>

        <p class="mail"><a href='javascript:fg_popup_form("fg_formContainer","fg_form_InnerContainer","fg_backgroundpopup");' class="env"><i class="fa fa-envelope-o"></i></a> <a href='javascript:fg_popup_form("fg_formContainer","fg_form_InnerContainer","fg_backgroundpopup");' class="about-contact">Contact Rob</a></p>
      </div>
    </div><!-- .about-content -->        

  </div><!-- .about -->
</article><!-- #div-three -->

<div id="div-four"><!-- begin .backstretch -->
<div class="row text-center">

  <div id="process_slider" class="flexslider_process">
    <ul class="slides">
      
      <li data-thumb="_images/step-01.png">
        <div class="slide_content">
          <div class="slide_title">Create a Blueprint</div>
          <div class="slide_text">
            We'll research user expectations and target common use cases, developing a clear sitemap and user flow for intuitive engagement within your custom design.
          </div>
        </div><!-- /slide_content -->
      </li>
      
      <li data-thumb="_images/step-02.png">
        <div class="slide_content">
          <div class="slide_title">Design <span class="plus">+</span>  Create</div>
          <div class="slide_text">
            During this phase, we focus on brand experience, content engagement and creative expression through custom design working closely with clients to create an end result that both sides will be proud of.

          </div>
        </div><!-- /slide_content -->
      </li>
      
      <li data-thumb="_images/step-03.png">
        <div class="slide_content">
          <div class="slide_title">Develop <span class="plus">+</span>  Deploy</div>
          <div class="slide_text">
            Using the most appropriate technologies and interactive elements, We build standards-compliant, cross-platform websites and apps that are a pixel-perfect match to the design phase mockups. 
          </div>
        </div><!-- /slide_content -->
      </li>
      
      <li data-thumb="_images/step-04.png">
        <div class="slide_content">
          <div class="slide_title">Relax</div>
          <div class="slide_text">
            You can feel confident your project is in the right hands along with the peace of mind that comes with having your own personal support specialist on call.
            
          </div>
        </div><!-- /slide_content -->
      </li>
      
      <li data-thumb="_images/step-05.png">
        <div class="slide_content">
          <div class="slide_title">Let's Brainstorm Ideas!</div>
          <div class="slide_text">
           Each project begins by identifying objectives and tastes in order to customize an interactive experience tailored to your specific needs.
          </div>
        </div><!-- /slide_content -->
      </li>
      
    </ul><!-- .slides -->
  </div><!-- #process_slider .flexslider_process -->

</div> <!-- #row .text-center -->
</div><!-- #div-four -->

</div><!-- #wrapper -->
<?php include "_includes/footer.php" ?>
<?php require_once('_includes/contactform-code.php'); ?>

<script type="text/javascript" src="_scripts/jquery.backstretch.min.js"></script>
<script type="text/javascript" src="_scripts/scripts.js?<?php echo time(); ?>"></script>
<script src="http://localhost:35729/livereload.js"></script>
</body>
</html>