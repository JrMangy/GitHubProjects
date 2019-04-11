$(document).ready(function(){
    $('#submit').click(function(){
        const name = $('#name');
        const email = $('#email');
        const phoneNumber = $('#phone');
        const message = $('#message');
        
        const array = [name, email, phoneNumber];
       
        for(i=0; i<array.length;i++){
            if (array[i].val() === "") {
                $('#missing').text("Please Fill Out Required Fields").addClass('warning');
                array[i].addClass('warning').css('background-color', 'crimson').click(function(){
                    $(this).css('background-color','white');
                });
            } else {
                array[i].removeClass('warning');
                $('#missing').removeClass('warning')
            }
        }
        if (!$('#missing').hasClass('warning')) {
            $('#form').remove();
            $("#pre-form h2").text("Thanks for your feedback!")
        }
    });
});
