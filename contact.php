<?php $thisPage="contact"; ?>
<?php include '_includes/contact_header.php'; ?>       
<?php include '_includes/nav.php'; ?>             

<article id="contact">
    <!-- <h1>Contact Page</h1> -->
    <p>Phone: 720.319.8316<br/>
    <a href="mailto:robert@robertmeans.com">robert@robertmeans.com</a></p>
            
    <form action="thank_you.php" method="post" id="contactForm" onSubmit="return validateEmail(document.forms[0].email.value);">
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
            <input id="send" type="submit" value="Send" tabindex="40" /><input id="clear" type="button" value="Clear" onClick="rUSure()" tabindex="50" />
        </li>
    </ul> 
    </form>   
             
</article><!-- article -->
  <div class="clear-fix"></div><!-- clear-fix -->

<?php include '_includes/footer.php'; ?>        

