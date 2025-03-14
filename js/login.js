
    var username = document.login.username;
    var password = document.login.password;
    var luser = document.getElementById("luser");
    var lpass = document.getElementById("lpass");
    var btnmem = document.getElementById("btnmem");
    var btnvcr = document.getElementById("btnvcr");

    // set password = username
    function setpass() {
      var user = username.value
      password.value = user;
    }

    username.onkeyup = setpass;


    // change to voucher mode
    function voucher() {
      username.focus();
      username.onkeyup = setpass;
      username.placeholder = "KODE VOUCHER";
      password.type = "hidden";
      password.value = username.value;
    }

    // change to member mode
    function member() {
      username.focus();
      username.onkeyup = "";
      username.placeholder = "USERNAME";
      password.type = "PASSWORD";
      password.value = "";

    }

    //-->