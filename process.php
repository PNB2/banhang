<?php
$servername = "localhost";
$username = "root";
$password = "300475";
$dbname = "contactdb";

// connect
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Lỗi kết nối: " . $conn->connect_error);
}

// Get data from form
$name = $_POST['name'] ?? '';
$phone = $_POST['phone'] ?? '';
$email = $_POST['email'] ?? '';
$gender = $_POST['gender'] ?? '';
$note = $_POST['note'] ?? '';

// Prepare SQL statement
$stmt = $conn->prepare("INSERT INTO contacts (name, phone, email, gender, note) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $name, $phone, $email, $gender, $note);

// execute
if ($stmt->execute()) {
    echo "Đã lưu thành công!";
} else {
    echo "Lỗi: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
