
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