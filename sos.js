const sosButton = document.getElementById('sosButton');
let beepInterval;

sosButton.addEventListener('click', () => {
    sosButton.classList.toggle('active');

    if (sosButton.classList.contains('active')) {
        beepInterval = setInterval(() => {
            const audio = new Audio('beep.wav'); // Replace with your beep sound file
            audio.play();
        }, 1000); // Beep every 1 second
        // Add your SOS logic here (e.g., send alerts to emergency contacts)
        console.log("SOS activated!");
    } else {
        clearInterval(beepInterval);
        // Add logic to cancel the SOS alert
        console.log("SOS deactivated!");
    }
});