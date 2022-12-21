<?php

include('password_protect.php');

// Database file, i.e. file with real data
$data_file = USERS_LIST_FILE;

// Database definition file. You have to describe database format in this file.
// See flatfile.inc.php header for sample.
$structure_file = 'users.def';

// Fields delimiter
$delimiter = ',';

// Number of lines to skip
$skip_lines = 1;

/////////////////////////////////////////////////////////////////////////
//////////////////  END OF SETTINGS
/////////////////////////////////////////////////////////////////////////




// run flatfile manager
include ('flatfile.inc.php');

?>
