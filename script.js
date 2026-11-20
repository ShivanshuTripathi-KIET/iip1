function changeTheme() {
    document.body.classList.toggle("dark");
    var btn = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark")) {
        btn.innerText = "☀️ Light Mode";
    } else {
        btn.innerText = "🌙 Dark Mode";
    }
}

function checkForm(event) {
    event.preventDefault();

    var name = document.getElementById("nameInput").value.trim();
    var email = document.getElementById("emailInput").value.trim();
    var msg = document.getElementById("msgInput").value.trim();
    var status = document.getElementById("formStatus");

    if (name === "" || email === "" || msg === "") {
        status.style.color = "#dc2626";
        status.innerText = "Please fill in all fields.";
    } else if (!email.includes("@") || !email.includes(".")) {
        status.style.color = "#dc2626";
        status.innerText = "Please enter a valid email address.";
    } else {
        status.style.color = "#0d9488";
        status.innerText = "Thank you, " + name + "! Your message has been sent.";
        document.getElementById("contactForm").reset();
    }
}