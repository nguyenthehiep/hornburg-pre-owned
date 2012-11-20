<?php
$today = date("Y/m/d H:i:s");

$from_name = $assign_array["contact_name"];
$from_mailaddress = $assign_array["contact_email"];
$subject = "Information Request -".$assign_array["contact_name"]." requested more info on a ".$assign_array["year"]." ".$assign_array["make"]." ".$assign_array["model"];

$body = <<< EOF
{$assign_array["contact_name"]} want to ask more information about {$assign_array["year"]} {$assign_array["make"]} {$assign_array["model"]}

[Vehicle Information]

Requested Info: {$assign_array["year"]} {$assign_array["make"]} {$assign_array["model"]}

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
