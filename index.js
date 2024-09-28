
document.addEventListener('DOMContentLoaded', () => {
    const message = "Happy Birthday, [Friend's Name]!";
    const element = document.querySelector('.happy-birthday h1');
    let i = 0;

    function typeMessage() {
        if (i < message.length) {
        element.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeMessage, 100);
        }
    }

    typeMessage();
});

