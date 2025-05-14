"use strict";
import lib2d_v2 from "../../common/libs/lib2d_v2.mjs";
import libSprite_v2 from "../../common/libs/libSprite_v2.mjs";
import {
  SheetData,
  GameProps,
  EGameStatus,
  baitIsEaten,
  newGame,
} from "../../module_6/snake/game.mjs";

/* Use this file to create the menu for the snake game. */


export class TMenu {
  #spHome;
  #spResume;
  #spPlay;
  #spRetry;
  #spNumber;
  #spGameOver;
  #spcvs;
  #baitScoreNumber;
  #endPoint;

  constructor(aSpriteCanvas) {
    console.log("create menu");
    this.#spcvs = aSpriteCanvas;

    const pos = new lib2d_v2.TPosition(25, 52);
    this.#spGameOver = new libSprite_v2.TSprite(aSpriteCanvas, SheetData.GameOver, pos);

    pos.x = 350;
    pos.y = 210;
    this.#spPlay = new libSprite_v2.TSpriteButton(aSpriteCanvas, SheetData.Play, pos);
    this.#spPlay.index = 0;
    this.#spPlay.animateSpeed = 20;
    this.#spPlay.onClick = () => {  //fikk hjelp til å kode dette av kandidatnr. 518;
      newGame();
      GameProps.gameStatus = EGameStatus.Playing;
      this.#spPlay.visible = false;

      clearInterval(this.countdownInterval); // sikkerhet, så ingen dobbel start
      this.#baitScoreNumber.value = 50; 
      this.countdownInterval = setInterval(this.countDown, 250);
    };

    //nedtelling for poeng
    pos.x = 810;
    pos.y = 20;
    this.#baitScoreNumber = new libSprite_v2.TSpriteNumber(aSpriteCanvas, SheetData.Number, new lib2d_v2.TPoint(pos.x, pos.y));
    this.#baitScoreNumber.scale = 0.5;
    this.#baitScoreNumber.alpha = 0.5;
    this.#baitScoreNumber.visible = true; //Toggle denne false/true, ettersom du ønsker å vise eller skjule
    this.#baitScoreNumber.value = 50;

    //poeng-score tall
    pos.x = 20;
    pos.y = 20;
    this.#spNumber = new libSprite_v2.TSpriteNumber(aSpriteCanvas, SheetData.Number, new lib2d_v2.TPoint(pos.x, pos.y));
    this.#spNumber.scale = 0.5;
    this.#spNumber.alpha = 0.5;
    this.#spNumber.visible = true; //Toggle denne false/true, ettersom du ønsker å vise eller skjule
    this.#spNumber.value = 0;

    pos.x = 350;
    pos.y = 210;
    this.#spResume = new libSprite_v2.TSpriteButton(aSpriteCanvas, SheetData.Resume, pos);
    this.#spResume.animateSpeed = 20;
    this.#spResume.onClick = this.togglePause;
    this.#spResume.visible = false;

    pos.x = 90;
    pos.y = 400;
    this.#spHome = new libSprite_v2.TSpriteButton(aSpriteCanvas, SheetData.Home, pos,);
    this.#spHome.onClick = () => {
      newGame();
      GameProps.gameStatus = EGameStatus.Idle;
      this.#spPlay.visible = true;
    };

    pos.x = 640;
    pos.y = 400;
    this.#spRetry = new libSprite_v2.TSpriteButton(aSpriteCanvas, SheetData.Retry, pos);
    this.#spRetry.animateSpeed = 20;
    this.#spRetry.onClick = () => {
      newGame();
      GameProps.gameStatus = EGameStatus.Playing;

      clearInterval(this.countdownInterval);
      this.countdownInterval = setInterval(this.countDown, 250);
    };

    //endelig poeng-score, vises ved GameOver
    pos.x = 550;
    pos.y = 265;
    this.#endPoint = new libSprite_v2.TSpriteNumber(aSpriteCanvas, SheetData.Number, pos);
    this.#endPoint.value = this.#spNumber.value;

  }

  draw() {
    switch (GameProps.gameStatus) {
      case EGameStatus.Idle:
        this.#spPlay.draw();
        this.#spRetry.visible = false;
        this.#spHome.visible = false;
        break;
      case EGameStatus.Playing:
        this.#spNumber.draw();
        this.#baitScoreNumber.draw();
        this.#spRetry.visible = false;
        this.#spHome.visible = false;
        break;
      case EGameStatus.Pause:
        this.#spResume.draw();
        this.#spNumber.draw();
        this.#baitScoreNumber.draw();
        this.#spRetry.visible = false;
        this.#spHome.visible = false;
        break;
      case EGameStatus.GameOver:
        this.#spNumber.draw();
        this.#baitScoreNumber.draw();
        this.#spGameOver.draw();
        this.#endPoint.draw();

        clearInterval(this.countdownInterval);

        //setter knappene til true, så de vises og fungerer
        this.#spHome.visible = true;
        this.#spRetry.visible = true;
        break;
    }
  }

  togglePause = () => { //kodehjelp fra Arne Thomas. Fjerne countdown når det er pause, og få den til å starte igjen ved resume.
    if (GameProps.gameStatus === EGameStatus.Pause) {
      GameProps.gameStatus = EGameStatus.Playing;
      this.countdownInterval = setInterval(this.countDown, 250);
    } else if (GameProps.gameStatus === EGameStatus.Playing) {
      GameProps.gameStatus = EGameStatus.Pause;
      clearInterval(this.countdownInterval);
    }
    this.#spResume.visible = GameProps.gameStatus === EGameStatus.Pause;
  }

  countDown = () => { //Kodehjelp fra copilot
      if (this.#baitScoreNumber.value > 1) {
         this.#baitScoreNumber.value--;
          } else {
            clearInterval(this.countdownInterval); // Stoppe countDown når den når 1
          }
       };


  incScore(){ //legger til poeng for hver bait
    if(baitIsEaten){
      this.#spNumber.value += this.#baitScoreNumber.value;
      this.#endPoint.value = this.#spNumber.value;
      this.#baitScoreNumber.value = 50;
      clearInterval(this.countdownInterval);
      this.countdownInterval = setInterval(this.countDown, 250);
    }
  }
  
  resetScore(){ //setter scoren tilbake til null ved GameOver
    if(GameProps.gameStatus === EGameStatus.GameOver){
      this.#endPoint.value = 0;
      this.#spNumber.value = 0;
      this.#baitScoreNumber.value = 50;
    }
  }

}
