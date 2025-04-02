
function kasbonvoucher(){
// chat_id = "isi chat_id Anda";
chat_id = "1415639213";
// token = "isi token Anda";
token = "2071961335:AAEdNbKggzXkZ8yXBKgzn2U_BQnwZHWJ0LY";
message = "<b>permintaan kasbon voucher wifi burunuk</b>%0Anama : "+ $("#nama").val() + "%0Aalamat : " + $("#alamat").val() + "%0Ano. hp : " + $("#nomor").val() + "%0Avoucher : " + $("#paket").val() ;
$.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id+"&parse_mode=html");
$("#EmailForm").parent().hide();
$("#confirm").show();
}

function keluhan(){
// chat_id = "isi chat_id Anda";
chat_id = "1415639213";
// token = "isi token Anda";
token = "2071961335:AAEdNbKggzXkZ8yXBKgzn2U_BQnwZHWJ0LY";
message = "<b>Saran dan keluhan wifi burunuk</b>%0Anama : "+ $("#nama1").val() + "%0Ano. hp : " + $("#nomor1").val() + "%0Aisi pesan : " + $("#pesan").val();
$.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id+"&parse_mode=html");
$("#EmailForm").parent().hide();
$("#confirm").show();
}

function registrasi(){
// chat_id = "isi chat_id Anda";
chat_id = "1415639213";
// token = "isi token Anda";
token = "2071961335:AAEdNbKggzXkZ8yXBKgzn2U_BQnwZHWJ0LY";
message = "<b>permintaan pasang wifi burunuk</b>%0Anama : "+ $("#nama2").val() + "%0Aalamat : " + $("#alamat").val() + "%0Ano. hp : " + $("#nomor2").val() + "%0Apaket : " + $("#paket").val();
$.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id+"&parse_mode=html");
$("#EmailForm2").parent().hide();
$("#confirm").show();
}

function aktipasi(){
// chat_id = "isi chat_id Anda";
chat_id = "1415639213";
// token = "isi token Anda";
token = "2071961335:AAEdNbKggzXkZ8yXBKgzn2U_BQnwZHWJ0LY";
message = "<b>permintaan registrasi internet</b>%0Anama : "+ $("#nama3").val() + "%0Aalamat : " + $("#alamat3").val() + "%0Ano. hp : " + $("#nomor3").val() + "%0Apaket : " + $("#paket").val();
$.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id+"&parse_mode=html");
$("#EmailForm3").parent().hide();
$("#confirm").show();
}

function jasaservice(){
// chat_id = "isi chat_id Anda";
chat_id = "1415639213";
// token = "isi token Anda";
token = "2071961335:AAEdNbKggzXkZ8yXBKgzn2U_BQnwZHWJ0LY";
message = "<b>permintaan Jasa service burunuk</b>%0Anama : "+ $("#nama").val() + "%0Aalamat : " + $("#alamat").val() + "%0Ano. hp : " + $("#nomor").val() + "%0A service : " + $("#service").val();
$.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id+"&parse_mode=html");
$("#EmailForm").parent().hide();
$("#confirm").show();
}

    window.intergramId = "1415639213";
    window.intergramCustomizations = {
        titleClosed: 'Chat Live',
        titleOpen: 'vc net',
        introMessage: 'selamat datang !!! ini adalah layanan customer service vc net! silahkan beritahu apa yg dapat kami bantu !!!',
        autoResponse: 'jangan khawatir ! kami akan segera membalas pesan anda',
		noneResponse: 'Terimakasih ! pesan anda sudah kami terima',
        mainColor: "#E91E63", // Can be any css supported color 'red', 'rgb(255,87,34)', etc
        alwaysUseFloatingButton: false // Use the mobile floating button also on large screens
    };
	
	
	