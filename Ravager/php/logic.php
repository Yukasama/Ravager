<?php

//You'll need a local host to actually send mails to your inbox

if (isset($_POST["submit"])) {
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $mail = $_POST["mail"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $myEmail = "youremail@random.net";  //Gmail Addresses block these type of mails
    $header = "From: ".$mail;
    $text = "Received an E-mail from your Ravager Website. It was sent from
            ".$firstname." ".$lastname.".\n\n".$message;

    mail($myEmail, $subject, $text, $header);
    header("Location: index.html?mailsent");
}