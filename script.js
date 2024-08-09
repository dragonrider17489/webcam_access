const startButton = document.getElementById('startButton');
const video = document.getElementById('webcam');

startButton.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (error) {
        console.error('Error accessing webcam: ', error);
        alert('Unable to access webcam. Please check your browser settings and ensure you have granted permission.');
    }
});
