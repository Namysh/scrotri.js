function Scrotri(options = {}) {
    const _elements = document.querySelectorAll('[data-sctr]');

    options && options.useAnimateCSS &&
        document.head.insertAdjacentHTML(
            'beforeend',
            '<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"/>'
        );

    const _handleScroll = () => {
        [..._elements].forEach(element => {
            const windowHeight = window.innerHeight;
            const posFromTop = element.getBoundingClientRect().top;

            if (posFromTop - windowHeight <= 0)
                element.classList.add(
                    'animated',
                    element.dataset.sctr || 'undefined'
                );
            else
                element.dataset.sctrOnce ||
                    element.classList.remove('animated', element.dataset.sctr);
        });
    };

    window.addEventListener('scroll', _handleScroll);
}
