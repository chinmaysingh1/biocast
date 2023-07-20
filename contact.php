<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Email setup
  $to = "thebiocastpodcast@gmail.com"; // Replace this with your email address
  $subject = "Contact Us Form Submission";
  $headers = "From: $name <$email>";

  // Send the email
  $mail_sent = mail($to, $subject, $message, $headers);

  if ($mail_sent) {
    echo "<p>Thank you for your message. We will get back to you soon!</p>";
  } else {
    echo "<p>Oops! Something went wrong. Please try again later.</p>";
  }
}
?>