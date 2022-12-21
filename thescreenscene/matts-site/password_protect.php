<?php

###############################################################
# Page Password Protect 2.13
###############################################################
# Visit http://www.zubrag.com/scripts/ for updates
############################################################### 
#
# Usage:
# Set usernames / passwords below between SETTINGS START and SETTINGS END.
# Open it in browser with "help" parameter to get the code
# to add to all files being protected. 
#    Example: password_protect.php?help
# Include protection string which it gave you into every file that needs to be protected
#
# Add following HTML code to your page where you want to have logout link
# <a href="http://www.example.com/path/to/protected/page.php?logout=1">Logout</a>
#
###############################################################

##################################################################
#  SETTINGS START
##################################################################

include_once('settings.php');

// Add login/password pairs below, like described above
// NOTE: all rows except last must have comma "," at the end of line
$LOGIN_INFORMATION = array(
  ADMIN_PASSWORD
);

// request login? true - show login and password boxes, false - password box only
define('USE_USERNAME_ADMIN', false);

// User will be redirected to this page after logout
define('LOGOUT_URL_ADMIN', isset($_SERVER['HTTP_REFERER']) ? str_replace('?logout=1','',$_SERVER['HTTP_REFERER']) : '');

// time out after NN minutes of inactivity. Set to 0 to not timeout
define('TIMEOUT_MINUTES_ADMIN', 0);

// This parameter is only useful when TIMEOUT_MINUTES_ADMIN is not zero
// true - timeout time from last activity, false - timeout time from login
define('TIMEOUT_CHECK_ACTIVITY_ADMIN', true);

##################################################################
#  SETTINGS END
##################################################################


///////////////////////////////////////////////////////
// do not change code below
///////////////////////////////////////////////////////

// timeout in seconds
$timeout = (TIMEOUT_MINUTES_ADMIN == 0 ? 0 : time() + TIMEOUT_MINUTES_ADMIN * 60);

// logout?
if(isset($_GET['logout'])) {
  setcookie("verify", '', $timeout, '/'); // clear password;
  header('Location: ' . LOGOUT_URL_ADMIN);
  exit();
}

if(!function_exists('showLoginPasswordProtect')) {

// show login form
function showLoginPasswordProtect($error_msg) {
?>
<html>
<head>
  <title>Admin Login</title>
  <link rel="stylesheet" href="_css/styles.css?<?php echo time(); ?>">
  <META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
  <META HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">

</head>
<body class="login-background">
<div id="payment-wrapper">
  <div id="formPlacement">

  <form method="post">
    <br>
    <h3>Administrative Login</h3>
    <span class="incorrect-login"><?php echo $error_msg; ?></span>
<?php if (USE_USERNAME_ADMIN) echo 'Login:<br /><input type="input" name="access_login" /><br />Password:<br />'; ?>
    <input type="password" name="access_password" /><p></p><input class="login-save-btn" type="submit" name="Submit" value="Submit" />&nbsp;&nbsp;&nbsp;<a class="homepage-link" href="index.php">homepage</a>
    <p class="copyright-login">&copy; The Law Firm of Matthew Beach, LLC - All rights reserved</p>
  </form>
  <br />
</div>
</div>
</body>
</html>

<?php
  // stop at this point
  die();
}
}

// user provided password
if (isset($_POST['access_password'])) {

  $login = isset($_POST['access_login']) ? $_POST['access_login'] : '';
  $pass = $_POST['access_password'];
  if (!USE_USERNAME_ADMIN && !in_array($pass, $LOGIN_INFORMATION)
  || (USE_USERNAME_ADMIN && ( !array_key_exists($login, $LOGIN_INFORMATION) || $LOGIN_INFORMATION[$login] != $pass ) ) 
  ) {
    showLoginPasswordProtect("Incorrect password.");
  }
  else {
    // set cookie if password was validated
    setcookie("verify", md5($login.'%'.$pass), $timeout, '/');
    
    // Some programs (like Form1 Bilder) check $_POST array to see if parameters passed
    // So need to clear password protector variables
    unset($_POST['access_login']);
    unset($_POST['access_password']);
    unset($_POST['Submit']);
  }

}

else {

  // check if password cookie is set
  if (!isset($_COOKIE['verify'])) {
    showLoginPasswordProtect("");
  }

  // check if cookie is good
  $found = false;
  foreach($LOGIN_INFORMATION as $key=>$val) {
    $lp = (USE_USERNAME_ADMIN ? $key : '') .'%'.$val;
    if ($_COOKIE['verify'] == md5($lp)) {
      $found = true;
      // prolong timeout
      if (TIMEOUT_CHECK_ACTIVITY_ADMIN) {
        setcookie("verify", md5($lp), $timeout, '/');
      }
      break;
    }
  }
  if (!$found) {
    showLoginPasswordProtect("");
  }

}

?>
