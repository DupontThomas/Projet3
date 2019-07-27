"use strict";

//Initialisation du slider
var slider = new Slider();
slider.initSlider();

//Initialisation de la Map
var mappi = new Map(49.0333,2.0667);
mappi.initMap();

//Initialisation du formulaire de réservation
var reservation = new Reservation();
reservation.initRes();

//Initialisation du canvas
var canvas = new Canvas;
canvas.initCanvas();
