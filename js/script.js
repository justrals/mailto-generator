let baseLink = 'mailto:';
let output = document.getElementById('output');
let form = document.querySelector('form');

output.textContent = baseLink;

form.addEventListener('change', function() {
    const email = document.getElementById('email').value;
    output.textContent = `${baseLink}${email}`;
});

