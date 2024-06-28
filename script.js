function validateForm() {
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    passwordError.innerHTML = ''; 

    const errors = [];

    if (password.length < 8) {
        errors.push("Пароль должен содержать минимум 8 символов.");
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Пароль должен содержать хотя бы одну строчную букву.");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Пароль должен содержать хотя бы одну заглавную букву.");
    }
    if (!/\d/.test(password)) {
        errors.push("Пароль должен содержать хотя бы одну цифру.");
    }
    if (!/[@$!%*?&]/.test(password)) {
        errors.push("Пароль должен содержать хотя бы один специальный символ (@, $, !, %, *, ?, &).");
    }

    if (errors.length > 0) {
        errors.forEach(error => {
            const errorElement = document.createElement("div");
            errorElement.textContent = error;
            passwordError.appendChild(errorElement);
        });
        return false;
    } else {
        alert("Спасибо! Данные отправлены!");
        return true;
    }
}
