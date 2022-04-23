
let visible = true
$("#button-mobile").click( function() {
    visible = !visible
    if(!visible) {
        $("#button-login").css({ display: "none" });
    }
    else {
        $("#button-login").css({ display: "block" });
    }
})