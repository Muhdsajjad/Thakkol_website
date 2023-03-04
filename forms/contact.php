<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // Get form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $company = $_POST['company'];
  $location = $_POST['location'];
  $find_us = $_POST['find_us'];
  $interest = $_POST['interest'];
  $message = $_POST['message'];

  // Validate input data
  if (empty($name) || empty($email) || empty($phone) || empty($company) || empty($location) || empty($find_us) || empty($interest) || empty($message)) {
    echo "Please fill in all the fields.";
    exit();
  }

  // Format email message
  $subject = "New message from $name";
  $body = "Name: $name\n";
  $body .= "Email: $email\n";
  $body .= "Phone: $phone\n";
  $body .= "Company: $company\n";
  $body .= "Location: $location\n";
  $body .= "How did you find us?: $find_us\n";
  $body .= "Interested in: $interest\n";
  $body .= "Message: $message\n";

  // Send email
  $to = "tmthakkol@gmail.com"; // Replace with your own email address
  $headers = "From: $name <$email>";
  if (mail($to, $subject, $body, $headers)) {
    echo "Your message has been sent. Thank you!";
  } else {
    echo "There was an error sending your message. Please try again later.";
  }

} else {
  echo "Invalid request method.";
  exit();
}

?>
