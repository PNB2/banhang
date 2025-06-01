document.getElementById('myform').addEventListener('submit', function(event){
    const username = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail3').value;
    const sodt = document.getElementById('inputphone').value;   
    const note = document.getElementById('exampleFormControlTextarea1').value;

    // Simple test
    if (!username) {
        alert('Name cannot be empty.');
        event.preventDefault();
        return;
    }

    if (!sodt || isNaN(sodt) || sodt.length !== 10) {
        alert('Phone number must be numeric and 10 digits long.');
        event.preventDefault();
        return;
    }

    if (!email || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert('Invalid email address.');
        event.preventDefault();
        return;
    }

    if (!note) {
        alert('Note cannot be empty.');
        event.preventDefault();
        return;
    }

    // If all is valid, the form will be submitted normally to process.php
    // Don't call event.preventDefault() anymore => the form will send data to the server
});