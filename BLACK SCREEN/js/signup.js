
function kasbonvoucher(){
// chat_id = "isi chat_id Anda";
chat_id = "xxxxxxxxxxx";
// token = "isi token Anda";
token = "xxxxxxxxxxxxxxxx";
message = "<b>permintaan kasbon voucher wifi sukarame</b>%0Anama : "+ $("#nama").val() + "%0Aalamat : " + $("#alamat").val() + "%0Ano. hp : " + $("#nomor").val() + "%0Avoucher : " + $("#paket").val() ;
$.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id+"&parse_mode=html");
$("#EmailForm").parent().hide();
$("#confirm").show();
}

function keluhan(){
// chat_id = "isi chat_id Anda";
chat_id = "xxxxxxxxxxxx";
// token = "isi token Anda";
token = "xxxxxxxxxxxxxxxxxxxxxx";
message = "<b>Saran dan keluhan wifi sukarame</b>%0Anama : "+ $("#nama1").val() + "%0Ano. hp : " + $("#nomor1").val() + "%0Aisi pesan : " + $("#pesan").val();
$.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id+"&parse_mode=html");
$("#EmailForm").parent().hide();
$("#confirm").show();
}

function registrasi(){
// chat_id = "isi chat_id Anda";
chat_id = "xxxxxxxxxxx";
// token = "isi token Anda";
token = "xxxxxxxxxxxxxxxxxxx";
message = "<b>permintaan pasang wifi sukarame</b>%0Anama : "+ $("#nama2").val() + "%0Aalamat : " + $("#alamat").val() + "%0Ano. hp : " + $("#nomor2").val() + "%0Apaket : " + $("#paket").val();
$.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id+"&parse_mode=html");
$("#EmailForm2").parent().hide();
$("#confirm").show();
}

function jasaservice(){
// chat_id = "isi chat_id Anda";
chat_id = "xxxxxxxxxxxxxx";
// token = "isi token Anda";
token = "xxxxxxxxxxxxxxxxxxxxx";
message = "<b>permintaan Jasa service sukarame</b>%0Anama : "+ $("#nama").val() + "%0Aalamat : " + $("#alamat").val() + "%0Ano. hp : " + $("#nomor").val() + "%0A service : " + $("#service").val();
$.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id+"&parse_mode=html");
$("#EmailForm").parent().hide();
$("#confirm").show();
}

    window.intergramId = "xxxxxxxxxxxxxx";
    window.intergramCustomizations = {
        titleClosed: 'Chat Live',
        titleOpen: 'vc net',
        introMessage: 'selamat datang !!! ini adalah layanan customer service vc net! silahkan beritahu apa yg dapat kami bantu !!!',
        autoResponse: 'jangan khawatir ! kami akan segera membalas pesan anda',
		noneResponse: 'Terimakasih ! pesan anda sudah kami terima',
        mainColor: "#E91E63", // Can be any css supported color 'red', 'rgb(255,87,34)', etc
        alwaysUseFloatingButton: false // Use the mobile floating button also on large screens
    };
	
	
	
