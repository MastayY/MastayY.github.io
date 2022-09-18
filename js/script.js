// responsive navbar
const menuToggle = document.querySelector('.menu-toggle input')
const nav = document.querySelector('.navbar ul')

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
});

// text typing
const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Web Developer";
            }, 0);
            setTimeout(() => {
                text.textContent = "Student";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Human";
            }, 8000); 
        }

        textLoad();
        setInterval(textLoad, 12000);
