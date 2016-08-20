<html>
<head><title>PHP Mail Sender</title></head>
<body>
	<?php

	$to = 'chianyu.liu@outlook.com'
	$name = $HTTP_POST_VARS['Feedback-name'];
	$email = $HTTP_POST_VARS['Feedback-email'];
	$message = $HTTP_POST_VARS['Feedback-message'];
var_dump($name);
	die();
	?>
</body>
</html>