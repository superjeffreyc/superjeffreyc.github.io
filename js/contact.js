// Wrap in an event listener to ensure the HTML is ready
document.addEventListener('DOMContentLoaded', () => {
    const WORKER_URL = 'https://contact.superjeffc.com/';

    const form = document.getElementById('personalContactForm');
    const statusMsg = document.getElementById('status-message');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // UI Feedback: Loading
        btnText.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Gather data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(WORKER_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                statusMsg.textContent = "Thanks! Your message has been sent successfully.";
                statusMsg.className = "visible-success";
                form.reset();
                form.style.display = 'none';
                btnText.textContent = 'Message Sent!';
            } else {
                throw new Error('Server responded with an error.');
            }
        } catch (error) {
            console.error('Error:', error);
            statusMsg.textContent = "Oops! Something went wrong. Please try again later.";
            statusMsg.className = "visible-error";
            btnText.textContent = 'Send Message';
            submitBtn.disabled = false;
        }
    });
});