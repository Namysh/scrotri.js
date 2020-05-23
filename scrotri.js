function Scrotri(options = {}) {
    const elements = document.querySelectorAll('.SCTR-init');
    const windowHeight = window.innerHeight;

    options.useAnimateCSS &&
        document.head.insertAdjacentHTML(
            'beforeend',
            '<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"/>'
        );

    window.addEventListener('scroll', function awaitingAnimation() {
        [...elements].forEach((element) => {
            const posFromTop = element.getBoundingClientRect().top;
            if (posFromTop - windowHeight <= 0)
                element.className = element.className.replace(
                    'SCTR-init',
                    'animated ' + element.dataset.sctr || 'undefined'
                );
        });
    });
}