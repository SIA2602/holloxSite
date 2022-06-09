
let visible = true
$("#button-mobile").click( function() {
    visible = !visible
    if(!visible) {
        $("#button-login").css({ display: "none" })
        $("#button-login").css({ visibility: "hidden" })
    }
    else {
        $("#button-login").css({ display: "block" })
        setTimeout(hiddenElement, 700)
    }
})

function hiddenElement() {
    $("#button-login").css({ visibility: "visible" })
}

$(".architeture").hover( function() {
    $(".background-gif").css('background-image', 'url(../../assets/img/background02.gif)')
    $("#home-text-desktop").css({ display: "none" })
    $("#home-text-desktop-architeture").css({ display: "block", visibility: "visible" })
    $("#home-text-desktop-industry").css({ display: "none", visibility: "hidden" })
})

$(".industry").hover( function() {
    $(".background-gif").css('background-image', 'url(../../assets/img/background03.gif)')
    $("#home-text-desktop").css({ display: "none" })
    $("#home-text-desktop-architeture").css({ display: "none", visibility: "hidden" })
    $("#home-text-desktop-industry").css({ display: "block", visibility: "visible" })
})

var form = $('#form'),
    email = $('#email'),
    subject = $('#subject'),
    message = $('#message'),
    submit = $("#submit");

submit.on('click', function(e) {
    e.preventDefault();
        if(validate()) {
            $.ajax({
            type: "POST",
            url: "mailer.php",
            data: form.serialize(),
            dataType: "json"
            }).done(function(data) {
            if(data.success) {
                email.val('');
                subject.val('');
                message.val('');
            } else {
                console.log('Could not send mail! Sorry!');
            }
        });
    }
});

function validate() {
    var valid = true;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if(!regex.test(email.val())) {
      email.css('border-color', 'red');
      valid = false;
    }
    if($.trim(subject.val()) === "") {
      subject.css('border-color', 'red');
      valid = false;
    }
    if($.trim(message.val()) === "") {
      message.css('border-color', 'red');
      valid = false;
    }
    
    return valid;
}