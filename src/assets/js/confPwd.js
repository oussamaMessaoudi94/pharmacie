function confPwd() {
    $('#password, #confirm_password').on('keyup', function () {
        if ($('#password').val() == $('#confirm_password').val()) {
          $('#message').html('Matching').css('color', 'green');
        } else 
          $('#message').html('password not confirme').css('color', 'red');
      });
}