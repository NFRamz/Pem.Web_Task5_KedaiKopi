<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $pesan = htmlspecialchars($_POST['message']);


    $formsubmit_url = "https://formsubmit.co/nframzi051@gmail.com";

    echo "
    <!DOCTYPE html>
    <html lang='id'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Pesan Terkirim - NF_Coffee</title>
        
        <link rel='stylesheet' href='css/main.css'>
        <link rel='stylesheet' href='css/output.css'>
        <script src='https://cdn.tailwindcss.com'></script>
        
    </head>
    <body class='bg-yellow-700/10 text-yellow-950/85'>

        <div class='flex flex-col items-center justify-center h-screen text-center'>
            <h1 class='text-4xl font-bold mb-4 text-yellow-700'>Terima Kasih, $nama!</h1>
            <p class='text-lg text-gray-700 mb-6 max-w-md'>
                Pesan kamu sudah kami terima. Kami akan menghubungimu melalui email:
                <strong>$email</strong>.
            </p>

            <div class='bg-white p-6 rounded-lg shadow-lg max-w-md'>
                <h2 class='text-xl font-bold text-yellow-700 mb-2'>Detail Pesan:</h2>
                <p><strong>Nama:</strong> $nama</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Pesan:</strong> $pesan</p>
            </div>

            <a href='index.html' class='mt-6 inline-block bg-yellow-700 text-white px-6 py-3 rounded-lg hover:bg-yellow-900 transition'>
                Kembali ke Beranda
            </a>
        </div>


        <!-- Form kirim ke FormSubmit -->
        <form id='autoSend' action='$formsubmit_url' method='POST' style='display:none;'>
            <input type='hidden' name='name' value='$nama'>
            <input type='hidden' name='email' value='$email'>
            <input type='hidden' name='message' value='$pesan'>
        </form>
        
        <script>
            setTimeout(() => {
                document.getElementById('autoSend').submit();
            }, 2000);
        </script>

    </body>
    </html>
    ";
} else {
    // Jika user akses langsung tanpa submit form
    header("Location: index.html");
    exit;
}
?>
