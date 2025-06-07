<?php
$img = $_GET['img'] ?? '';
$ip = $_SERVER['REMOTE_ADDR'];
$ua = $_SERVER['HTTP_USER_AGENT'];

$details = json_decode(file_get_contents("https://ipapi.co/$ip/json/"), true);

$log = "IP: $ip | País: " . ($details['country_name'] ?? 'desconhecido') .
       " | Cidade: " . ($details['city'] ?? 'desconhecida') .
       " | ISP: " . ($details['org'] ?? '---') .
       " | UA: $ua\n";

file_put_contents("logs.txt", $log, FILE_APPEND);

if (file_exists("uploads/$img")) {
    header("Content-Type: image/jpeg");
    readfile("uploads/$img");
} else {
    echo "Imagem não encontrada.";
}
?>
