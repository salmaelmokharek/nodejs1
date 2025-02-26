const generatePassword = require('password-generator');
function generatepwd() {
    const password = generatePassword.generate({
        length: 12,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true
    })
    console.log("Generated Password: ", password);
}
generatepwd();