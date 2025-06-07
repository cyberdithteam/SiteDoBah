<?php
if (isset($_FILES['image'])) {
    $name = uniqid() . ".jpg";
    move_uploaded_file($_FILES['image']['tmp_name'], "uploads/$name");

    $url = "https://seusite.com/view.php?img=$name"; // Altere para seu domínio

    echo "<p>Imagem enviada com sucesso!</p>";
    echo "<p>Link para compartilhar:</p>";
    echo "<code>$url</code>";
} else {
    echo "Erro ao enviar imagem.";
}
?>
