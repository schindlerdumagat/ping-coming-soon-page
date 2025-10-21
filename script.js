const form = document.querySelector(".form");
const emailFeedback = document.querySelector(".form__feedback");

const validEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Extracting data from form
    const formData = new FormData(e.target);
    const { email } = Object.fromEntries(formData.entries());

    form.classList.remove("form--error");
    form.classList.remove("form--success");

    const emailError = validateEmail(email);

    if (emailError) {

        // To do if email is invalid
        form.classList.add("form--error");
        emailFeedback.textContent = emailError;
    } else {

        // To do if email is valid
        form.classList.add("form--success");
        emailFeedback.textContent = "Email is submitted";
    }
})

// Checks email input errors
function validateEmail(email) {

    let emailError = "";

    if (email.length === 0) {
        emailError = "Whoops! It looks like you forgot to add your email";
    } else if (!validEmailRegex.test(email)) {
        emailError = "Please provide a valid email address";
    }

    return emailError;
}
