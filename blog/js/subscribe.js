// Wrap in an event listener to ensure the HTML is ready
document.addEventListener('DOMContentLoaded', () => {
    const subscribeForm = document.getElementById('subscribe-form');

    // Safety check: only run if the form exists on this specific page
    if (!subscribeForm) return;

    subscribeForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const formData = new FormData(subscribeForm);
        const turnstileResponse = formData.get('cf-turnstile-response');
        const btn = document.getElementById('sub-button');
        const msg = document.getElementById('msg');

        btn.disabled = true;
        msg.style.display = 'block';
        msg.innerText = 'sending invitation... please be patient...';

        try {
            const response = await fetch('https://subscribe.superjeffc.com/subscribe', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    "cf-turnstile-response": turnstileResponse
                }),
                headers: { 'Content-Type': 'application/json' }
            });

            const result = await response.json();

            if (response.ok) {
                subscribeForm.style.display = 'none';
                msg.innerText = 'please check your inbox to confirm your email.';
            } else {
                msg.innerText = result.error || 'Something went wrong.';
                btn.disabled = false;
            }
        } catch (err) {
            msg.innerText = 'connection error.';
            btn.disabled = false;
        }
    });
});