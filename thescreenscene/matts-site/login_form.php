
<div id="payment-wrapper">
  <div id="formPlacement"> 
  <h4>The Law Firm of Matthew Beach, LLC</h4> 
    <form method="post">

      <span class="incorrect-login">
      <?php 
      	echo $error_msg; 

      ?></span>

      <?php if (USE_USERNAME) echo 'Login:<br /><input type="input" name="access_login" id="login-box" class="top-space" />
      <br>
      Password:<br>'; ?>
      <input type="password" name="access_password" class="top-space" /><p></p><input class="login-save-btn" type="submit" name="Submit" value="Submit" />&nbsp;&nbsp;&nbsp;<a class="homepage-link" href="JavaScript:window.close()">homepage</a><img class="lawpay-cc" src="_images/lawpay-cc.gif" border="0" width="240" height="90">
      <p class="copyright-login-client">&copy; The Law Firm of Matthew Beach, LLC - All rights reserved</p>

      </form>
  </div>
</div>

  
