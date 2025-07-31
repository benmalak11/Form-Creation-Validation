document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    form.addEventListener('sumbit', function(event {
        event.preventDefault();
    }
    document.getElementById('form-feedback');
    const usernameInput = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
      if (usernameInput.value.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long.';
        return;
      } else {
        usernameError.textContent = '';
      }
    const usernameInput = document.getElementById('email');
    const usernameInput = document.getElementById('password');
    Input.value = Input.value.trim();

    const validationInput = () => {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        let messages = ['username is requerde', 'email is requerde', 'password is requerde'];
        let push = [];
        let isValid = [];
        if usernameValue == '' {
            setError(username, 'username is requerde');
        }
        else if { 

        }
    }

})