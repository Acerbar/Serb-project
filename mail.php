<?php

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';


$json = file_get_contents('php://input');
$data = json_decode($json, true); 

$name = $data['name'];
$tel = $data['tel'];
$email = $data['email'];
$textarea = $data['textarea'];

$title = 'Заявка с сайта Alatau';
$body = '<p>Имя: <strong>'.$name.'</strong></p>'.
        '<p>Телефон: <strong>'.$tel.'</strong></p>'.
        '<p>E-mail: <strong>'.$email.'</strong></p>'.
        '<p>Текст обращения: <strong>'.$textarea.'</strong></p>';


$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = 'UTF-8';
  $mail->SMTPAuth   = true;

 
  $mail->Host       = 'smtp.yandex.ru'; 
  $mail->Username   = 'acergood1'; 
  $mail->Password   = 'lwlusdudvpcttpzl'; 
  $mail->SMTPSecure = 'SSL';
  $mail->Port       = 465;

  $mail->setFrom('acergood1@yandex.ru', 'Заявка с сайта Alatau'); 

 
  $mail->addAddress('acergood1@yandex.ru');


  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send('d');


  echo ('Сообщение успешно отправлено');

} catch (Exception $e) {
  header('HTTP/1.1 400 Bad Request');
  echo('Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}');
}
