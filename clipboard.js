function copyToClipboard() {
    let passwordInput = document.getElementById("password");
    let password = passwordInput.value;
    navigator.clipboard.writeText(password)
        .then(function () {
        // Show success notification
        let notification = document.createElement("p");
        notification.textContent = "✓ Password generated successfully!";
        notification.classList.add("success-notification");
        passwordInput.parentNode.insertBefore(notification, passwordInput.nextSibling);
        // Remove success notification after 1.5 seconds
        setTimeout(function () {
            notification.classList.add("fade-out");
            setTimeout(function () {
                notification.remove();
            }, 500);
        }, 1500);
    })
        .catch(function (error) {
        // Show error notification
        let notification = document.createElement("p");
        notification.textContent = "✗ Password generation unsuccessful...";
        notification.classList.add("error-notification");
        passwordInput.parentNode.insertBefore(notification, passwordInput.nextSibling);
        console.error("Failed to copy password to clipboard:", error);
        // Remove error notification after 1.5 seconds
        setTimeout(function () {
            notification.classList.add("fade-out");
            setTimeout(function () {
                notification.remove();
            }, 500);
        }, 1500);
    });
}
