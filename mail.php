<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

	$name = $_POST['name_user'];
	$name_user_calc = $_POST['name_user_calc'];
	$phone = $_POST['phone_user'];
	$phone_calc = $_POST['phone_user_calc'];
	$width = $_POST['width'];
	$height = $_POST['height'];
	$color = $_POST['color'];
	$comment = $_POST['comment'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'ledstrokka.mail@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Ae)L9Oa%2'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('ledstrokka.mail@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('ledstrokka@gmail.com');     // Кому будет уходить письмо  
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

		if($color==8){
		$color = 'красный ';
	} else if ($color==9){
		$color = 'Зелений, синий, желтий, белий ';
	} else if ($color==15){
		$color = 'RGB';
	}


	if($phone_calc==""){

	$mail->Subject = 'Оставил заявку на обратный звонок LED ';
	$mail->Body    = ' Оставил заявку на обратный звонок - <b>' . $name . ' </b>  <br> Его номер телефона - <b> ' . $phone .  '</b>';
	$mail->AltBody = '';


	} else if($comment==''){


	$mail->Subject = 'Заказ LED';
	$mail->Body    = ' Сделал заказ - <b>' . $name_user_calc . ' </b>  <br> Его номер телефона - <b> ' . $phone_calc .  '</b> <br> <br>Ширина <b>' .$width.'</b> <br>Высота  <b>' .$height.'</b> <br>Цвет <b>'.$color.'</b> <br><br> Коментарий не оставил. ';
	$mail->AltBody = '';

	
	}  else {
			$mail->Subject = 'Заказ LED';
	$mail->Body    = ' Сделал заказ - <b>' . $name_user_calc . ' </b>  <br> Его номер телефона - <b> ' . $phone_calc .  '</b> <br> <br>Ширина <b>' .$width.'</b> <br>Высота  <b>' .$height.'</b> <br>Цвет <b>'.$color.'</b> <br><br> Коментарий  - <b>'. $comment . '</b>';
	$mail->AltBody = '';
	}

if(!$mail->send()) {
    	echo ' Ошибка ';

} else {
   echo ' Удачно отправлено ';
}
?>