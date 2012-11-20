<?php
$today = date("Y/m/d H:i:s");

$from_name = $assign_array["contact_name"];
$from_mailaddress = $assign_array["contact_email"];
$subject = "Test Drive - ".$assign_array["contact_name"]." is interested in a Test Drive!";

$body = <<< EOF
{$assign_array["contact_name"]} is interested in a Test Drive!

[Appointment Information]

{$assign_array["contact_name"]} want to be arranged a test-drive schedule at {$assign_array["schedule_time"]} {$assign_array["schedule_date"]}

[Contact Information]

Name: {$assign_array["contact_name"]}
Email: {$assign_array["contact_email"]}
Phone Number: {$assign_array["contact_phone"]}

[Comments]
{$assign_array["comment"]}

[Time for apllication]
{$today}

EOF;

?>
