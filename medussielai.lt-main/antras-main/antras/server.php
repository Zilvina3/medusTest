<?php

error_reporting(0);
ini_set('display_errors', 0);


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Max-Age: 3600");
header("Content-Type: application/json; charset=UTF-8");


if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit();
}


$host = 'srv862.hstgr.io';
$db_username = 'u258489123_potato123';
$db_password = 'zZ68352891033300';
$db_name = 'u258489123_medussielai';

try {

    $conn = new mysqli($host, $db_username, $db_password, $db_name);


    if ($conn->connect_error) {
        throw new Exception("Database connection failed: " . $conn->connect_error);
    }


    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $sql = "SELECT * FROM atsiliepimai ORDER BY id DESC";
        $result = $conn->query($sql);

        if ($result) {
            $reviews = $result->fetch_all(MYSQLI_ASSOC);
            echo json_encode(["status" => "success", "reviews" => $reviews]);
        } else {
            throw new Exception("Error retrieving reviews: " . $conn->error);
        }
    }


    elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents("php://input"));

        if (!isset($data->vardas) || !isset($data->komentaras)) {
            throw new Exception("Unable to create review. Data is incomplete.");
        }

        $stmt = $conn->prepare("INSERT INTO atsiliepimai (vardas, komentaras) VALUES (?, ?)");
        $stmt->bind_param("ss", $data->vardas, $data->komentaras);

        if (!$stmt->execute()) {
            throw new Exception("Error: " . $stmt->error);
        }

        $response = [
            "status" => "success",
            "message" => "Review received and stored in database",
            "vardas" => $data->vardas,
            "komentaras" => $data->komentaras
        ];

        echo json_encode($response);
        $stmt->close();
    }


    else {
        throw new Exception("Method not allowed");
    }

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
} finally {
    if (isset($conn) && $conn instanceof mysqli) {
        $conn->close();
    }
}
?>
