<?php
// getSensorData.php

// Receive sensor data from Arduino
$payload = file_get_contents("php://input");
$data = json_decode($payload, true);

// Extract temperature and hydrogen values
$temperature = $data['temperature'];
$hydrogen = $data['hydrogen'];

// Return sensor data as JSON
$response = [
    'temperature' => $temperature,
    'hydrogen' => $hydrogen
];

header('Content-Type: application/json');
echo json_encode($response);
?>
