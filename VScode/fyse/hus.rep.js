"use strict";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//fjell
ctx.beginPath(); //deklarerer at vi skal begynne å tegne
ctx.moveTo(0, 100); //setter et startpunkt til hvor vi skal begynne å tegne - en x og en y verdi
ctx.lineTo(200, 270); //setter sluttpunktet til streken vår
ctx.lineTo(400, 100);
ctx.lineTo(700, 300);
ctx.strokeStyle = "grey";
ctx.stroke(); //tegner streken

//sol
ctx.beginPath();
ctx.arc(150, 80, 35, 0, 2 * Math.PI); //vi ganger med to for å få en hel sirkel
ctx.strokeStyle = "yellow";
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();

//hus1
ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(420, 370, 150, 150);
ctx.fill();
ctx.stroke();

//dør
