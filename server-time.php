<?php
//date_default_timezone_set('America/Denver'); // MDT

$info = getdate();
$date = $info['mday'];
$month = $info['mon'];
$year = $info['year'];
$hour = $info['hours'];
$min = $info['minutes'];
$sec = $info['seconds'];

$current_date = "The server date is: $month.$date.$year at $hour:$min:$sec";

echo "$current_date";
?>