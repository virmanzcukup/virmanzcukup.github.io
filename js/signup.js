
function kasbonvoucher(){
// chat_id = "isi chat_id Anda";
no_hp = "xxxxxxxxxxx";
// token = "isi token Anda";
secret= "xxxxxxxxxxxxxxxxxxxxxxx";
message = "*----------------------------------------*%0A%20*===%3E%3EPERMINTAAN%20KASBON%3C%3C===*%0A*----------------------------------------*%0A%0A-%20nama : "+ $("#nama").val() + "%0Aalamat : " + $("#alamat").val() + "%0Ano. hp : " + $("#nomor").val() + "%0Avoucher : " + $("#paket").val() ;
$.get("https://wa/api/sendWA?to="+no_hp+"&secret="+secret+"&msg="+message+"&parse_mode=html");
$("#EmailForm").parent().hide();
$("#confirm").show();
}

function keluhan(){
// chat_id = "isi chat_id Anda";
no_hp = "xxxxxxxxxxx";
// token = "isi token Anda";
secret= "xxxxxxxxxxxxxxxxxxxxxxx";
message = "<b>Saran dan keluhan wifi burunuk</b>%0Anama : "+ $("#nama1").val() + "%0Ano. hp : " + $("#nomor1").val() + "%0Aisi pesan : " + $("#pesan").val();
$.get("https://wa/api/sendWA?to="+no_hp+"&secret="+secret+"&msg="+message+"&parse_mode=html");
$("#EmailForm").parent().hide();
$("#confirm").show();
}

function registrasi(){
// chat_id = "isi chat_id Anda";
no_hp = "xxxxxxxxxxx";
// token = "isi token Anda";
secret= "xxxxxxxxxxxxxxxxxxxxxxx";
message = "*----------------------------------------*%0A%20*===%3E%3EREGISTRASI%20MEMBER%3C%3C===*%0A*----------------------------------------*%0A%0A-%20nama : "+ $("#nama2").val() + "%0Aalamat : " + $("#alamat2").val() + "%0Ano. hp : " + $("#nomor2").val() + "%0Apaket : " + $("#paket2").val();
$.get("https://wa/api/sendWA?to="+no_hp+"&secret="+secret+"&msg="+message+"&parse_mode=html");
$("#EmailForm2").parent().hide();
$("#confirm").show();
}

function aktipasi(){
// chat_id = "isi chat_id Anda";
no_hp = "xxxxxxxxxxx";
// token = "isi token Anda";
secret= "xxxxxxxxxxxxxxxxxxxxxxx";
message = "%C2%AE%EF%B8%8F%20Registrasi%20Pemasangan%20BRC%20%F0%9F%9B%9C%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%0A%F0%9F%91%A4%20Nama : "+ $("#nama3").val() + "%0A%0A%F0%9F%93%8C%20Alamat : " + $("#alamat3").val() + "%0A%0A%F0%9F%93%B2%20No.%20Hp : " + $("#nomor3").val() + "%0A%0A%F0%9F%8E%81%20Paket : " + $("#paket3").val();
$.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id+"&parse_mode=html");
$("#EmailForm3").parent().hide();
$("#confirm").show();
}

function pembayaran(){
// chat_id = "isi chat_id Anda";
no_hp = "xxxxxxxxxxx";
// token = "isi token Anda";
secret= "xxxxxxxxxxxxxxxxxxxxxxx";
message = "%F0%9F%8F%A6%20Konfirmasi%20Pembayaran%20%F0%9F%8F%A6%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%0A%F0%9F%91%A4%20Nama: "+ $("#nama4").val();
$.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id+"&parse_mode=html");
$("#EmailForm4").parent().hide();
$("#confirm").show();
}

function jasaservice(){
// chat_id = "isi chat_id Anda";
no_hp = "xxxxxxxxxxx";
// token = "isi token Anda";
secret= "xxxxxxxxxxxxxxxxxxxxxxx";
message = "<b>permintaan Jasa service burunuk</b>%0Anama : "+ $("#nama5").val() + "%0Aalamat : " + $("#alamat5").val() + "%0Ano. hp : " + $("#nomor5").val() + "%0A service : " + $("#service5").val();
$.get("https://wa/api/sendWA?to="+no_hp+"&secret="+secret+"&msg="+message+"&parse_mode=html");
$("#EmailForm").parent().hide();
$("#confirm").show();
}

    window.intergramId = "xxxxxxxxxx";
    window.intergramCustomizations = {
        titleClosed: 'Chat Live',
        titleOpen: 'vc net',
        introMessage: 'selamat datang !!! ini adalah layanan customer service vc net! silahkan beritahu apa yg dapat kami bantu !!!',
        autoResponse: 'jangan khawatir ! kami akan segera membalas pesan anda',
		noneResponse: 'Terimakasih ! pesan anda sudah kami terima',
        mainColor: "#5b0785", // Can be any css supported color 'red', 'rgb(255,87,34)', etc
        alwaysUseFloatingButton: false // Use the mobile floating button also on large screens
    };


<style>
/* WhatsApp-style tweak */
.intergram-container {
  border-radius: 15px !important;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3) !important;
  font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
}

.intergram-chat-header {
  background-color: #075E54 !important; /* WhatsApp green */
  color: white !important;
  font-weight: bold;
}

.intergram-chat-msg {
  border-radius: 10px;
  background-color: #dcf8c6 !important;
  padding: 8px;
  margin: 5px 0;
  font-size: 14px;
  max-width: 90%;
}

.intergram-chat-msg.user {
  background-color: #fff !important;
  align-self: flex-end;
}
</style>
