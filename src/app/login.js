const usersDatabase = [
    { username: "felhasznalo1", password: "jelszo1", name: "Első Felhasználó" },
    { username: "felhasznalo2", password: "jelszo2", name: "Második Felhasználó" },
];

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username = usernameInput.value;
    const password = passwordInput.value;

    const user = usersDatabase.find(user => user.username === username && user.password === password);

    if (user) {
        alert(`Sikeres bejelentkezés! Üdv, ${user.name}!`);
        // Itt további műveleteket végezhet, például átirányíthatja a felhasználót egy másik oldalra.
        const ujOldalURL = "/src/app/first.html"
            location.href= ujOldalURL;
    } else {
        alert('Sikertelen bejelentkezés. Hibás felhasználónév vagy jelszó.');
    }

    // Töröljük a jelszót az űrlapból
    passwordInput.value = '';
});