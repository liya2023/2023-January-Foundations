$(function() {
    $("#contactform").submit(function (e) {
        $("#contactus").hide();
        $("#submitted").show();
        return false;
    });
});

