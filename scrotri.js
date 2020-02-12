function scrotri(importAnimateCSS = false) {
    const elements = document.getElementsByClassName('SCTR-init');
    const windowHeight = window.innerHeight;

    if (importAnimateCSS) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css';
        document.getElementsByTagName('HEAD')[0].appendChild(link);
    }

    window.addEventListener('scroll', function awaitingAnimation() {
        [...elements].forEach((elem) => {
            const posFromTop = elem.getBoundingClientRect().top;
            if (posFromTop - windowHeight <= 0) {
                const animation_name = elem.dataset.sctr || 'undefined';
                elem.className = elem.className.replace('SCTR-init', 'animated ' + animation_name);
            }
        })
    });
}
