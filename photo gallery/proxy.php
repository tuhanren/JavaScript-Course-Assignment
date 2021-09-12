<?php
$result = "dataimage.json";
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($result);
?>