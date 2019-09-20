function scrotri(importAnimateCSS=false) {     
    return { init : (()=> {
        // On récupère tous les éléments concernés par le framework
        var elementArray = document.getElementsByClassName("SCTR-init");
        var windowHeight = window.innerHeight;
        // Si on importe animateCSS
        if(importAnimateCSS){
            let link = document.createElement('link');  
            link.rel = 'stylesheet';  
            link.type = 'text/css'; 
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css';  
            document.getElementsByTagName('HEAD')[0].appendChild(link);  
        }
        // Event scroll
        window.addEventListener("scroll", awaitingAnimation);    
        // Fonction qui calcule la position des éléments à affiche les animations en conséquence
        function awaitingAnimation() {
            [...elementArray].forEach((elem) => {
                let posFromTop = elem.getBoundingClientRect().top;
                let posFromBottom = elem.getBoundingClientRect().bottom;
                if (posFromTop - windowHeight <= 0) {
                    let animation_name = elem.dataset.sctr;
                    elem.className = elem.className.replace("SCTR-init", "animated " + animation_name);

                }
            })
        }
    })()};
}