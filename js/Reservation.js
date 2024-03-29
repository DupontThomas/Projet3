"use strict";

class Reservation {
    constructor() {
        this.blockInfoResa = document.getElementById("infoReservation");
        this.address = sessionStorage.getItem("stationAdress");
        this.noRes = document.getElementById("noRes");
        this.stationConfirm = document.getElementById("stationConfirm");
        this.confirmResa = document.getElementById("confirmResa");
        this.resConf = document.getElementById("resConf");
        this.resStop = document.getElementById("resStop");

        this.nameConfirm = document.getElementById("nameConfirm");
        this.fNameConfirm = document.getElementById("fNameConfirm");
        this.lName = document.getElementById("inputLastName");
        this.fName = document.getElementById("inputFirstName");
        this.storedName = localStorage.getItem("lastname");
        this.storedFName = localStorage.getItem("firstname");

        this.minTimer = document.getElementById("minTimer");
        this.secTimer = document.getElementById("secTimer");
        this.timeMin = sessionStorage.getItem("timeMin");
        this.timeSec = sessionStorage.getItem("timeSec");
        this.timer= "";
    }

    initRes() {
        this.confirmResa.addEventListener("click", this.checkData.bind(this));

        if(this.timeSec===0 && this.timeMin===0) {
            sessionStorage.setItem("stationAdress", "");
        }

        if(this.address) {
                this.displayConfirmResa();
                this.startTimer();
            }
    }

    checkData() {
        if (this.lName.value === "") {
            alert("Merci de renseigner votre nom pour valider votre réservation.");
        }
        else if (this.fName.value === "") {
            alert("Merci de renseigner votre prénom pour valider votre réservation.");
        }
        else if (canvas.paint === 0) {
            alert("Votre signature est nécessaire pour valider votre réservation.");
        }
        else {
            this.storeData();
        }
    }

    storeData() {

        //stockage du nom et prenom en local
        localStorage.setItem("lastname", this.lName.value);
        localStorage.setItem("firstname", this.fName.value);

        //Attribution des données en local dans une variable
        this.storedName = localStorage.getItem("lastname");
        this.storedFName = localStorage.getItem("firstname");

        //Stockage de l'adresse de la station sélectionnée
        this.address = sessionStorage.getItem("stationAdress");

        //Affichage de l'encadré confirmant la réservation avec nom, prenom, adresse de la station et timer

        this.noRes.classList.add("hid");
        this.resStop.classList.add("hid");
        this.resConf.classList.remove("hid");
        this.blockInfoResa.style.backgroundColor = "rgba(51,255,51,0.5)";
        this.stationConfirm.innerText = this.address;
        this.timeMin = 20;
        this.timeSec = 0;

        this.setInfoResa();
        clearInterval(this.timer);
        this.startTimer();
    }

            //Mise en place du timer
    startTimer() {
        this.timer = setInterval(this.countDown.bind(this), 1000);
    }

    countDown() {
        sessionStorage.setItem("timeMin",this.timeMin);
        sessionStorage.setItem("timeSec",this.timeSec);
        this.displayConfirmResa();
        this.timeSec--;
        if (this.timeSec < 0) {
            this.timeSec = 59;
            this.timeMin--;
        }
        if (this.timeMin < 0) {
            this.resConf.classList.add("hid");
            this.resStop.classList.remove("hid");
            this.blockInfoResa.style.backgroundColor = "rgba(255,51,0,0.5)";
            clearInterval(this.timer);
        }
    }

    displayConfirmResa() {
        this.timeMin = sessionStorage.getItem("timeMin");
        this.timeSec = sessionStorage.getItem("timeSec");
        this.setInfoResa();
        this.noRes.classList.add("hid");
        this.resConf.classList.remove("hid");
        this.blockInfoResa.style.backgroundColor = "rgba(51,255,51,0.5)";
    }

    setInfoResa() {
        this.nameConfirm.innerText = this.storedName;
        this.fNameConfirm.innerText = this.storedFName;
        this.stationConfirm.innerText = this.address;
        this.minTimer.innerText = this.timeMin;
        this.secTimer.innerText = this.timeSec;
    }
}