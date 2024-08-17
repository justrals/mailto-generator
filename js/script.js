let baseLink = 'mailto:';
let output = document.getElementById('output');
let form = document.querySelector('form');

output.textContent = baseLink;

form.addEventListener('change', function() {
    const email = document.getElementById('email').value;
    const cc = document.getElementById('cc').value;
    const bcc = document.getElementById('bcc').value;
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;
    
    if (email) {
        output.textContent = output.textContent + `${email}?`;
        console.log('email ' + output.textContent)
    } else {
        
    }
    if (cc) {
        output.textContent = output.textContent + `cc=${cc}`;
        console.log('cc ' + output.textContent)
    } 
    if (bcc) {
        output.textContent = output.textContent + `bcc=${bcc}`;
        console.log('bcc ' + output.textContent)
    } 
    if (subject) {
        output.textContent = output.textContent + `subject=${subject}`;
        console.log('subj ' + output.textContent)
    } 
    if (body) {
        output.textContent = output.textContent + `body=${body}`;
        console.log('body ' + output.textContent)
    }
    // output.textContent = `${baseLink}${email}?cc=${cc}&bcc=${bcc}&subject=${subject}&body=${body}`;
});

// mailto:to?cc=cc&bcc=bcc&subject=subject&body=body
