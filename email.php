<html>
<head><title>PHP Mail Sender</title></head>
<body>
	<?php

	$to = "qianyu.liu@mail.mcgill.ca";

	$name = $_POST["Feedback-name"];
	$email = $_POST["Feedback-email"];
	$message = $_POST["Feedback-message"];

	$subject = "Feedback from: $name ($email)";

	// Define variables and set to empty values
	$nameErr = "";
	$emailErr = "";
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		// Check if name is not empty and only contains letters and whitespace
		if (empty($_POST["name"])) {
			$nameErr = "Name is required";
		} else {
			$name = test_input($_POST["name"]);   			
			if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
				$nameErr = "Only letters and white space allowed"; 
			}
		}

		// Check if e-mail address is not empty and is well-formed
		if (empty($_POST["email"])) {
			$emailErr = "Email is required";
		} else {
			$email = test_input($_POST["email"]);    	
			if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
				$emailErr = "Invalid email format"; 
			}
		}

		mail($to, $subject, $message, "Headerz");
		echo "Feedback sent. Thank you!";

	}

	
	?>
</body>
</html>