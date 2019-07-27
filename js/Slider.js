'use strict';

class Slider {
    constructor() {
        this.butNext = document.getElementById("butNext");
        this.butPrev = document.getElementById("butPrev");
        this.slides = document.getElementsByClassName("diapo");
        this.stop = document.getElementById("stop");
        this.currentSlide = 1;
        this.sliderAuto = setInterval(this.plusSlides.bind(this), 5000);
        this.stateStop = 0;
    };

    initSlider() {
        this.showSlides();
        document.addEventListener("keydown", this.keyboardControl.bind(this));
        this.butNext.addEventListener("click", this.plusSlides.bind(this));
        this.butPrev.addEventListener("click", this.prevSlide.bind(this));
        this.stop.addEventListener("click", this.stopDefil.bind(this));
    };

    plusSlides() {
        this.showSlides(this.currentSlide += 1);
    };

    prevSlide() {
        this.showSlides(this.currentSlide -= 1);
    };

    showSlides(n) {
        if (n > this.slides.length) {
            this.currentSlide = 1;
        }
        if (n < 1) {
            this.currentSlide = this.slides.length;
        }
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
        }
        this.slides[this.currentSlide - 1].style.display = "block";
    };

    //Gestion du bouton d'arrêt

    stopDefil() {

        if (this.stateStop === 0) {
            clearInterval(this.sliderAuto);
            this.stop.textContent = "Demarrer le diaporama";
            this.stateStop ++;
        }
        else  {
            this.sliderAuto = setInterval(this.plusSlides.bind(this), 5000);
            this.stop.textContent = "Arrêter le diaporama";
            this.stateStop --;}
    };


    //Contrôle au clavier
    keyboardControl(e) {
        switch (e.key) {

            case "ArrowLeft":
                this.prevSlide();
                break;

            case "ArrowRight":
                this.plusSlides();
                break;

            default:
                break;
        }
    };
}