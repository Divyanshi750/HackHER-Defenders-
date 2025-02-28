let mediaRecorder;
let audioChunks = [];

document.getElementById('recordButton').addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = event => {
            audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);

            document.getElementById('saveButton').disabled = false;
            document.getElementById('saveButton').onclick = () => {
                // Add logic to save the audio blob to your backend
                console.log("Audio blob:", audioBlob);
                // You can send the audioBlob to your backend here
            };
        };

        mediaRecorder.start();
        document.getElementById('recordButton').innerHTML = "Recording...";

        setTimeout(() => {
            mediaRecorder.stop();
            document.getElementById('recordButton').innerHTML = '<img src="microphone.png" alt="Microphone">';
        }, 5000); // Stop recording after 5 seconds (adjust as needed)

    } catch (error) {
        console.error('Error recording audio:', error);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById("saveButton");

    saveButton.addEventListener("click", function () {
        window.location.href = "sos.html";
    });
});