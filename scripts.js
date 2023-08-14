const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
function getPasswordLength() {
    return document.querySelector("#length-input").value;
}
function getRandomCharacter() {
    let randomNumber = Math.floor(Math.random() * characters.length)
    return characters[randomNumber];
};
const passwordText = document.querySelector("#password-button");
document.querySelector("#generate-button").addEventListener("click", function () {
    function generateRandomPassword() {
        let randomPassword = ""
        for (let i = 0; i < getPasswordLength(); i++) {
            randomPassword += getRandomCharacter()
        }
        return randomPassword
    };
    const password = generateRandomPassword();
    passwordText.textContent = password;
    passwordText.classList.add("password-generated");
});
document.querySelector("#copy-button").addEventListener("click", function (event) {
    navigator.clipboard.writeText(passwordText.textContent).then(function () {
        alert("Copied!")
    });
});