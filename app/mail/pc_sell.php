<?php
$today = date("Y/m/d H:i:s");

$from_name = $assign_array["contact_name"];
$from_mailaddress = $assign_array["contact_email"];
$subject = "Sell Your Vehicle -".$assign_array["contact_name"]." wants to sell their vehicle!";

$body = <<< EOF
{$assign_array["contact_name"]} wants to sell their vehicle!

[Vehicle Information]

Vehicle Info: {$assign_array["year"]} {$assign_array["make"]} {$assign_array["model"]}
Vehicle Color: {$assign_array["color"]}
Vehicle Mileage: {$assign_array["Mileage"]}
Vehivle Options: {$assign_array["options"]}

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
