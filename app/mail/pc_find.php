<?php
$today = date("Y/m/d H:i:s");

$from_name = $assign_array["contact_name"];
$from_mailaddress = $assign_array["contact_email"];
$subject = "Find a Vehicle -".$assign_array["contact_name"]." is looking for a vehicle!";

$body = <<< EOF
{$assign_array["contact_name"]} is looking for a vehicle!

[Vehicle Information]

Vehicle Info: {$assign_array["year"]} {$assign_array["make"]} {$assign_array["model"]}
Desired Color: {$assign_array["color"]}
Desired Mileage: {$assign_array["Mileage"]}
Desired Options: {$assign_array["options"]}

[Contact Information]

Name: {$assign_array["contact_name"]}
Email: {$assign_array["contact_email"]}
Location: {$assign_array["contact_city"]} {$assign_array["contact_state"]}
Phone Number: {$assign_array["contact_phone"]}

[Comments]
{$assign_array["comment"]}

[Time for apllication]
{$today}

EOF;

?>
