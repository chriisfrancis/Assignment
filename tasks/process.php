<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $gr = $_POST['gr'];
    $class = $_POST['class'];
    $section = $_POST['section'];
    
    echo "<h2>Student Information</h2>";
    echo "Name: " . htmlspecialchars($name) . "<br>";
    echo "Gr: " . htmlspecialchars($gr) . "<br>";
    echo "Class: " . htmlspecialchars($class) . "<br>";
    echo "Section: " . htmlspecialchars($section) . "<br>";
}
?>