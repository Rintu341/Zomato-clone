let signInBtn = document.querySelector('.signinbtn')
let signUpBtn = document.querySelector('.signupbtn')
let nameField = document.querySelector('.namefield')
let title = document.querySelector('.title')
let underline = document.querySelector('.underline')
let text = document.querySelector('.text');


signInBtn.addEventListener('click',()=>
{
    nameField.style.maxHeight = '0';
    title.innerHTML = "Sign In";
    text.innerHTML = "Loat Password";
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)'
})
signUpBtn.addEventListener('click',()=>
{
    nameField.style.maxHeight = '60px';
    title.innerHTML = "Sign Up";
    text.innerHTML = "Possword Suggestions";
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0px)'
})

function handleFormDisplay() {
    const urlParams = new URLSearchParams(window.location.search);
    const formType = urlParams.get('form');

    if (formType === 'login') {
        // Display login form
        nameField.style.maxHeight = '0';
        title.innerHTML = "Sign In";
        text.innerHTML = "Forgot Password";
        signUpBtn.classList.add('disable');
        signInBtn.classList.remove('disable');
        underline.style.transform = 'translateX(35px)';
    } else if (formType === 'signup') {
        // Display signup form
        nameField.style.maxHeight = '60px';
        title.innerHTML = "Sign Up";
        text.innerHTML = "Password Suggestions";
        signUpBtn.classList.remove('disable');
        signInBtn.classList.add('disable');
        underline.style.transform = 'translateX(0px)';
    }
}

// Call the function on page load
handleFormDisplay();

 // JavaScript to handle cancel icon click
 document.querySelector('.cancel-icon').addEventListener('click', function() {
    window.location.href = 'index.html'; // Replace with the URL you want to redirect to
});

