<?php
$today = date("Y/m/d H:i:s");

$from_name = $assign_array["contact_name"];
$from_mailaddress = $assign_array["contact_email"];
$subject = $assign_array["contact_name"]." wants you to check out this ".$assign_array["year"]." ".$assign_array["make"]." ".$assign_array["model"];

$body = <<< EOF
{$assign_array["contact_name"]} wants you to check out a vehicle!

[Vehicle Information]

Vehicle Info: {$assign_array["year"]} {$assign_array["make"]} {$assign_array["model"]}
Vehicle Link: {$assign_array["link"]}

[Your Friend Information]
Name: {$assign_array["contact_name"]}
Email: {$assign_array["contact_email"]}
Phone Number: {$assign_array["contact_phone"]}

[Comments]
{$assign_array["comment"]}

[Time for apllication]
{$today}

EOF;

?>
