<?php
define('TOTAL','400');
$math=70;
$eng=54;
$kis=69;
$bio=78;
$total= ($math+ $eng + $kis +$bio);
$percentage = ($total*100)/TOTAL;
echo "Your percentage is ".$percentage;
?>