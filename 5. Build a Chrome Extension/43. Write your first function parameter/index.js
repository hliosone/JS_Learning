const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
const sentence = "Welcome back"
function greetUser(greeting) {
    welcomeEl.textContent = greeting + ", Stan 👋"
}

greetUser(sentence)