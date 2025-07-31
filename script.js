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

        let messages = [];
        let isValid = true;
        
        if (username.length < 3) {
            isValid = false;
            messages.push ("Username must be at least 3 characters long.");
        }
        if (!email.includes ("@") || !email.includes (".")) {
            isValid = false;
            messages.push ("Please enter a valid email address.");
        }
        if (password.length < 8) {
            isValid = false;
            messages,push ("Password must be at least 8 characters long.");
        }
    }
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // Green
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"; // Red
    }

})