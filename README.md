# Password Strength Checker

## About The Project

Password Strength Checker is a web-based application developed using HTML, CSS, and JavaScript. This project helps users analyze password strength and generate strong random passwords.

The application provides a simple interface with useful password management features.

## Features

- **Password Strength Analyzer** – Checks password strength.
- **Password Generator** – Generates random 12-character passwords.
- **Show / Hide Password** – Allows users to view or hide passwords.
- **Copy Password** – Copies passwords to the clipboard.
- **Dark Mode** – Switches between light and dark themes.
- **Voice Input** – Allows users to enter passwords using voice input where supported.
- **Password History** – Stores generated passwords in browser local storage.
- **Strength Score** – Displays password strength as a percentage.
- **Suggestions** – Provides suggestions to improve password strength.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser LocalStorage
- Clipboard API
- Web Speech API

## Project Structure

```text
Password-Strength-Checker/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Password Strength Criteria

The application checks five conditions:

1. Minimum 8 characters.
2. At least one uppercase letter.
3. At least one lowercase letter.
4. At least one number.
5. At least one special character.

Each condition adds 20 points to the password score.

## How To Run The Project

1. Download or clone this repository.
2. Open the project folder.
3. Make sure all three files are in the same folder.
4. Open `index.html` in your web browser.
5. Enter a password and click Analyze.
6. Click Generate to create a random password.

## How To Use

1. Enter your password.
2. Click Analyze to check its strength.
3. Click Generate to generate a random password.
4. Click Copy to copy the password.
5. Click Show to reveal or hide the password.
6. Click the moon icon to enable dark mode.
7. Click the history icon to view password history.

## Future Improvements

- Add adjustable password length.
- Improve mobile responsiveness.
- Add more password security checks.
- Improve voice input error handling.
- Improve password history security.

## Security Note

This is an educational frontend project. Generated passwords are currently stored in plain text in browser LocalStorage. Do not use real or sensitive passwords with this application.

## Author
**Gosala Sakunthala**

Frontend Developer | Web Development Enthusiast
Created as a Frontend Web Development Project using HTML, CSS, and JavaScript.

## License

This project is available for educational purposes.
