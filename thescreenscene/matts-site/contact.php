<?php include "_includes/header.php" ?>

<body onload="document.forms[0].name.focus();">

<div id="wrapper" >	
<?php include "_includes/nav.php" ?>

<div class="headline">
	The Law Firm of Matthew Beach, LLC
</div><!-- .headline -->
<div class="phone">
	720.548.7112
</div>

<article id="contact">
    <!-- <h1>Contact Page</h1> -->
    <p>Matthew Beach, ESQ<br>
    1471 Stuart Street<br>
    Denver, CO 80204<br>
    <br>
    Phone: 720.548.7112<br/>
    <br>
    <a href="mailto:matthew@mbeachlegal.com?subject:Website Message">matthew@mbeachlegal.com</a></p>
            
    <form action="thank_you.php" method="post" id="contactForm" onSubmit="return validateEmail(document.forms[0].email.value) && validateForm('checkbox1')">
    <ul>
        <li class="contact_pg">
          <label class="text" for="name">Name</label>
          <input name="name" type="text" id="name" tabindex="10" />
        </li>
        <li class="contact_pg">
          <label class="text" for="email">Email</label>
          <input name="email" type="email" id="email" tabindex="20" />
        </li>
        <li class="contact_pg">
          <label class="text" for="comments">Comments</label>
          <textarea name="comments" id="comments" tabindex="30"></textarea>
        </li>
        <li class="contact_pg">

<div id="agreeBox">By clicking, &quot;I agree&quot; you understand that this message does not create an attorney client relationship between the Sender and The Law Firm of Matthew Beach LLC.<br /><br /><input id="checkbox1" type="checkbox" /> I agree.</div>


        </li>
      <!--   <li class="contact_pg">
            <input id="send" type="submit" value="Send" tabindex="40" /><input id="clear" type="button" value="Clear" onClick="rUSure()" tabindex="50" />
        </li> -->



        <li class="contact_pg">
          <div class="g-recaptcha" data-callback="recaptchaCallback" data-sitekey="6LdxFCkUAAAAAIWPPUy6RMsFei5IgeLDJ93MPguc"></div>
        </li>
        <li class="contact_pg">
            <button id="confirm" disabled>Check Captcha above to enable Send</button>
            <button id="send" class="display" disabled>Send</button>
            <!-- <input id="send" type="submit" value="Send" tabindex="40" disabled /> -->
        </li>




    </ul> 
    </form>



</div><!-- #wrapper -->

<?php include "_includes/footer.php" ?>


<script src="_scripts/respond.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="_scripts/nav.js?<?php echo time(); ?>"></script>
<script src="_scripts/scripts.js?<?php echo time(); ?>"></script>
<script src="http://localhost:35729/livereload.js"></script>
</body>
</html>