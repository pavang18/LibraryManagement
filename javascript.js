// Show Password
function Password(){
    const pass = document.getElementById('password');
    const showPass = document.getElementById('showPassword');
    if(pass.type === 'password'){
        pass.type = 'text';
    }
    else{
        pass.type = 'password';
    }
}

// Submit button and Loader
function submitForm() {
    var submitButton = document.getElementById('submitButton');
    var loadingSpinner = document.getElementById('loadingSpinner');
  
    submitButton.disabled = true; 
    submitButton.innerText = 'Submitting...'; 
    loadingSpinner.classList.remove('hidden');
  
    setTimeout(function() {
      
      submitButton.disabled = false; 
      submitButton.innerText = 'Submit'; 
      loadingSpinner.classList.add('hidden');
    }, 2000);

    sessionStorage.setItem('isSignedIn', 'true');
    window.location.href = "home.html";
  }



  
  