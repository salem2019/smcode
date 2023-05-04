var telegram_bot_id = "6021784843:AAFXJpiXab9kq2nOEv_Zp-pe7fPPb73FeXY";
var chat_id =722250396;
var u_name,email;
var ready = function(){
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;


    message = "Name:\n " + u_name + "\nEmail: \n" + email ;
};


var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    return false;
};



document.getElementById("btn").addEventListener("click", function(event) {
    var form = document.getElementById("form");
    var inputs = form.getElementsByTagName("input");
    var filledOut = true;
    for (var i = 0; i < inputs.length; i++) {
      if (!inputs[i].value) {
        filledOut = false;
        break;
      }
    }
    if (filledOut) {
      Swal.fire({
        icon: 'success',
        title: 'Form submitted successfully!',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Please fill out all form fields.',
        showConfirmButton: false,
        timer: 1500
      })
      event.preventDefault();
    }
  });
  