$(document).ready(function () {
    $('#submit').click(function () {
        const name = $('#name');
        const email = $('#email');
        const phone = $('#phone');
        const required = [name, email, phone];
        for (i = 0; i < required.length; i++) {
            if (required[i].val() === "") {
                $('#missing').text("Please fill out required fields!").addClass('warning');
                //$("label").css("color", "red");
                required[i].css('background-color', 'red').addClass('warning').click(function(){
                    $(this).css('background-color','white');
            });
        }
            else { $('#missing').removeClass('warning'); required[i].removeClass('warning') };
        }
        if ($("label").attr("warning") === false) {
            $("#form").remove();
            $("h2").html("Thanks for your feedback");
        }
    })
});