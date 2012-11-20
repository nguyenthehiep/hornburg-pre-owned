<?php
$today = date("Y/m/d H:i:s");

$from_name = $assign_array["contact_name"];
$from_mailaddress = $assign_array["contact_email"];
$subject = "Contact Information";

$body = <<< EOF
{$assign_array["contact_name"]} want to ask more information.

[Contact Information]

Name: {$assign_array["contact_name"]}
Email: {$assign_array["contact_email"]}
Phone Number: {$assign_array["contact_phone"]}

[Comments]
{$assign_array["comment"]}

[Contact Time]
{$today}

EOF;

?>
