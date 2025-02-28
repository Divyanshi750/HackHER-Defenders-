document.querySelector('.save-button').addEventListener('click', function() {
    const contact1 = document.querySelector('input[placeholder="CONTACT 1*"]').value;
    const contact2 = document.querySelector('input[placeholder="CONTACT 2 (OPTIONAL)"]').value;
    const contact3 = document.querySelector('input[placeholder="CONTACT 3 (OPTIONAL)"]').value;

    console.log("Contact 1:", contact1);
    console.log("Contact 2:", contact2);
    console.log("Contact 3:", contact3);

    // Add logic to save these contacts to your backend
});